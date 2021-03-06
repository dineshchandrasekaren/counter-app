import Counter from "./counter";
const Counters = ({ counters, onIncrement, onDecrement, onDelete }) => (
  <div class="row">
    {counters.map((counter) => (
      <Counter
        key={counter.id}
        onDelete={onDelete}
        onDecrement={onDecrement}
        onIncrement={onIncrement}
        counter={counter}
      />
    ))}
  </div>
);

export default Counters;
