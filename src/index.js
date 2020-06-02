import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// render component to the div
ReactDOM.render(<App appTitle="Person Manager" />, document.getElementById('root'));


registerServiceWorker();