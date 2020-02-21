<template>
  <div>
    <h3>Table de {{nvalue}}</h3>
    <table class="table-multiplication" >
      <tbody>
         <TableRow v-for="v in (1, 10)" v-bind:key="v"
                   v-bind:j="nvalue" v-bind:i="v"/>
      </tbody>
    </table>
    <br/>
  </div>
</template>

<script>
  import TableRow from "./TableRow.vue";

  export default {
    name: "TableMultiplication",
    props: {
      n: {
        type: Number,
        default: 5
      }
    },
    components: {
      TableRow
    },
    computed: {
      nvalue: function () {
        // eslint-disable-next-line no-console
        console.log("computed...");
        // eslint-disable-next-line no-console
        console.log(
          "this.n = >" +
          this.n +
          "<  :  isNaN :" +
          isNaN(this.n));

        return  this.n;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .table-multiplication {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    background-color: lightblue;
  }
</style>
