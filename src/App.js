import React, { Component } from 'react';
import Topbar from './components/Topbar/Topbar';
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.root}>
        <Topbar />
        <p className={styles.intro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
