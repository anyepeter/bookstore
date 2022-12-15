import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getBooks, removeBookItem, addBooksItem } from '../api/api';

const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/src/redux/books/GET_BOOK';

const items = [{
  id: 1,
  title: 'The Hunger Games',
  author: 'Suzanana Collins',
},
{
  id: 2,
  title: 'Dune',
  author: 'Will Smiths',
},
{
  id: 3,
  title: 'Capital in the Twenty-First Century',
  author: 'Chirs Jenner',
}];
const bookListReducer = (state = items, action = {}) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,
        action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export const addBook = createAsyncThunk(ADD_BOOK, 
  async (elem) => {
    await addBooksItem(elem);
    return elem;
  }, 
  );

export const removeBook = createAsyncThunk(REMOVE_BOOK, async (id) => {
  await removeBooksItem(id);
  return elem;
})

export default bookListReducer;
