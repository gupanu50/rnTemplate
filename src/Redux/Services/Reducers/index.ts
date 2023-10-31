import { combineReducers, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { apiData, RegisterState } from 'types';

// initial state for register's screen
const registerState: RegisterState = {
    value: {}
}

//initial states for custom api's call
const apiState: apiData = {
    data: null,
    isLoading: false,
    error: null,
}

// for register's screen data 
const registerSlice = createSlice({
    name: 'register',
    initialState: registerState,
    reducers: {
        addData: (state, action: PayloadAction<RegisterState>) => {
            state.value = action.payload;
        }
    }
});

// for api call data 
const callApi = createSlice({
    name: 'api',
    initialState: apiState,
    reducers: {
        getDataStart: (state) => {
            state.isLoading = true;
        },
        getDataSuccess: (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        getDataFailure: (state, action) => {
            state.error = action.payload;
            state.isLoading = false;
        }
    }
})

const languageSlice = createSlice({
    name: 'language',
    initialState: 'en',
    reducers: {
      setLanguage: (state, action) => {
        return action.payload;
      },
    },
  });

// merge multiple reducers in a single reducers
const rootReducer = combineReducers({
    register: registerSlice.reducer,
    api: callApi.reducer,
    language:languageSlice.reducer
});

export default rootReducer
export const { addData } = registerSlice.actions;
export const { getDataFailure, getDataSuccess, getDataStart } = callApi.actions;
// export const selectLanguage = (state:any) => state.language;
export const {setLanguage} = languageSlice.actions