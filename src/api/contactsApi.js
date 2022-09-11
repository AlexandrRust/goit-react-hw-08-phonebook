import axios from 'axios';

export const contactsGet = () => {
  return axios.get('/contacts');
};

export const contactsAdd = credentials => {
  return axios.post('/contacts', credentials);
};

export const contactsDelete = (contactId, credentials) => {
  return axios.delete(`/contacts/${contactId}`, credentials);
};
