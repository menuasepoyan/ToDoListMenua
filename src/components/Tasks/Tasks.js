import React from "react";
import SingleTask from "../SingleTask";
import styles from "./Tasks.module.css";
import Header from './../ui/Header'

class Tasks extends React.Component {
  tasks = [
    { taskId: 1, taskName: "My First Task" },
    { taskId: 2, taskName: "My Second Task" },
    { taskId: 3, taskName: "My Third Task" },
  ];

  render() {
    return (
      <div className={styles.container}>
        <Header title="Tasks" type="h2" />
        <div className={styles.tasksWrapper}>
          {this.tasks.map((el) => (
            <SingleTask key={el.taskId} task={el.taskName} />
          ))}
        </div>
      </div>
    );
  }
}

export default Tasks;
