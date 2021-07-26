<template>
  <div>
      <b-nav>
        <b-nav-item active>
          <router-link :to="{name:'Form'}">
            Form
          </router-link>
        </b-nav-item>
        <b-nav-item>Link</b-nav-item>
        <b-nav-item>Another Link</b-nav-item>
        <b-nav-item disabled>Disabled</b-nav-item>
      </b-nav>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
