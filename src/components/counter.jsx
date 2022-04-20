const Counter = ({ counter, onIncrement, onDelete, onDecrement }) => (
  <div className="g-col-2">
    <span className="m-2 px-3 mw-100">
      {counter.value < 1 ? (
        <span className="badge bg-warning">Zero</span>
      ) : (
        counter.value
      )}
    </span>

    <button
      className=" col btn btn-secondary btn-sm m-2 px-3"
      onClick={() => onIncrement(counter.id)}
      disabled={!(counter.value >= 0) && true}
    >
      +
    </button>

    <button
      className="btn col btn-secondary btn-sm m-2 px-3"
      onClick={() => onDecrement(counter.id)}
      disabled={counter.value === 0 && true}
    >
      -
    </button>
    <button
      className="btn btn-danger btn-sm m-2"
      onClick={() => onDelete(counter.id)}
    >
      Delete
    </button>
  </div>
);

export default Counter;
