import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const hendlePending = state => {
  state.isLoading = true;
};
const hendleRejected = (state, { payload }) => {
  state.isLoading = false;
  console.log('payload', payload);
  state.error = payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: hendlePending,
    [addContact.pending]: hendlePending,
    [deleteContact.pending]: hendlePending,

    [fetchContacts.rejected]: hendleRejected,
    [addContact.rejected]: hendleRejected,
    [deleteContact.rejected]: hendleRejected,

    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items = payload;
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(payload);
    },

    [deleteContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.items.splice(
        state.items.findIndex(contact => contact.id === payload.id),
        1
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
