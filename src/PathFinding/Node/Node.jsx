import React from 'react';

import styles from './Node.module.scss';

export default function Node(props) {
  const {
    row,
    col,
    isStart,
    isFinish,
    isWall,
    isVisited,
    isShortest,
    onNodeClick,
  } = props;
  let classes;
  classes = styles.node;
  classes += isWall ? ` ${styles.wall}` : '';
  classes += isStart ? ` ${styles.source}` : '';
  classes += isFinish ? ` ${styles.destination}` : '';
  classes += isVisited ? ` ${styles.visited}` : '';
  classes += isShortest ? ` ${styles.shortestpath}` : '';
  return (
    <div
      className={classes}
      id={`node-${row}-${col}`}
      onMouseDown={() => onNodeClick(row, col, 1)}
      onMouseEnter={() => onNodeClick(row, col, 2)}
      onMouseUp={() => onNodeClick(row, col, 3)}
    ></div>
  );
}
