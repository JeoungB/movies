import { combineReducers, configureStore, createSlice, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import localStorage from "redux-persist/es/storage";

let movie = createSlice({
    name : 'movie',
    initialState : [],
    reducers : {
        clickMovie(state, action) {
            state = action.payload;
            return state;
        }
    }
});

export let { clickMovie } = movie.actions;

const reducers = combineReducers({
    movie : movie.reducer
})

const persistConfig = {
    key : "movie",
    storage : localStorage,
    whitelist : ['movie']
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer : persistedReducer,
    middleware : (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck : false
    })
});

export default store;


