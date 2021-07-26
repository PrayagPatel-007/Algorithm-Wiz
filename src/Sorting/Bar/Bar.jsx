import React from 'react';
import styles from './Bar.module.scss';

const Bar = ({ height, loading }) => {
  let extraClasses = styles.item;
  extraClasses += loading ? ` ${styles.loading}` : '';
  return <div style={{ height: `${height}px` }} className={extraClasses}></div>;
};

export default Bar;
