import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from './js/components/Navigation.jsx';
import {Countries} from './js/components/Countries.jsx';
import {Statistics} from './js/components/Statistics.jsx';
import {NotFound} from './js/components/NotFound.jsx';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

document.addEventListener('DOMContentLoaded',function(){

    class App extends React.Component {

        render() {
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Navigation}>
                        <IndexRoute component={Countries}/>
                        <Route path='/statistics' component={Statistics} />
                        <Route path='*' component={NotFound} />
                    </Route>
                </Router>
            )
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
