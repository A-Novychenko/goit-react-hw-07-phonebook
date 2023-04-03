import { createSlice } from '@reduxjs/toolkit';
import { getContacts, addContact, removeContact } from './operations';

const hendlePending = () => {};
const hendleRejected = () => {};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [getContacts.pending]: hendlePending,
    [addContact.pending]: hendlePending,
    [removeContact.pending]: hendlePending,

    [getContacts.rejected]: hendleRejected,
    [addContact.rejected]: hendleRejected,
    [removeContact.rejected]: hendleRejected,

    [getContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
    },

    [addContact.fulfilled]: (state, { payload }) => {
      state.items.push(payload);
    },

    [removeContact.fulfilled]: (state, { payload }) => {
      state.items.splice(
        state.items.findIndex(contact => contact.id === payload.id),
        1
      );
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
