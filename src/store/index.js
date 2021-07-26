import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";
import UsersStore from "./modules/UsersStore";
Vue.use(Vuex);

const store = new Vuex.Store({
 modules:{
   UsersStore
 }
})

export default store;
