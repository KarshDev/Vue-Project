<template>
    <div id="add-blog">
        <h2>Add a New Blog Post</h2>

       
        <form v-if="!submitted"> <!-- Hide Form after submit button is clicked -->

            <label>Blog Title: </label>
            <input type="text" v-model.lazy="blog.title" required/>
            <label>Blog Content: </label>
            <textarea v-model.lazy="blog.content" ></textarea>
            <div id="checkboxes">
                <label>Joker: </label>
                <input type="checkbox" value="Joker" v-model="blog.categories" />
                <label>Villain: </label>
                <input type="checkbox" value="Villain" v-model="blog.categories" />
                <label>Boss: </label>
                <input type="checkbox" value="Boss" v-model="blog.categories" />
                <label>Hero: </label>
                <input type="checkbox" value="Hero" v-model="blog.categories" />
            </div>
            <label>Select Producer: </label>
            <select v-model="blog.producers">
                <option v-for="producer in producers" :key="producer">{{producer}}</option>
            </select>
            <br />
            <b-button id="addBlog" v-on:click.prevent="post" variant="info">Add Blog
            </b-button>

        </form>

        <div v-if="submitted">
            <b-button pill variant="success" disabled>Thanks for adding your post</b-button>
        </div>

        <div id="preview">
            <h3>Preview Blog</h3>
            <p>Blog title: {{blog.title}}</p>
            <p>Blog Content: </p>
            <p>{{blog.content}}</p>
            <p>Blog Categories: </p>
            <ul>
                <li v-for="category in blog.categories" :key="category">{{ category }}</li>
            </ul>
            <p>Producer: {{blog.producer}}</p>

        </div>

    </div>
    
</template>

<script>

    export default {
        data(){
            return{
                blog: {
                    title: "",
                    content: "",
                    categories: [],
                    producers: ""
                },
                producers: ["Game of Thrones", "The Money Heist", "Power", "Gemini Man"],
                submitted: false,
            }
        },
        methods: {
            post: function(){
                this.$http.post('http://jsonplaceholder.typicode.com/posts', {
                    this: this.blog.title,
                    body: this.blog.content,
                    userId: 1
                }).then(function(data){
                    console.log(data);
                    this.submitted = true;
                });
            }
        },
    }
</script>

<style scoped>

#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}

#checkboxes input{
    display: inline-block;
    margin-right: 20px;
}

#checkboxes label{
    display: inline-block;
    margin-right: 5px;
}

#addBlog{
    margin-top: 20px;
}

</style>