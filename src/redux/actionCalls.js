import { store } from "./store";
import * as event from "./action";

export const getAllData = () => store.getState();

export const deleteCounter = (id) => {
  store.dispatch({ type: event.DELETED, id });
  return getAllData();
};

export const increment = (id) => {
  store.dispatch({ type: event.INCREMENT, id });
  return getAllData();
};
export const addCounter = (id) => {
  store.dispatch({ type: event.ADD });
  return getAllData();
};
export const decrement = (id) => {
  store.dispatch({ type: event.DECREMENT, id });
  return getAllData();
};
export const reset = () => {
  store.dispatch({ type: event.RESET });
  return getAllData();
};
