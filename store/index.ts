import { createStore, combineReducers, applyMiddleware } from "redux";
import { cartReducer, tripsReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    trips: tripsReducer,
    cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
