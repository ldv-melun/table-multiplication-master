<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="100" height="100">
    <nav>
      <router-link to="/">&nbsp;Home |</router-link>
      <router-link to="/tables/10">&nbsp;Tables</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  // import TableMultiplication from "./components/TableMultiplication.vue";
  // import TablesTableMultiplication from "./views/TablesTableMultiplication.vue";

  export default {
    name: "app",
    data: function () {
      return {
        n: 7
      };
    },
    components: {
     // TableMultiplication,
      // TablesTableMultiplication
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
