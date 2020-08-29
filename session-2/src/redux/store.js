import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import categorylist from "./reducers/category";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./reducers/user";

const reducers = combineReducers({
  category: categorylist,
  cart: categorylist,
  user: userReducer
});

const middlewares = applyMiddleware(thunk);

const stores = createStore(
  reducers,
  undefined,
  composeWithDevTools(middlewares)
);

export default stores;
