import React from 'react';
import { SimplePieChart } from './PieChart.jsx';

export class Statistics extends React.Component {

    constructor(){
        super(...arguments);
        this.state = {
            countriesData: '',
        }
    }

    componentDidMount() {
        fetch(`https://restcountries.eu/rest/v2/all?fields=name;subregion;area;population`)
            .then(r => r.json())
            .then(data => {
                const countriesData = data.map((e) => {
                    return {
                        country: [
                            {
                                name: e.name,
                                population: e.population,
                                area: e.area,
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
        console.log(this.state.countriesData);
        return (
            <div className="content">
                <SimplePieChart data={this.state.populationData}></SimplePieChart>
            </div>

        )
    }
}
