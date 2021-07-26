<template>
  <div>
    <h1>Product {{ product_name  }}</h1>
  </div>
</template>
<script>
export default {
  name:'Product',
  data() {
    return {
      id:null,
      product_name:''
    }
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product_name = this.$route.params.prod_name
  }
}
</script>

<style scoped>

</style>
