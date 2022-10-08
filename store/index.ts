import { createStore, combineReducers } from "redux";
import { cartReducer, testReducer, tripsReducer } from "./reducers";

const rootReducer = combineReducers({
    trips: tripsReducer,
    test: testReducer,
    cart: cartReducer,
});

export default createStore(rootReducer);
