<template>
  <div id="app">
    <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
        <navbar></navbar>
        <router-view> </router-view>
        <add-blog></add-blog>
        <vuelessons></vuelessons>
        <app-footer></app-footer>
      </div>
      <div class="col-md-1"></div> 
    </div>
  </div>
</template>

<script>
  import Navbar from './components/navbar.vue';
  import Footer from './components/footer.vue';
  import VueLessons from './components/lesson.vue';
  import addBlog from './components/addBlog.vue';


  export default {
    components: {
      'navbar': Navbar,
      'app-footer': Footer,
      'add-blog': addBlog,
      'vuelessons': VueLessons
    }
  }
</script>

<style>

</style>