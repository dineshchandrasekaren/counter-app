import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";
import {
  decrement,
  deleted,
  getAllData,
  increment,
  reset,
} from "./redux/actionCalls";

class App extends Component {
  state = {
    counters: getAllData(),
  };

  //! delete
  handleDelete = (counterId) => {
    this.setState({ counters: deleted(counterId) });
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
        <main class="container">
          <button onClick={this.handleReset} className="btn btn-primary">
            Reset
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
