import { combineReducers, configureStore } from '@reduxjs/toolkit'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
    persistReducer,
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { apiSlice } from '@/Redux/Api/Post';
import rootReducer from '@/Redux/Services/Reducers';

const reducers = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    reducer: rootReducer
})

// to save state in persistent storage 
const persistConfig = {
    key: 'root',
    // we can use any type of persistent store
    storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, reducers)

// apply middleware to resolve error of non-serializable data and use actions as function
const middleware =
    (getDefaultMiddleware: any) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(apiSlice.middleware)

const store = configureStore({
    reducer: persistedReducer,
    middleware: middleware
})

const persistor = persistStore(store)

export { store, persistor }
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
