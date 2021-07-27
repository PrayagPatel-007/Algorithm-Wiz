import React from 'react';

import IndexPageItem from '../IndexPageItem/IndexPageItem';
import styles from './IndexPage.module.scss'

export default class IndexPage extends React.Component {
  state = {
    data: [
      {
        title: 'Pathfinding Algorithms',
        url: '/path-finding-visualizer'
      },
      {
        title: 'Sorting Algorithms',
        url: '/sorting'
      }
    ],
  };

  render() {
    return (
      <div className={styles.container}>
        {this.state.data.map((data, idx) => (
          <IndexPageItem key={idx} {...data}></IndexPageItem>
        ))}
      </div>
    );
  }
}
