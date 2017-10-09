import React from 'react';
import ReactDOM from 'react-dom';
import {Navigation} from './js/components/Navigation.jsx';
import {Countries} from './js/components/Countries.jsx';
import {Statistics} from './js/components/Statistics.jsx';
import {NotFound} from './js/components/NotFound.jsx';
import {Router, Route, Link, IndexLink, IndexRoute, hashHistory} from 'react-router';

document.addEventListener('DOMContentLoaded',function(){

    class App extends React.Component {

        constructor(){
            super(...arguments);
            this.state = {
                countriesData: [],
            };
        }

        componentDidMount() {
            fetch(`https://restcountries.eu/rest/v2/all`)
                .then(r => r.json())
                .then(data => {
                    const countriesData = data.map((e) => {
                        return {
                            country: [
                                {
                                    name: e.name,
                                    flag: e.flag,
                                    latlng: e.latlng,
                                    capital: e.capital,
                                    population: e.population,
                                    area: e.area,
                                    currencies: e.currencies,
                                    languages: e.languages,
                                    subregion: e.subregion,
                                }
                            ]
                        }
                    });
                    this.setState({
                        countriesData: countriesData,
                    });
                });
        }
        render() {
            console.log(this.state.countriesData);
            return (
                <Router history={hashHistory}>
                    <Route path='/' component={Navigation}>
                        <IndexRoute component={Countries} />
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
