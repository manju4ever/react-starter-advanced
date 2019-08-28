import React from 'react';
import ReactDOM from 'react-dom';

import '~/styles/global.scss';

import App from './App';

const a = { name: "manju" };
console.log({...a});

ReactDOM.render(<App />, document.getElementById('root'));
