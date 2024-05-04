import { legacy_createStore as createStore } from "redux"
import { basketReducer } from "./reducer/basketReducer"


export const store=createStore(basketReducer)