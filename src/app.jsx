import React from 'react';
import ReactDOM from 'react-dom';
import {UrlRow} from './components/UrlRow.jsx';
import {UrlTable} from './components/UrlTable.jsx';
import {UrlFilter} from './components/UrlFilter.jsx';
import {UrlAdd} from './components/UrlAdd.jsx';
import {Container} from './components/Container.jsx';

const contentNode = document.getElementById('contents');

ReactDOM.render(<Container />, contentNode);
