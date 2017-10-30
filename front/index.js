import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import createSagaMiddlware from 'redux-saga';
import {BrowserRouter as Router,Link,Route} from "react-router-dom";
import 'regenerator-runtime/runtime'

import './index.css';
import App from './components/App';
import reducer from './redux/reducer';
import {rootSaga} from "./redux/saga";

const logger = createLogger();
const saga = createSagaMiddlware();
const store = createStore(
    reducer,
    applyMiddleware(logger,saga)
)
saga.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route path="/" component={App}/>
        </Router>
    </Provider>,
     document.getElementById('root')
    );

