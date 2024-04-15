import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { order_book } from "./BookConstants";
import orderBook from "./BookAction";

function BookHome() {
  const numberOfBooks = useSelector((state) => state.NumberofBooks);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of books: {numberOfBooks}</h2>
      <button onClick={() => dispatch(orderBook())}>Order Book</button>
    </div>
  );
}

export default BookHome;
