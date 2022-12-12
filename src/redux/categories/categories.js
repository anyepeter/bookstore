const CHECKSTATUS = 'CHECKSTATUS';

export const checkStatus = (id) =>{
  return {
    type: CHECKSTATUS,
    id
  }
}

const initialState = {
  bookList: []
}

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under construction'
      default:
        return state
  }
}