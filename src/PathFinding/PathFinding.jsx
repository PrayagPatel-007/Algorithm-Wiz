import React from 'react';
import Grid from './Grid/Grid';
import _ from 'lodash';

import ComplexityTable from './utils/Complexitytable';
import Legend from './utils/Legend';
import Controls from './utils/Controls';
import styles from './PathFinding.module.scss';

import { bfs } from './Algorithms/BFS';
import { dijkstra } from './Algorithms/Dijkstras';
import { dfs } from './Algorithms/DFS';
import { generateMaze } from './utils/generateMaze';

// Constants for the state
const SELECT_SOURCE = 1;
const SELECT_DEST = 2;
const SELECT_WALL = 3;
const CLEAR_BOARD = 4;
const CLEAR_PATH = 5;
const VISUALISE = 6;
const GENERATE = 9;

// Speed Factor
var SPEED = 1;

var ROWS = 50,
  COLS = 50;

export default class PathFinding extends React.Component {
  state = {
    grid: [],
    modifyingNodeState: 0,
    START_NODE_ROW: 2,
    START_NODE_COL: 2,
    FINISH_NODE_ROW: ROWS - 3,
    FINISH_NODE_COL: COLS - 3,
    isMousePressed: true,

    disabled: false
  };

  componentDidMount() {
    this.setUpGrid();
  }

  setUpGrid = () => {
    const grid = new Array(COLS);
    for (let i = 0; i < ROWS; i++) {
      grid[i] = new Array(ROWS);
      for (let j = 0; j < COLS; j++) {
        grid[i][j] = this.createNode(i, j);
      }
    }
    this.setState({ grid: grid });
  };

  createNode = (row, col) => {
    const { START_NODE_ROW, START_NODE_COL, FINISH_NODE_ROW, FINISH_NODE_COL } =
      this.state;
    return {
      row,
      col,
      isStart: row === START_NODE_ROW && col === START_NODE_COL,
      isFinish: row === FINISH_NODE_ROW && col === FINISH_NODE_COL,
      distance: Infinity,
      isVisited: false,
      isWall: false,
      previousNode: null,
      isShortest: false,
      cost: {
        F: Infinity,
        G: Infinity,
        H: Infinity,
      },
    };
  };

  setWall = (row, col) => {
    let temp = _.cloneDeep(this.state.grid);
    temp[row][col].isWall = !temp[row][col].isWall;
    this.setState({ grid: temp });
  };

  setSource = (row, col) => {
    let temp = _.cloneDeep(this.state.grid);
    const { START_NODE_ROW, START_NODE_COL } = this.state;
    temp[START_NODE_ROW][START_NODE_COL].isStart = false;
    if (!temp[row][col].isFinish && !temp[row][col].isWall) {
      temp[row][col].isStart = true;
      this.setState({ START_NODE_ROW: row });
      this.setState({ START_NODE_COL: col });
      this.setState({ grid: temp });
    } else {
      alert('Invalid Location! Please choose a valid one.');
      return;
    }
  };

  setDest = (row, col) => {
    let temp = _.cloneDeep(this.state.grid);
    const { FINISH_NODE_ROW, FINISH_NODE_COL } = this.state;
    temp[FINISH_NODE_ROW][FINISH_NODE_COL].isFinish = false;
    if (!temp[row][col].isStart && !temp[row][col].isWall) {
      temp[row][col].isFinish = true;
      this.setState({ FINISH_NODE_ROW: row });
      this.setState({ FINISH_NODE_COL: col });
      this.setState({ grid: temp });
    } else {
      alert('Invalid Location! Please choose a valid one.');
      return;
    }
  };

  clearBoard = () => {
    this.setUpGrid();
  };

  clearPath = () => {
    let temp = _.cloneDeep(this.state.grid);
    for (let i = 0; i < ROWS; i++) {
      for (let j = 0; j < COLS; j++) {
        if (temp[i][j].isVisited || temp[i][j].isShortest) {
          temp[i][j].isVisited = false;
          temp[i][j].isShortest = false;
        }
      }
    }
    this.setState({ grid: temp });
  };

