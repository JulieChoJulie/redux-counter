import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';


// Redux
import { createStore } from 'redux';
import reducers from './reducers';

// Create Store
const store = createStore(reducers);


ReactDOM.render(<App />, document.getElementById('root'));
