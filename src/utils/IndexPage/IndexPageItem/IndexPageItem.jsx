import React from 'react';

import styles from './IndexPageItem.module.scss';

export default function IndexPageItem({ imageURL, title }) {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={imageURL} alt='imageUrl'></img>
      <p>{title}</p>
    </div>
  );
}
