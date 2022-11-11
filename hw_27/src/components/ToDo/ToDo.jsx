import React, { Component } from "react";
import List from "../List/List";

export default class Lists extends Component {
  state = {
    firstList: this.props.list,
    secondList: [],
    thirdList: [],
  };

  transferToSecond() {
    this.setState({
      secondList: [this.state.firstList.shift(), ...this.state.secondList],
    });
  }

  transferToFirst() {
    this.setState({
      firstList: [this.state.secondList.shift(), ...this.state.firstList],
    });
  }

  transferToThird() {
    this.setState({
      thirdList: [this.state.secondList.shift(), ...this.state.thirdList],
    });
  }

  RemoveLastItem() {
    this.setState({
      thirdList: this.state.thirdList.slice(0, -1),
    });
  }

  render() {
    return (
      <div className="to-do_container">
        <List
          list={this.state.firstList}
          action={[
            {
              text: "Transfer first to right",
              actions: this.transferToSecond.bind(this),
            },
          ]}
        />
        <List
          list={this.state.secondList}
          action={[
            {
              text: "Transfer first to left",
              actions: this.transferToFirst.bind(this),
            },
            {
              text: "Transfer first to right",
              actions: this.transferToThird.bind(this),
            },
          ]}
        />
        <List
          list={this.state.thirdList}
          action={[
            {
              text: "Remove last item",
              actions: this.RemoveLastItem.bind(this),
            },
          ]}
        />
      </div>
    );
  }
}
