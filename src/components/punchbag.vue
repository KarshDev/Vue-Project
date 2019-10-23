<template>
<div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-10">
       <div id="app">

            <!-- Bag Image --> 
            <div id="bag" v-bind:class="{ burst: ended}">

            </div>
            <!-- Bag Health -->
            <div id="bag-health">
                <div v-bind:style="{width: health + '%'}"></div> 
            </div>

            <!-- Bag Controls -->
            <div id="bag-controls">
                <b-button pill variant="outline-success" v-on:click="punch" v-show="!ended"> PUNCH </b-button>
                <b-button pill variant="warning" v-on:click="restart"> RESTART </b-button>
            </div>
        </div>      
    </div>
    <div class="col-md-1"></div>
</div>

</template>

<script>

export default {
    data() {
        return {
            health: 100,
            ended: false
        }
    },

    methods: {
        punch: function(){
            this.health -= 10;
            if (this.health <= 0){
                this.ended = true;
            }
        },
        restart: function () {
            this.health = 100;
            this.ended = false;
        }
    }   

}

</script>

<style>

#bag{
    width: 200px;
    height: 500px;
    margin: 0 auto;
    background: url(../assets/img/bag.png) center no-repeat;
    background-size: 80%;
}

#bag.burst{
    background: url(../assets/img/bag-burst.png) center no-repeat;
    background-size: 80%;
}

#bag-health{
    width: 200px;
    border: 2px solid  #000;
    margin: 0 auto 20px auto;
}

#bag-health div{
    height: 20px;
    background: crimson;    
}

#bag-controls{
    width: 200px;
    margin: 0 auto;    
}


</style>    