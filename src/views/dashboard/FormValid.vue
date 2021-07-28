<template>
  <div>
    <validation-observer ref="observer">
    <b-container class="'m-4">
      <b-form @submit="formSubmit" v-if="show">
        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
          description="We'll never share your email with anyone else."
        >
          <validation-provider rules="email" v-slot="{ errors }">
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="text"
              name="email"
              placeholder="Enter email"
              required
            ></b-form-input>
            <span style="color:red;font-style: italic"> {{ errors[0] }}</span>
          </validation-provider>


        </b-form-group>
        <b-button type="submit" variant="primary">Send</b-button>
      </b-form>

    </b-container>
    </validation-observer>
  </div>
</template>

<script>
export default {
  name:"FormV",
  data() {
    return {
      form:{
        email:''
      },
      show:true
    }
  },
  methods:{
    formSubmit() {
      this.$refs.observer.validate().then( valid => {
        if(!valid) return;
        alert(this.form.email)
      })
    }
  }
}
</script>
<style scoped>
</style>
