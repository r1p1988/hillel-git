import React, { Component } from "react";

export default class List extends Component {
  render() {
    let { list, action } = this.props;
    return Array.isArray(list) && list.length ? (
      <div className="list-block">
        <ul>
          {list.map((item) => (
            <li key={item.id}>{item.title}</li>
          ))}
        </ul>
        <div>
          {action.map((item) => (
            <button onClick={item.actions}>{item.text}</button>
          ))}
        </div>
      </div>
    ) : (
      <div className="list-block-before"></div>
    );
  }
}
