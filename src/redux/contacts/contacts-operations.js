import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const getContacts = createAsyncThunk('/contacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    toast.info("There is no such user's collection!");
  }
});

export const addContacts = createAsyncThunk(
  'contacts/add',
  async credentials => {
    try {
      const { data } = await axios.post('/contacts', credentials);
      return data;
    } catch (error) {
      toast.error('Contact creation error!');
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/delete',
  async credentials => {
    const contactId = credentials;
    try {
      await axios.delete(`/contacts/${contactId}`, credentials);
      return contactId;
    } catch (error) {
      toast.info("There is no such user's collection!");
    }
  }
);
