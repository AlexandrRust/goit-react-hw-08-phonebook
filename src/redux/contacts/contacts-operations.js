import { createAsyncThunk } from '@reduxjs/toolkit';
import { contactsAdd, contactsDelete, contactsGet } from 'api/contactsApi';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getContacts = createAsyncThunk('/contacts', async () => {
  try {
    const { data } = await contactsGet();
    return data;
  } catch (error) {
    if (error.response.status === 404) {
      toast.info("There is no such user's collection!");
    } else if (error.response.status === 500) {
      toast.error('Oops! Server error! Please try later!');
    } else {
      toast.error('Something went wrong! Please reload the page!');
    }
  }
});

export const addContacts = createAsyncThunk(
  'contacts/add',
  async credentials => {
    try {
      await contactsAdd(credentials);
      const { data } = await contactsGet();
      return data;
    } catch (error) {
      if (error.response.status === 400) {
        toast.error('Contact creation error!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async credentials => {
    const contactId = credentials;
    try {
      await contactsDelete(contactId, credentials);
      const { data } = await contactsGet();
      return data;
    } catch (error) {
      if (error.response.status === 404) {
        toast.info("There is no such user's collection!");
        const { data } = await axios.get('/contacts');
        return data;
      } else if (error.response.status === 500) {
        toast.error('Oops! Server error! Please try later!');
      } else {
        toast.error('Something went wrong! Please reload the page!');
      }
    }
  }
);
