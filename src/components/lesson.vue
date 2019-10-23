<template>
  <div>
    <div class="row">
      <div class="col-md-2"></div>
      <div class="col-md-8">
          <div id="lessons">
              <ul>
                  <li v-for="lesson in lessons" :key="lesson.name" v-on:click="lesson.show=!lesson.show">
                      <b-button variant="outline-success">{{lesson.name}}</b-button> <br />
                      <h4 v-show="lesson.show">{{lesson.description}}</h4>
                  </li>
              </ul>
          </div>
      </div>
      <div class="col-md-2"></div> 
    </div>
  </div>
</template>

<script>
  export default {
    data(){
        return{
            lessons: [
                {name: 'PunchBag', description: 'All categories', show: false},
                {name: 'Canvas', description: 'Click events', show: false},
                {name: 'Login', description: 'Simple data property', show: false},
                {name: 'Profile', description: 'Routing', show: false},
                {name: 'Register', description: 'Object', show: false},
                {name: 'App-Header', description: 'Navigation content', show: false},
                {name: 'App-Footer', description: 'Application footer', show: false}
            ]
        }
    }
  }
</script>

<style scoped>
#lessons{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing:border-box;
}

ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}

li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid chartreuse;
    margin: 10px;
    background-color: black
}

h4{
  color: #fff;
}

</style>