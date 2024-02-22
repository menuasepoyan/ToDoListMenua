import React from "react";
import styles from "./Button.module.css";

class Button extends React.Component {
  render() {
    const { name,onClick } = this.props;
    return <button onClick={onClick} className={styles.btn}>{name}</button>;
  }
}

export default Button;
