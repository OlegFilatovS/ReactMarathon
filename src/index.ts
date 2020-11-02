import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import './index.css';

ReactDOM.render(React.createElement(App, { title: '123' }), document.getElementById('root') as HTMLElement);
