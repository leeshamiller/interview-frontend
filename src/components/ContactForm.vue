
<template>
  <div class="contact_form">
    <router-link to="/">Home</router-link>

    <div>
      <label>Name</label>
      <input v-model="form.name" type="text" placeholder="Required">
    </div>
    <div>
      <label>Email</label>
      <input v-model="form.email" type="text">
    </div>
    <div>
      <label>Phone Number</label>
      <input v-model="form.phone" type="text">
    </div>
    <!-- The value will default to false unless favorite checkbox has been selected -->
    <div>
      <label>Favorite?</label>
      <label>
        <input v-model="form.is_favorite" type="checkbox">
      </label>
    </div>
    <button v-on:click="addContact">Add Contact</button>

  </div>
</template>

<script>
import ContactService from "@/services/ContactService";
// import Vue from 'vue'

export default {
  name: "contactForm",
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        is_favorite: false
      }
    };
  },
  methods: {
    async addContact() {
      if (this.form.name) {
        await ContactService.addContact(JSON.stringify(this.form)).then(
          response => {
            this.$router.replace({ name: "home" });
          }
        );
      } else {
        alert("Name is required");
      }
    }
  }
};
</script>

<style lang="sass" scoped></style>