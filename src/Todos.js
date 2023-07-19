import React, { Component } from 'react';

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // store an array of todo objects
      todos: [
        { task: 'do the dishes', done: false, id: 1 },
        { task: 'vacuum the floor', done: true, id: 2 }
      ]
    };
  }

  // Don't use this practice
  // completeTodo(id) {
  //   const todo = this.state.todos.find(t => t.id === id);
  //   todo.done = true;  // bad practice
  //   this.setState({todos: this.state.todos});   // bad practice
  // }

  completeTodo(id) {
    // Array.prototype.map returns new array
    const newTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        // make a copy of the todo object with done -> true
        return { ...todo, done: true };
      }
      return todo; // old todos can pass through
    });
    this.setState({ todos: newTodos }); // setState to the new Array
  }

  render() {
    return (
      <div>
        <h1>Modifying state for Data structures(arrays, objects etc)</h1>
        {this.state.todos.map((t) => (
          <div key={t.id}>
            {t.id} - {t.task} - {t.done ? 'True' : 'False'}
          </div>
        ))}
        <button onClick={() => this.completeTodo(1)}>Complete todo 1</button>
      </div>
    );
  }
}

export default Todos;
