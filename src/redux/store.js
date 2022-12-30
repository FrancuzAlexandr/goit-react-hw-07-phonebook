import { configureStore } from '@reduxjs/toolkit';
import { phoneBookSliceReducer } from './phoneBookSliceReducer';
import { filterContactsReducer } from './filterContactsReducer';

export const store = configureStore({
  reducer: {
    contacts: phoneBookSliceReducer.reducer,
    filter: filterContactsReducer.reducer,
  },
});
