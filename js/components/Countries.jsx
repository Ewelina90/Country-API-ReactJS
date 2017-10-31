import React from 'react';
import {SearchBar} from './SearchBar.jsx';
import {CountryInfo} from './CountryInfo.jsx';

export class Countries extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            countriesData: '',
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
            })
        }

    render() {
        return (
            <div className="content">
                {this.state.countriesData ?
                    <SearchBar countriesData={this.state.countriesData}></SearchBar>
                :   <p>Loading ...</p> }
                <CountryInfo></CountryInfo>
            </div>
        )
    }
}
