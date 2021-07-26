<template>
  <div>
    <b-container class="mt-5">
        <h1>All products</h1>
        <router-link :to="{name:'Product', params:{id:2}}">
          Product
        </router-link>

        <b-table :items="products" :fields="fields">
          <template v-slot:cell(actions)="data">
            <b-button variant="primary">
              <router-link style="color:white;text-decoration:none" :to="{name:'Product', params:{id:data.item.id, prod_name:data.item.name}}">
                More
              </router-link>
            </b-button>
          </template>
        </b-table>
    </b-container>

  </div>
</template>

<script>
export default {
  name:'AllProducts',
  data() {
    return {
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
  }
}
</script>

<style scoped>

</style>
