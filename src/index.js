import React from 'react';
import ReactDOM from 'react-dom';
import './main.css';
import ReadGame from './ReadGame';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ReadGame />, document.getElementById('root'));
registerServiceWorker();
