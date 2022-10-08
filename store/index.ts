import { createStore, combineReducers } from "redux";
import { testReducer, tripsReducer } from "./reducers";

const rootReducer = combineReducers({
    trips: tripsReducer,
    test: testReducer,
});

export default createStore(rootReducer);
