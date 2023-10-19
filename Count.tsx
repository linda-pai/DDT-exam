import React from "react";
import ReactDOM from "react-dom";

interface ICountState {
  count: number;
}

 class Count extends React.Component<{}, ICountState> {
  constructor(props: {}) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }

  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
 
    // the problem is that the state is not updated immediately, but in batches (asynchronous), so the count will be 1, not 3
    // fix: use the prevState to get the previous state and update it (see below)
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // this.setState((prevState) => ({ count: prevState.count + 1 }));
    // or in one line: this.setState((prevState) => ({ count: prevState.count + 3 }));
  }


  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}

ReactDOM.render(<Count />, document.getElementById("root"));

export default Count;