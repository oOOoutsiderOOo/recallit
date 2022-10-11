import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReducer, cartReducer, tripsReducer } from "./reducers";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    trips: tripsReducer,
    cart: cartReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
