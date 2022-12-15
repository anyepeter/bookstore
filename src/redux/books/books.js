import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks, removeBookItem, addBooksItem } from '../api/api';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/src/redux/books/GET_BOOK';

 const fetchBooks = createAsyncThunk(GET_BOOK, getBooks());

 export const addBook = createAsyncThunk(ADD_BOOK, addBooksItem);

export const removeBook = createAsyncThunk(REMOVE_BOOK, removeBookItem);

const initialState = {
  books: [],
  status: null,
}

const bookReducerSlice = createSlice({
name: 'books',
initialState,  
extraReducers: (builder) => {
  builder.addCase(fetchBooks.fulfilled, (state, action) => {
    const items = state;
    items.status = 'successful';
    items.books = action.payload;
  }),

  builder.addCase(removeBook.fulfilled, (state, action) => {
    const items = state;
    state.status = 'successful';
    items.books = state.filter((book) => book.id !== action.id);
  }),

  builder.addCase(addBook.fulfilled, (state, action) => {
    state.status = 'successful'
    state.books = [
      ...state.books,
      action.payload,
    ]
  })
}
})

export default bookReducerSlice.reducer;
