require('babel-polyfill');

import React from 'react';
import ReactDOM from 'react-dom';

import BoardList from './components/board';

document.addEventListener('DOMContentLoaded', () => ReactDOM.render(<BoardList />, document.getElementById("app")))
