import React from 'react'

import styles from './Controls.module.scss';

const Controls = ({ clickHandler }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => clickHandler(1)}>Select Source</button>
      <button className={styles.button} onClick={() => clickHandler(2)}>Select Destination</button>
      <button className={styles.button} onClick={() => clickHandler(3)}>Select Wall</button>
      <button className={styles.button} onClick={() => clickHandler(4)}>Clear Board</button>
      <button className={styles.button} onClick={() => clickHandler(5)}>Clear Path</button>
      <button className={styles.button} onClick={() => clickHandler(6)}>Perfom</button>
    </div>
  )
}

export default Controls
