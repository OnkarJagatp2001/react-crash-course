import { order_book } from "./BookConstants";

const initialState = {
  NumberofBooks: 20,
};

const BookReducer = (state = initialState, action) => {
  switch (action.type) {
    case order_book:
      return {
        ...state,
        NumberofBooks: state.NumberofBooks - 1,
      };
    default:
      return state;
  }
};

export default BookReducer;
