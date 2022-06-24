import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

// TODO: Retrieve this data from the API rather than a fixture
// import table from './data/table-1'

const tableId = 1;

fetch(`https://storage.googleapis.com/replaypoker-dummy-api/tables/${tableId}.json`)
  .then(response => response.json())
  .then(table => {
    console.log("TABLE HERE => ", table);
    ReactDOM.render(<App table={table} />, document.getElementById('root'));
  })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
