import { createStore } from "redux";
import { reducer } from "./reducer";

const initState = { count: 0 };
export const store = createStore(reducer, initState);
