import React from 'react';

import styles from './IndexPageItem.module.scss';
import { NavLink } from 'react-router-dom';
import PathFinding from './Images/PathFinding.png';
import Sorting from './Images/Sorting.png';

export default function IndexPageItem({ title, url }) {
  const imageUrl = title === 'Pathfinding Algorithms' ? PathFinding : Sorting;
  return (
    <div>
      <NavLink className={styles.container} to={url}>
        <img className={styles.image} src={imageUrl} alt='imageUrl'></img>
        <p>{title}</p>
      </NavLink>
    </div>
  );
}
