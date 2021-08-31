import './App.css';
import { Component } from 'react';
import Board from './components/Board.component';

class App extends Component {
  constructor() {
    super();

    this.speed = 100;
    this.rows = 20;
    this.cols = 40;

    this.state = {
      generation: 0,
      gridFull: Array(this.rows).fill().map(() => Array(this.cols).fill(false))
    }
  }
  render() {
    console.log(this.state.gridFull);
    return (
    <div className="m-20">
      <h1 className="text-6xl mb-10">Game of life</h1>
        <Board
          gridFull={this.state.gridFull}
          rows={this.rows}
          cols={this.cols}
        />
      <h3 className="text-4xl mt-8">Generation: {this.state.generation}</h3>
    </div>
  );}
}

export default App;
