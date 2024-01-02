import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // utilise localStorage pour le stockage par défaut
import loginReducer from './loginReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['login'] 
};

const persistedReducer = persistReducer(persistConfig, loginReducer);

export const store = configureStore({
  reducer: persistedReducer
});

export const persistor = persistStore(store);
