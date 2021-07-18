import React from 'react';
import Node from '../Node/Node';
import styles from './Grid.module.scss';

const Grid = ({ grid, nodeClickHandler }) => {
  return (
    <div className={styles.grid}>
      {grid.map((item, i) =>
        item.map((it, j) => <Node key={`node-${i}-${j}`} onNodeClick={nodeClickHandler} {...it} />)
      )}
    </div>
  );
};

export default Grid;
