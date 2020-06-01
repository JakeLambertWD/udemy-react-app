import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// render component to the div
ReactDOM.render(<App />, document.getElementById('root'));


registerServiceWorker();