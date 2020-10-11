import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartlist from "./reducers/cart";

const reducers = combineReducers({
  cart: cartlist,
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined
);

export default stores;
