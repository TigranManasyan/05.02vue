import axios from 'axios';
export default {
  namespaced:true,
  state: {
    users:[]
  },
  mutations:{
    storeUsers(state, data) {
      state.users = data;
    }
  },
  getters:{
    users: state => state.users
  },
  actions: {
    getUsers(context) {
      axios.get("https://reqres.in/api/users").then( response => {
        context.commit('storeUsers', response.data.data)
      })
    }
  }
}
