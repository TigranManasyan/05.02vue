<template>
  <div>
    <b-container>
      <b-table :items="users">

      </b-table>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'StoreUsers',
  mounted() {
    this.$store.dispatch('UsersStore/getUsers');
  },
  computed:{
    users() {
      return this.$store.getters['UsersStore/users'];
    }
  }
}
</script>

<style scoped>

</style>
