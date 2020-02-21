<template>
  <div>
    <h2>Tables des multiplications</h2>
    <div class="ttable" v-for="m in (1, max)" v-bind:key="m">
      <TableMultiplication :n="m" />
    </div>
  </div>
</template>

<script>
import TableMultiplication from "../components/TableMultiplication.vue";

export default {
  name: "TablesTableMultiplication",
  props: {
    maxbis: Number,
  },
  computed: {
    max : function () {
      // eslint-disable-next-line no-console
      console.log("this.$route.params.max = " + this.$route.params.max);
      return   this.$route.params.max ? parseInt(this.$route.params.max) : 5;
    }
  },
  components: {
    TableMultiplication
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .ttable {
    background-color: #41b883;
    border-radius: 5px;
    width: 10em;
    margin: 2em;
    display: inline-block;
  }
</style>
