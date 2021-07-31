import { combineReducers } from "@ngrx/store";
import { taskReducer } from "./tasks.reducer";

const reducers = combineReducers(taskReducer);

export default reducers;
