import { createStore, combineReducers } from "redux";
import beerModal from "./reducers";

export default createStore(
  combineReducers({
    beerModal,
  })
);
