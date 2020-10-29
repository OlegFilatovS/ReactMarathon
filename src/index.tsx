import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from "./App";
import './index.css'


ReactDOM.render(
    <App title={"Hello World!"}/>,
    document.getElementById('root') as HTMLElement,
);