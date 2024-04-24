// the taskReducer.js file is one of the individual reducers that will be combined in the root reducer.

const initialState = {
  tasks: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "DELETE-TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id != action.payload),
      };
    default:
      return state;
  }
};

export default taskReducer;