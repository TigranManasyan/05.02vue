<template>
  <div>
    <b-container class="mt-4">
      <b-form @submit="submitForm" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Password"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.password"
            type="password"
            placeholder="Enter Password"
            required
          ></b-form-input>
        </b-form-group>
        <b-button variant="primary" type="submit"> Send </b-button>
      </b-form>
    </b-container>
  </div>
</template>

<script>
export default {
  name:'Form',
  data() {
    return {
      form:{
        email:'',
        password:''
      },
      show:true,
      list:JSON.parse(localStorage.getItem('list')) || []
    }
  },
  methods:{
    submitForm() {
      this.list.push(this.form);
      localStorage.setItem("list", JSON.stringify(this.list));
    }
  }
}
</script>

<style scoped>

</style>
