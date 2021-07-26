<template>
  <div :style="{
    width:`${id}px`,

  }">
      <h1>{{ text }}</h1>
      <p>{{ id }}</p>

    <p>{{ skills.front }}</p>
  </div>
</template>

<script>
export default {
  name:"Header",
  props:{
    text: {
      // required:true,
      default:'Hello',
      type:String
    },
    id:{
        required:true,
        type:Number
    },
    skills:{
      type:Object | Array
    }
  }
}
</script>

<style scoped>

</style>
