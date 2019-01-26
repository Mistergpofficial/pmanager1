<template>
  <div >
      <nav-bar></nav-bar>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Home from './components/Home.vue';
  import Navbar from './components/Navbar.vue';
  import Footer from './components/Footer.vue'
  export default {
      components: {
          'home': Home ,
          'nav-bar': Navbar,
          'app-footer': Footer
      }

  }
</script>