import React from "react";
import Button from "../ui/Button";
import styles from "./SingleTask.module.css";

class SingleTask extends React.Component {
  state = {
    important: false,
    edit: true,
    done: false,
  };
  handleImportant = () => {
    this.setState({ important: !this.state.important });
  };
  handleEdit = () => {
    this.setState({ edit: !this.state.edit });
    this.refFocus.focus();
  };
  handleDone = () => {
    this.setState({ done: !this.state.done });
  };

  render() {
    const { task } = this.props;

    return (
      <div className={styles.singleTask}>
        <input
          ref={(input) => {
            this.refFocus = input;
          }}
          defaultValue={task}
          readOnly={this.state.edit}
          type="text"
          className={
            this.state.important
              ? styles.important
              : this.state.done
              ? styles.done
              : ""
          }
        />

        <Button
          onClick={this.handleEdit}
          name={this.state.edit ? "Edit" : "Save"}
        />
        <Button onClick={this.handleImportant} name="Important" />
        <Button onClick={this.handleDone} name="Done" />
        <Button name="Delete" />
      </div>
    );
  }
}

export default SingleTask;
