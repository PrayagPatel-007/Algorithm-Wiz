import React from 'react'

import './Header.styles.scss';

export default function Header() {
  return (
    <div className='header'>
      <a href="github.com" class='link'><ion-icon name="logo-github"></ion-icon>Github</a>
      <a href="github.com" class='link'><ion-icon name="person-circle-outline"></ion-icon>Prayag Patel</a>
    </div>
  )
}
