<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <nav>
      <router-link to="/">&nbsp;Home |</router-link>
      <router-link to="/tables/10">&nbsp; 10 Tables |</router-link>
      <router-link to="/tables/13">&nbsp; 13 Tables |</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "app",
    data: function () {
      return {
        n: 7
      };
    },
    components: {
    }
  };
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
