import React from "react";
import styles from "./App.module.css";
import AddTasks from "../AddTasks";
import SearchTasks from "../SearchTasks";
import Tasks from "../Tasks";

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <AddTasks />
        <SearchTasks />
        <Tasks />
      </div>
    );
  }
}

export default App;
