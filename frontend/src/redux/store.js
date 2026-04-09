// import { configureStore } from "@reduxjs/toolkit"
// import userSlice from "./userSlice.js"

// const store = configureStore({
//     reducer:{
//         user:userSlice

//     }
// })

// export default store;


import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import userSlice from "./userSlice.js"

const persistConfig = {
  key: 'Dora',
  storage,
  // whitelist: ['user'], // optional: only persist specific reducers
  // blacklist: ['other'], // optional: exclude specific reducers
};

const rootReducer = combineReducers({
  user:userSlice,
});

// Configure persistance


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore Redux Persist actions to avoid serialization errors in the console
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
