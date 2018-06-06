import React, { Component } from 'react'
import styles from './Topbar.scss'

export default class Topbar extends Component {
  state = {
    list: [
      {name: 'My Tasks'},
      {name: 'In Progress'},
      {name: 'Completed'}
    ]
  }
  render() {
    return (
      <div className={styles.root}>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (<li key={index}>{item.name}</li>)
            })
          }
        </ul>
      </div>
    )
  }
}