import { configureStore } from '@reduxjs/toolkit';
import { persistedContactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// const BASE_URL = 'https://64a3ae84c3b509573b5666af.mockapi.io/contacts/';

// export const getContacts = async () => {
//   const response = await fetch(`${BASE_URL}`);
//   console.log(response.contacts);
//   if (!response.ok) {
//     throw new Error('Smth went catch');
//   }

//   return response.json();
// };

// getContacts();

// async function fetch() {
//   try {
//     const data = await getContacts();
//     console.log(data);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// console.log(fetch());
