

import React, { Component } from "react";
// import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import AddRMForm from "./AddRMForm";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
};

class Addrmreservations extends Component {
  state = {
    open: false,
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };
  render() {
    const { open } = this.state;
    return (
      <div style={styles}>
        <button
          onClick={this.onOpenModal}
          className=" shadow-md bg-blue-300 hover:bg-blue-400 p-2 rounded-lg text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={3}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <Modal open={open} onClose={this.onCloseModal}>
          <h2>Add</h2>
          <AddRMForm />
        </Modal>
      </div>
    );
  }
}

export default Addrmreservations;
