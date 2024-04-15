import React from "react";
import { Provider } from "react-redux";
import store from "./Store";
import BookHome from "./BookHome";
function App() {
  return (
    <Provider store={store}>
      <BookHome />
    </Provider>
  );
}

export default App;
