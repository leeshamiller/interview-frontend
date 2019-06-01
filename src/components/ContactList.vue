<template>
  <div class="contact-list">
    <ul class="contact-ul">
      <li v-on:click="showDetails(contact.id)" v-bind:class='{favorite: contact.is_favorite}' v-for="contact in contacts" :key="contact.id" :ref="contact.id" class="item">{{ contact.name }}
              <ul :id="contact.id" class="additional-info">
        <li class="additional-item">{{ contact.email }}</li>
        <li class="additional-item">{{ contact.phone }}</li>
      </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import ContactService from '@/services/ContactService'

export default {
  name: 'ContactList',
  data () {
    return {
      contacts: []
    }
  },
  beforeMount () {
    this.getContacts()
  },
  methods: {
    async getContacts () {
      const { data } = await ContactService.getContacts()
      // console.log(data)
      this.contacts = data.contacts
    }, 
    showDetails(contactId) {
    var thisInfo = document.getElementById(contactId)
    if(thisInfo.style.display === "none") {
      thisInfo.style.display = "block"
    } else {
      thisInfo.style.display = "none"
    }
    }
  }
}
</script>

<style scoped lang="sass">
.item 
  list-style-type: none;
  padding: 10px 0;

.item:hover
  text-decoration: underline;
  cursor: pointer;

.item:nth-child(odd)
  background-color: #eaf1f8;

.contact-ul
    border: 1px solid black;
    width: 50%;
    padding: 0;

.contact-list
    display: flex;
    justify-content: center;

.favorite
  font-weight: bold;
.additional-info
  display: none;
  list-style-type: none;
  padding: 0;
.additional-info:hover
  text-decoration: none;
  cursor: default;
</style>
