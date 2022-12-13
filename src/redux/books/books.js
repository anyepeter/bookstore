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
  bookList: [{
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanana Collins',
    chapter: 'Chapter 17',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Will Smiths',
    chapter: 'Chapter 3',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Chirs Jenner',
    chapter: 'Introduction',
  }],
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
