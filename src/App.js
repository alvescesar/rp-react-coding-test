import React, { Component } from 'react';
import { tableShape } from './types';

import Table from './components/Table';

import './App.css';

class App extends Component {
  static propTypes = {
    table: tableShape.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      table: {},
      tableId: 1
    };
  }

  async componentWillMount() {
    const response = await fetch(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${this.state.tableId}.json`);
    const table = await response.json();
    this.setState({ table });
  }

  componentDidUpdate(prevState) {
    if (prevState.tableId !== this.state.tableId) {
      this.componentWillMount();
    }
  }

  nextTable() {
    const { tableId } = this.state;

    if (tableId === 8) return this.setState({ tableId: 1 });
    this.setState({ tableId: tableId + 1 });
  }

  render() {
    const { table } = this.state;

    return (
      <div className="App">
        <Table table={table} />
        <button type="button" onClick={() => this.nextTable()}>Next Table</button>
      </div>
    );
  }
}

export default App;
