import React, { Component } from 'react';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    });
  }

  render() {
    const { newTask } = this.state;

    return (
      <div className="main">
        <h1>Task List</h1>
        <p>{newTask}</p>

        <form action="#">
          <input onChange={this.handleChange} type="text" />
          <button type="submit">Send</button>
        </form>
      </div>
    );
  }
}
