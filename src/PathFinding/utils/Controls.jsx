import React from 'react'

import styles from './Controls.module.scss';

const Controls = ({ clickHandler, disabled }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(1)}>Select Source</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(2)}>Select Destination</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(3)}>Toggle Wall</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(9)}>Generate Wall</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(4)}>Clear Board</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(5)}>Clear Path</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(6)}>Perform BFS</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(7)}>Perform DFS</button>
      <button className={styles.button} disabled={disabled} onClick={() => clickHandler(8)}>Perform Dijkstras</button>
    </div>
  )
}

export default Controls
