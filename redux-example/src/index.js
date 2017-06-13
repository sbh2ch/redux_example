/**
 * Created by kiost on 2017-06-12.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import {createStore} from 'redux';
import reducers from './reducers';

const store = createStore(reducers);

ReactDOM.render(<App/>, document.getElementById('root'));