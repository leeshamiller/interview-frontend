<template>
  <div id="home">
    <router-link to="/addContact">Add Contact</router-link>
    <h1>MarketDial Address Book</h1>
    <ContactList/>
  </div>
</template>

<script>
// @ is an alias to /src
import ContactList from "@/components/ContactList";
import ContactForm from "@/components/ContactForm";


export default {
  name: "home",
  components: {
    ContactList
  }
};
</script>
