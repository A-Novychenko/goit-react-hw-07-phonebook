import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6403b8063bdc59fa8f2bad68.mockapi.io';

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const resp = await axios.get('./contacts');
      return resp.data;
    } catch (err) {
      rejectWithValue(err.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, { rejectWithValue }) => {
    try {
      const resp = await axios.post('/contacts', { name, phone });
      return resp.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const resp = await axios.delete(`/contacts/${id}`);
      return resp.id;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
