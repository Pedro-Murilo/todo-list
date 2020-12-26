import React, { Component } from 'react';

// Form
import { FaPlus, FaEdit, FaWindowClose } from 'react-icons/fa';

// Tarefas

import './Main.css';

export default class Main extends Component {
  state = {
    newTodo: '',
    tarefas: [],
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas } = this.state;
    let { newTodo } = this.state;
    newTodo = newTodo.trim();

    if (tarefas.indexOf(newTodo) !== -1) return;

    const novasTarefas = [...tarefas];
    this.setState({
      tarefas: [...novasTarefas, newTodo],
    });
  }

  handleChange = (e) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  render() {
    const { newTodo, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Todo List</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTodo}
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>

        <ul className="tarefas">
          {tarefas.map((tarefa) => (
            <li key={tarefa}>
              {tarefa}
              <span className="">
                <FaEdit className="edit" />
                <FaWindowClose className="delete" />
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
