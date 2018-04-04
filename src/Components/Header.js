import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Todolist</h1>
            <h2 className="subtitle">by Valtteri</h2>
          </div>
        </div>
      </section>
    );
  }
}
