import React from "react";
import Header from "../ui/Header";
import Button from "../ui/Button";
import styles from "./SearchTasks.module.css";

class SearchTasks extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Header title='Search' type='h2' />

        <div className={styles.inputWrapper}>
          <input className={styles.input} placeholder="Search Task" />
          <Button name="All" />
          <Button name="Important" />
          <Button name="Done" />
        </div>
      </div>
    );
  }
}

export default SearchTasks;
