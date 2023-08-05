import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { ReducerSet } from "./reducer";


export var StoreSet = createStore(ReducerSet, applyMiddleware(thunk))