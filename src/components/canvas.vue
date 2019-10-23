<template>
  <div class="row">
    <div class="col-md-3"></div>
    <div class="col-md-6">
      <b-alert show>CANVAS TUTORIAL</b-alert>
      <div id="canvas" v-on:mousemove="updateXY"> {{ x }}, {{ y }} </div>
      <p>Showing coordinate points of your mouse over the box</p>
    </div>
    <div class="col-md-3"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
          x: 0,
          y: 0
       }
    
    },
  methods: {
    updateXY: function(event){
      this.x=event.offsetX;
      this.y=event.offsetY;
      }
    },
  }
</script>

<style scoped>
/*  Canvas Styling */

#canvas{
  width: auto;
  height: auto;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid #333;
}

p{
  color: darkgoldenrod;
  text-emphasis: bold;
  align-self: center;
}
</style>