  onControlClick = (mode) => {
    if (mode === CLEAR_BOARD) this.clearBoard();
    else if (mode === CLEAR_PATH) this.clearPath();
    else if (mode === GENERATE) {
      const temp2 = _.cloneDeep(this.state.grid);
      const temp = generateMaze(temp2);
      this.setState({grid : temp});
    }
    else if (mode >= VISUALISE) this.visualiseAlgorithm(mode - 5);
    else {
      this.setState({ modifyingNodeState: mode });
    }
  };

  handleNodeClick = (row, col, id) => {
    if (id === 1 || (id === 2 && this.state.isMousePressed)) {
      const { modifyingNodeState } = this.state;
      this.setState({ isMousePressed: true });
      if (modifyingNodeState === SELECT_SOURCE) this.setSource(row, col);
      else if (modifyingNodeState === SELECT_DEST) this.setDest(row, col);
      else if (modifyingNodeState === SELECT_WALL) this.setWall(row, col);
      else return;
    } else if (id === 3) {
      this.setState({ isMousePressed: false });
    }
  };

  visualiseAlgorithm(algorithm) {
    const {
      grid,
      START_NODE_COL,
      START_NODE_ROW,
      FINISH_NODE_COL,
      FINISH_NODE_ROW,
    } = this.state;
    this.setState({disabled : true});
    var visitedNodesInOrder, nodesInShortestPathOrder;
    let temp = _.cloneDeep(grid);
    const STARTNODE = temp[START_NODE_ROW][START_NODE_COL];
    const FINISHNODE = temp[FINISH_NODE_ROW][FINISH_NODE_COL];
    switch (algorithm) {
      case 1:
        [visitedNodesInOrder, nodesInShortestPathOrder] = bfs(
          temp,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 2:
        [visitedNodesInOrder, nodesInShortestPathOrder] = dfs(
          temp,
          STARTNODE,
          FINISHNODE
        );
        break;
      case 3:
        [visitedNodesInOrder, nodesInShortestPathOrder] = dijkstra(
          temp,
          STARTNODE,
          FINISHNODE
        );
        break;
      default:
        return;
    }
    this.animatePath(visitedNodesInOrder, nodesInShortestPathOrder);
  }

  animatePath = (visitedNodesInOrder = [], nodesInShortestPathOrder) => {
    let temp = _.cloneDeep(this.state.grid);
    for (let i = 0; i <= visitedNodesInOrder.length; i++) {
      if (i === visitedNodesInOrder.length) {
        setTimeout(() => {
          this.animateShortestPath(nodesInShortestPathOrder);
        }, i * SPEED);
        return;
      }
      setTimeout(() => {
        const node = visitedNodesInOrder[i];
        if (!node.isFinish && !node.isStart && !node.isWall) {
          temp[node.row][node.col].isVisited = true;
        }
        this.setState({ grid: temp });
      }, i * SPEED);
    }
  };

  animateShortestPath = (nodesInShortestPathOrder = []) => {
    let temp = _.cloneDeep(this.state.grid);
    for (let i = 0; i <= nodesInShortestPathOrder.length; i++) {
      if (i === nodesInShortestPathOrder.length) {
        setTimeout(() => {
          this.setState({disabled: false});
        }, i * SPEED);
        return;
      }
      setTimeout(() => {
        const node = nodesInShortestPathOrder[i];
        if (!node.isStart && !node.isFinish && !node.isWall) {
          temp[node.row][node.col].isShortest = true;
        }
        this.setState({ grid: temp });
      }, i * SPEED);
    }
  };

  render() {
    return (
      <div style={{ backgroundColor: '#141414' }}>
        <Controls clickHandler={this.onControlClick} disabled={this.state.disabled} />
        <div className={styles.grid}>
          <div className={styles.container}>
            <div className={styles.pad}>
              <Grid
                grid={this.state.grid}
                nodeClickHandler={this.handleNodeClick}
              />
            </div>
          </div>
          <div className={styles.right + ' ' + styles.container}>
            <Legend />
            <ComplexityTable />
          </div>
        </div>
      </div>
    );
  }
}
