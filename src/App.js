import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";
import {
  decrement,
  deleteCounter,
  getAllData,
  increment,
  reset,
  addCounter,
} from "./redux/actionCalls";

class App extends Component {
  state = {
    counters: getAllData(),
  };

  //!Add
  handleAdd = () => {
    this.setState({ counters: addCounter() });
  };
  //! delete
  handleDelete = (counterId) => {
    this.setState({ counters: deleteCounter(counterId) });
  };
  //!Increment
  handleIncrement = (counterId) => {
    this.setState({ counters: increment(counterId) });
  };

  //!Decrement
  handleDecrement = (counterId) => {
    this.setState({ counters: decrement(counterId) });
  };
  handleReset = () => {
    this.setState({ counters: reset() });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          counterLength={
            this.state.counters.filter((c) => c.value !== 0).length
          }
        />
        <main className="container">
          <button onClick={this.handleReset} className="btn m-2 btn-primary">
            Reset
          </button>
          <button onClick={this.handleAdd} className="btn  m-2  btn-primary">
            Add
          </button>
          <Counters
            onDelete={this.handleDelete}
            onDecrement={this.handleDecrement}
            onIncrement={this.handleIncrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
