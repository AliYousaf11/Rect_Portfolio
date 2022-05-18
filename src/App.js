import React, { Component } from "react";

export default class Counter extends Component {

  // handlerIncrement = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

  render() {
    return (
      <div> 
        {this.props.children}
        <span style={{marginRight:0}}>{this.funCode()}</span>
        
        <button onClick={() => this.props.onIncrement(this.props.value)}>Increment</button>
        <button onClick={() => this.props.onDelete(this.props.id)}>Delete</button>
      </div>
    );
  }

  funCode = () => {
    // Destructing of object(state)
    const { count } = this.props.Counter;
    return count === 0 ? 0 : count;
  };
}
