import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux'
import { pagesReducer } from "./pagesReducer";
import { photosReducer } from "./photosReducer";

const reducer = combineReducers({
  currentPage: pagesReducer,
  myPhotos: photosReducer
})

const store = configureStore({reducer})

export default store;

