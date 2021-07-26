import React, { Component } from 'react';
import Container from './Container/Container';
import styles from './Sorting.module.scss';
import Legend from './utils/Legend';
import Controls from './utils/Controls';
import _ from 'lodash';
import InsertionSort from './Algorithms/InsertionSort';
import QuickSort from './Algorithms/QuickSort';

const SIZE = 50;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Sorting extends Component {
  state = {
    array: [],
  };

  componentDidMount() {
    this.resetArray();
  }

  resetArray = () => {
    const array = [];
    for (let i = 0; i < SIZE; i++) {
      let val = randomIntFromInterval(0, 700);
      array[i] = {
        value : val,
        loading : false
      }
    }
    this.setState({ array });
  };

  sortingVisualiser = (sort_type) => {
    let temp = _.cloneDeep(this.state.array);
    let swaps;
    switch (sort_type) {
      case 1:
        swaps = InsertionSort(temp);
        break;
      case 2:
        swaps = QuickSort(temp);
        break;
      default:
        break;
    }
    this.AnimateSorting(swaps);
  }

  AnimateSorting = (swaps) => {
    let temp = _.cloneDeep(this.state.array);
    for (let i = 0; i <= swaps.length; ++i) {
      if (i === swaps.length) {
        setTimeout(() => {
          this.endSorting();
        }, i * 100);
        return;
      }
      setTimeout(() => {
        let t = temp[swaps[i][0]].value;
        temp[swaps[i][0]].value = temp[swaps[i][1]].value;
        temp[swaps[i][1]].value = t;
        temp[swaps[i][0]].loading = true;
        temp[swaps[i][1]].loading = true;
        this.setState({ array: temp });
        temp[swaps[i][0]].loading = false;
        temp[swaps[i][1]].loading = false;
      }, i * 100);
    }
  };

  endSorting = () => {
    let temp = _.cloneDeep(this.state.array);
    for (let i = 0; i<temp.length; ++i) {
      setTimeout(() => {
        temp[i].value += 10;
        temp[i].loading = true;
        this.setState({ array : temp });
        temp[i].value -= 10;
        temp[i].loading = false;
      }, i * 100);
    }
  }

  clickHandler = (mode) => {
    if (mode === 4) {
      this.resetArray();
      return;
    }
    this.sortingVisualiser(mode);
    // this.endSorting();
  };

  render() {
    return (
      <div className={styles.container}>
        <Controls clickHandler={this.clickHandler} />
        <Legend />
        <Container array={this.state.array} />
      </div>
    );
  }
}

export default Sorting;
