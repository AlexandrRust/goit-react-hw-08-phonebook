import { createSlice } from '@reduxjs/toolkit';
import { contactsOperations } from './index';

const initialState = {
  items: [],
  filter: '',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [contactsOperations.getContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.addContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
    [contactsOperations.deleteContacts.fulfilled](state, action) {
      state.items = action.payload;
    },
  },
  reducers: {
    addFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});
export const { addFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
