import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE } from "redux-persist";
import storage from "redux-persist/lib/storage";
import headerSlice from "./headerSlice";
import userSlice from "./userSlice";
import cartSlice from "./cartSlice";
import wishlistSlice from "./wishlistSlice";
import { api } from "./api/api";

const rootReducer = combineReducers({
  header: headerSlice,
  user: userSlice,
  cart:cartSlice,
  wishlist:wishlistSlice,
  [api.reducerPath]: api.reducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: [api.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, 'persist/PERSIST', 'persist/REGISTER'],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;