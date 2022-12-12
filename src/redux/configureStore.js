import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './books/books';
import categoryReducer from './categories/categories';

const rootReducer = combineReducers({
  Books: bookListReducer,
  Category: categoryReducer,
});

const store = configureStore(rootReducer);

export default store;
