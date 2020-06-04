import React from "react";

class Cursor extends React.Component {
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleShow(e) {
    console.log("clicked show: ", e);
  }

  handleHide(e) {
    console.log("clicked hide: ", e);
  }

  handleNext(e) {
    console.log("clicked next: ", e);
  }

  handleReset(e) {
    console.log("clicked reset: ", e);
  }

  render() {
    return (
      <div className="cursor-container">
        <h3>Cursor</h3>
        <button onClick={this.handleShow}>Show</button>
        <button onClick={this.handleHide}>Hide</button>
        <button onClick={this.handleNext}>Next</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

export default Cursor;
