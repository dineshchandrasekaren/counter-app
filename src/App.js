import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/NavBar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters });
  };
  handleIncrement = (counterId) => {
    const counters = this.state.counters;
    counters.forEach((counter) => {
      if (counter.id === counterId) {
        counter.value++;
      }
    });
    this.setState({ counters });
  };
  handleDecrement = (counterId) => {
    const counters = this.state.counters;
    counters.forEach((counter) => {
      if (counter.id === counterId) {
        counter.value--;
      }
    });
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters;
    counters.forEach((counter) => (counter.value = 0));
    this.setState({ counters });
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
            {" "}
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
