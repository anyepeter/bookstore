const ADDBOOK = 'ADDBOOK';
const REMOVEBOOK = 'REMOVEBOOK';

export const addBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVEBOOK,
  payload: id,
});

const initialState = {
  bookList: [],
};

const bookListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookListReducer;
