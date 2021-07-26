<template>
  <div>
<!--    <h1>{{ msg }}</h1>
    <h1> {{ num1 }}</h1>
    <ul>
      <li @click="listItem(index)" v-for="(car, index) in cars"> {{ index }} -> {{ car }}</li>
    </ul>

    <button @click="sayHello">{{ text }}</button>

    <h1 v-if="num1 % 2 == 0" style="color:red"> Good! </h1>
    <h1 v-else style="color:green"> Good! </h1>-->
<!--    <layout-header text="asd" id= "1" :skills="{front:'html'}" />-->

<!--    <button @click="show = !show">Click me</button>-->
<!--    <h1 v-if="show">Hello I am toggle</h1>-->

<!--    <nav-bar />-->
<!--    <b-container>-->
<!--      <h1>Hello</h1>-->
<!--&lt;!&ndash;      <b-button variant="primary"> More </b-button>&ndash;&gt;-->
<!--      <b-table :items="products" :fields="fields">-->
<!--        <template v-slot:cell(actions)="data">-->
<!--          <b-button variant="primary"> More  </b-button>-->
<!--        </template>-->
<!--      </b-table>-->
<!--    </b-container>-->
  <nav-bar />
  <Square width="100" height="100" bgcolor="red" />
  </div>

</template>

<script>
import LayoutHeader from "./layouts/Header";
import Square from "./elements/Square";
export default {
  name: 'HelloWorld',
  components:{LayoutHeader, Square},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      num1:1,
      cars:['Mercedes', 'BMW', 'Ferrari'],
      text:'Next',
      show:false,
      products: [
        {id:1, name:"Notebook", price:200000, quantity:4},
        {id:2, name:"Netbook", price:125000, quantity:3},
        {id:3, name:"Mouse", price:2500, quantity:20},
        {id:4, name:"PC", price:180000, quantity:6},
        {id:5, name:"Desktop", price:70000, quantity:2},
        {id:6, name:"Keyboard", price:4500, quantity:10},
        {id:7, name:"SSD", price:50000, quantity:2}
      ],
      fields:[
        {key:'id'},
        {key:'name'},
        {key:'quantity'},
        {key:'price'},
        {key:'actions'},
      ]
    }
  },
  mounted() {
   setInterval(this.printHello, 500);
  },
  methods: {
    printHello() {
      this.num1++;
    },
    sayHello() {
      this.text = 'Prev';
    },
    listItem(id) {
      alert(id);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
