import React from 'react';

import styles from './IndexPageItem.module.scss';
import { NavLink } from 'react-router-dom';

export default function IndexPageItem({ imageURL, title, url }) {
  return (
    <div>
      <NavLink className={styles.container} to={url}>
        <img className={styles.image} src={imageURL} alt='imageUrl'></img>
        <p>{title}</p>
      </NavLink>
    </div>
  );
}
