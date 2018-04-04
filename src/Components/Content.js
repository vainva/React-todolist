import React, { Component } from "react";

export default class Content extends Component {
  constructor() {
    super();
    this.state = { date: "", description: "", todos: [] };
  }

  inputChanged = event => {
    this.setState({
      description: event.target.value
    });
  };
  dateChanged = event => {
    this.setState({
      date: event.target.value
    });
  };
  addTodo = event => {
    event.preventDefault();
    const { date, description } = this.state;
    const items = {
      date,
      description
    };

    this.setState({
      todos: [...this.state.todos, items],
      date: "",
      description: ""
    });
  };

  deleteTodo = key => {
    const todos = this.state.todos.filter((todo, i) => i !== key);
    this.setState({
      todos
    });
  };

  clickDelete(key) {
    this.deleteTodo(key);
  }

  render() {
    return (
      <div>
        <div className="box">
          <h1 className="is-centered title is-2 ">Todolist</h1>
          <h2 className="text">Add todos</h2>

          <form onSubmit={this.addTodo}>
            <div>
              <tr>
                <th className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    onChange={this.dateChanged}
                    value={this.state.date}
                    placeholder="Add date"
                  />
                </th>
                <th className="control">
                  <input
                    type="text"
                    className="input is-medium"
                    onChange={this.inputChanged}
                    value={this.state.description}
                    placeholder="Add description"
                  />
                </th>
              </tr>
              <br />
              <input className="button is-primary" type="submit" value="Add" />
            </div>
          </form>
        </div>

        <table className="table is-hoverable is-centered">
          <thead>
            <tr>
              <th>Date </th>

              <th>Description </th>
            </tr>
          </thead>
          {this.state.todos.map((item, key) => (
            <tbody>
              <tr key={key}>
                <td>{item.date}</td>

                <td>{item.description}</td>
                <button
                  className="button delete is-danger is-large"
                  onClick={() => this.clickDelete(key)}
                />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}
