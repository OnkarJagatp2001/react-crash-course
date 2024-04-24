// The index.js file represents the root reducer, which combines all the individual reducers in the application
import taskReducer from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  task: taskReducer,
});

export default rootReducer;
