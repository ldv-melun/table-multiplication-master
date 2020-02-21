<template>
  <tr class="tdm">
    <td>{{i}}</td>
    <td>x</td>
    <td>{{j}}</td>
    <td>=</td>
    <td>{{ixj}}</td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: {
    i : Number,
    j : Number
  },
  computed: {
    ixj : function() {
      return this.i * this.j;
    }
  }
}
</script>

<style scoped>

.tdm td {
  background-color: lightgray; 
  border-bottom:1pt solid black;
}

</style>
