import React from "react";
import Button from "../ui/Button";
import Header from "../ui/Header";
import styles from "./AddTasks.module.css";

class AddTasks extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title="My Tasks" type="h1" />
        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Add Task" />
          <Button name='ADD TASK'/>
        </div>
      </div>
    );
  }
}

export default AddTasks;
