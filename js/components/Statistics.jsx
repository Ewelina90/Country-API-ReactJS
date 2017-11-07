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

    getPopulationData = () => {
        const data = this.state.countriesData;
        let subregions = [];
        for(let i = 0; i < data.length; i++){
            let currentData = data[i].country[0].subregion;
            if((subregions.indexOf(currentData) == -1) && currentData !== ''){
                subregions.push(currentData);
            }
        }

        let populationSum = [];
        for(let i = 0; i < subregions.length; i++){
            populationSum[i] = data.filter((e) => {
                return subregions[i] === e.country[0].subregion;
            }).map((e) => {
                return e.country[0].population;
            }).reduce((prev, curr) => {
                return prev + curr;
            })
        }

        let populationData = [];
        for(let i = 0; i < subregions.length; i++){
            populationData.push({name: subregions[i], value: populationSum[i]});
        }

        return populationData;
    }

    render() {
        const populationData = this.state.countriesData ?  this.getPopulationData() : null;
        return (
            <div className="content">
                <SimplePieChart data={populationData}></SimplePieChart>
            </div>

        )
    }
}
