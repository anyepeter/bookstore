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
      return [
        ...state.slice(0, action.payload),
        ...state.slice(action.payload + 1, state.length),
      ];
    default:
      return state;
  }
};

export default bookListReducer;
