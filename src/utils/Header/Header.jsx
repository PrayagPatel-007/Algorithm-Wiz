import React from 'react'
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.left}>
      <Link to='/' className={styles.link}><ion-icon name="home-outline"></ion-icon>Home</Link>
      <a href="github.com" className={styles.link}><ion-icon name="logo-github"></ion-icon>Github</a>
      </div>
      <a href="github.com" className={styles.link}><ion-icon name="person-circle-outline"></ion-icon>Prayag Patel</a>
    </div>
  )
}
