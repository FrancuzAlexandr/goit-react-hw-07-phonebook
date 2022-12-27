import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export const phoneBookSlice = createSlice({
  name: 'contacts',
  initialState: { contacts: [] },
  reducers: {
    addContact(state, action) {
      state.contacts.push({ ...action.payload, id: new Date().toISOString() });
    },
    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

export const { addContact, deleteContact } = phoneBookSlice.actions;

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
};

export const persistedPhoneBookReducer = persistReducer(
  persistConfig,
  phoneBookSlice.reducer
);
