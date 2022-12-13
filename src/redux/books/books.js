const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const initialState = {
  bookList: [],
};

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookListReducer;
