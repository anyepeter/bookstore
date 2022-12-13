const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = (id) => ({
  type: CHECK_STATUS,
  id,
});

const initialState = {
  bookList: [],
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
    default:
      return state;
  }
};

export default categoryReducer;
