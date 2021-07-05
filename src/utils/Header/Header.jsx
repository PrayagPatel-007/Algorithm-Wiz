import React from 'react'

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <a href="github.com" className={styles.link}><ion-icon name="logo-github"></ion-icon>Github</a>
      <a href="github.com" className={styles.link}><ion-icon name="person-circle-outline"></ion-icon>Prayag Patel</a>
    </div>
  )
}
