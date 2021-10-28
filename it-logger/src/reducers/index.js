import { combineReducers } from "redux";
import logReducer from "./logReducer";
import techReducer from './techReducer'

export default combineReducers({
    log: logReducer,
    tech: techReducer
});

// this file is handled as the root reducer