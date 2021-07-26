import React from 'react'

import styles from './Controls.module.scss';

const Controls = ({ clickHandler }) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={() => clickHandler(4)}>Clear Board</button>
      <button className={styles.button} onClick={() => clickHandler(1)}>Insertion Sort</button>
      <button className={styles.button} onClick={() => clickHandler(2)}>Quick Sort</button>
    </div>
  )
}

export default Controls
