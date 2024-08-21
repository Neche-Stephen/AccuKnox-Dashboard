import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import widgetsReducer from './widgetsSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// persist configuration
const persistConfig = {
  key: 'root',
  storage, 
};

// persisted reducer
const persistedReducer = persistReducer(persistConfig, widgetsReducer);


export const store = configureStore({
  reducer: {
    widgets: persistedReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ 
    serializableCheck: {
      // Ignoring these action types because redux-persist dispatches non-serializable actions
      ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE']
    }
  }).concat(logger)
});

export const persistor = persistStore(store);
