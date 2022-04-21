import * as actions from "./action";
const COUNTERS = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];
const reducer = (state = COUNTERS, action) => {
  if (action.type === actions.DELETED)
    return [...state].filter((counter) => action.id !== counter.id);
  if (action.type === actions.DECREMENT) {
    const counters = state;
    counters.forEach((counter) => {
      if (counter.id === action.id) {
        counter.value--;
      }
    });
    return counters;
  }
  if (action.type === actions.INCREMENT) {
    const counters = state;
    counters.forEach((counter) => {
      if (counter.id === action.id) {
        counter.value++;
      }
    });
    return counters;
  }
  if (action.type === actions.RESET) {
    const counters = state;
    counters.forEach((counter) => (counter.value = 0));
    return counters;
  }
  return state;
};
export default reducer;
