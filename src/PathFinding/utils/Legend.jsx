import React from 'react';
import LegendItem from './LegendItem';
import styles from './Legend.module.scss';

class Legend extends React.Component {
  state = {
    array : [
    {
      name: 'Source',
      color : 'red'
    },
    {
      name: 'Destination',
      color : 'green'
    },
    {
      name: 'Visited',
      color : 'yellow'
    },
    {
      name: 'Shortest Path',
      color : 'rgb(185, 23, 185)'
    },
    {
      name: 'Wall',
      color : 'black'
    },
    {
      name: 'Unvisited',
      color : 'white'
    },
  ]
}
  render (){    
    return (
      <div className={styles.container}>
        <h1>LEGEND</h1>
        {
          this.state.array.map((item) => <LegendItem {...item}/>)
        }
      </div>
    )
  }
};

export default Legend;
