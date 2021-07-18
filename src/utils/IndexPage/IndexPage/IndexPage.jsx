import React from 'react';

import IndexPageItem from '../IndexPageItem/IndexPageItem';
import styles from './IndexPage.module.scss'

export default class IndexPage extends React.Component {
  state = {
    data: [
      {
        title: 'Pathfinding Algorithms',
        imageURL: 'https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        url: '/path-finding-visualizer'
      },
      {
        title: 'Sorting Algorithms',
        imageURL: 'https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        url: '/sorting'
      },
      {
        title: 'Searching Algorithms',
        imageURL: 'https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        url: '/searching'
      },
      {
        title: 'N Queens Problem',
        imageURL: 'https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        url: '/nqueen'
      },
      {
        title: 'Word Search',
        imageURL: 'https://images.unsplash.com/photo-1622495805440-0075dfea3318?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80',
        url: '/word-search'
      },
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
