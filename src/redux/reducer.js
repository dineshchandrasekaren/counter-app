import * as event from "./action";
const COUNTERS = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
  { id: 3, value: 0 },
  { id: 4, value: 0 },
];
const reducer = (state = COUNTERS, action) => {
  if (action.type === event.DELETED)
    return [...state].filter((counter) => action.id !== counter.id);
  if (action.type === event.DECREMENT) {
    const counters = state;
    counters.forEach((counter) => {
      if (counter.id === action.id) {
        counter.value--;
      }
    });
    return counters;
  }
  if (action.type === event.ADD) {
    const counters = state;
    counters.push({ id: Date.now(), value: 0 });
    return counters;
  }
  if (action.type === event.INCREMENT) {
    const counters = state;
    counters.forEach((counter) => {
      if (counter.id === action.id) {
        counter.value++;
      }
    });
    return counters;
  }
  if (action.type === event.RESET) {
    const counters = state;
    counters.forEach((counter) => (counter.value = 0));
    return counters;
  }
  return state;
};
export default reducer;
