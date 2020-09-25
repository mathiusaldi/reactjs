import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import cartlist from "./reducers/cart";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  cart: cartlist,
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined,
  composeWithDevTools(middlewares)
);

export default stores;
