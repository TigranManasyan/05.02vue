<template>
  <div>
    <h2>User {{ id }}</h2>
  </div>
</template>

<script>
export default {
  name:'User',
  data() {
    return {
      id:null
    }
  },
  mounted() {
    this.id = this.$route.params.id
  }
}
</script>

<style scoped>

</style>
