<template>
  <div>
    <div :style="{
      width:`${width}px`,
      height:`${height}px`,
      background:`${(col) ? 'red' : 'green'}`,

    }"
    @click="col = !col"
    ></div>
  </div>
</template>

<script>
export default {
  props:{
    width:{
      type:String | Number,
      required:true
    },
    height:{
      type:String | Number,
      required:true
    },
    bgcolor:{
      type:String ,
      required:true
    }
  },
  data() {
    return {
      col:true
    }
  }
}
</script>
<style scoped>

</style>
