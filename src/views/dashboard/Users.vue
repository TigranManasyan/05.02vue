<template>
  <div>
    <b-container>
      <h1>Users</h1>
      <b-table
        :items="users"
        :fields="fields"
      >
        <template v-slot:cell(avatar) = "data">
          <img style="width:60px; height: 60px;border-radius: 8px;" :src="data.item.avatar">
        </template>
        <template v-slot:cell(actions) = "data">
          <b-button variant="primary">
            <router-link style="color:white" :to="{name:'User',params:{id:data.item.id}}">
              More info
            </router-link>
          </b-button>
        </template>
      </b-table>

      <b-button @click="changePage(1)" variant="info">
        1
      </b-button>

      <b-button @click="changePage(2)" variant="info">
        2
      </b-button>

    </b-container>
  </div>
</template>

<script>
export default {
  name:'Users',
  data() {
    return {
      users:[],
      fields:[
        {key:'id'},
        {key:'first_name'},
        {key:'last_name'},
        {key:'avatar'},
        {key:'email'},
        {key:'actions'}
      ]
    }
  },
  mounted() {
    this.axios.get('https://reqres.in/api/users?page=2').then( response => {
      this.users = response.data.data;
    }).catch( error => {
      console.log(error);
    })
  },
  methods:{
    changePage(page_num) {
      this.axios.get(`https://reqres.in/api/users?page=${page_num}`).then( response => {
        this.users = response.data.data;
      }).catch( error => {
        console.log(error);
      })
    }
  }
}
</script>

<style scoped>

</style>
