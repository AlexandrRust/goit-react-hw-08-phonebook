import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { serializableCheck } from 'constants/constants';
// import contactsSlice from './contactsSlice';
import authSlice from './auth/auth-slice';
import contactsSlice from './contacts/contacts-slice';

const authPersistConfig = {
  key: 'auth',
  storage,
  blacklist: ['user', 'isLoggedIn', 'isRefreshingUser'],
};

export const persistAuth = persistReducer(authPersistConfig, authSlice);

export const store = configureStore({
  reducer: {
    auth: persistAuth,
    contacts: contactsSlice,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck,
      devTools: process.env.NODE_ENV === 'development',
    });
  },
});

export const persistor = persistStore(store);
