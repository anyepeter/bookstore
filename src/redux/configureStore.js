import { configureStore } from '@reduxjs/toolkit';
import bookListReducer from './books/books';
import categoryReducer from './categories/categories';

const store = configureStore({
  reducer: {
    Books: bookListReducer,
    Category: categoryReducer,
  },
});

export default store;
