import api from '@/api'

export default {
  getContacts: () => api().get(`/contacts`),
  addContact: (post) => api().post(`/contact`, post)
}

