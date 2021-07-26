import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Products from "../views/dashboard/Products";
import Product from "../views/dashboard/Product";
import Users from "../views/dashboard/Users";
import User from "../views/dashboard/User";
import Form from "../views/dashboard/Form";
import List from "../views/dashboard/List";
import StoreUsers from "../views/dashboard/StoreUsers";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/products/all', name:'AllProducts', component:Products},
    { path: '/products/:id', name:'Product', component:Product},
    { path: '/users', name:'Users', component:Users},
    { path: '/users/:id', name:'User', component:User},
    { path: '/form', name:'Form', component:Form},
    { path: '/list', name:'List', component:List},
    { path: '/store_users', name:'StoreUsers', component:StoreUsers},
  ]
})
