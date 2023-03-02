import { createStore } from "redux";
import todoReducer from "../reducers/TodoReducer";

const store = createStore(todoReducer);

export default store;
