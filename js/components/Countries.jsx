import React from 'react';
import {SearchBar} from './SearchBar.jsx';
import {CountryInfo} from './CountryInfo.jsx';
import { SimpleMap } from './Map.jsx';

export class Countries extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            countriesData: '',
            chosenCountry: '',
            countryDataToDisplay: '',
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

    handleChosenCountry = (country) => {
        this.setState({
            chosenCountry: country,
        })

        this.getCountryData(country);
    }

    getCountryData = (chosenCountry) => {
        const { countriesData } = this.state;
        let countryDataToDisplay = [];
        if( countriesData ){
            countryDataToDisplay = countriesData.filter((e) => {
                return e.country[0].name.includes(chosenCountry);
            }).map((e) => {
                return e.country[0];
            });
        }

        this.setState({
            countryDataToDisplay: countryDataToDisplay,
        })
    }

    render() {
        const { countriesData, chosenCountry, countryDataToDisplay } = this.state;
        console.log(countryDataToDisplay);
        const center = countryDataToDisplay ?
                            {lat: countryDataToDisplay[0].latlng[0], lng: countryDataToDisplay[0].latlng[1]}
                            : null;

        return (
            <div className="content">
                { countriesData ?
                    <SearchBar
                        countriesData={ countriesData }
                        handleChosenCountry={ this.handleChosenCountry }>
                    </SearchBar>
                    : <p>Loading ...</p>
                }
                { chosenCountry && countryDataToDisplay ?
                    <section className="countryinfo">
                        <div className="countryinfo__container">
                            <CountryInfo
                                countryInfo={ countryDataToDisplay }>
                            </CountryInfo>
                            <div style={{width: '100%', height:'300px', float: 'left'}}>
                                <SimpleMap
                                    centerMap={ center }>
                                </SimpleMap>
                            </div>
                        </div>
                    </section>
                    : null
                }
            </div>
        )
    }
}
