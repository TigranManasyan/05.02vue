<template>
  <div>
      <b-table :items="list"></b-table>
  </div>
</template>

<script>
export default {
  name:'List',
  data() {
    return {
      list:JSON.parse(localStorage.getItem('list')) || []
    }
  },
  mounted() {

  }
}
</script>

<style scoped>

</style>
