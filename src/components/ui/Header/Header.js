import React, { createElement } from "react";
import styles from "./Header.module.css";

class Header extends React.Component {
  render() {
    const { title,type } = this.props
    return (
      <div className={styles.title}>
        {createElement(type,{},title)}
        <div className={styles.gradient}></div>
      </div>
    );
  }
}

export default Header;
