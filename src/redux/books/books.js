const ADD_BOOK = 'bookstore/src/redux/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/src/redux/books/REMOVE_BOOK';

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

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

export default bookListReducer;
