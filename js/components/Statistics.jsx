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

    getChartData = (group, number) => {
        const data = this.state.countriesData;
        let groups = [];
        for(let i = 0; i < data.length; i++){
            let currentData = data[i].country[0][group];
            if((groups.indexOf(currentData) == -1) && currentData !== ''){
                groups.push(currentData);
            }
        }
        let numbers = [];
        for(let i = 0; i < groups.length; i++){
            numbers[i] = data.filter((e) => {
                return groups[i] === e.country[0][group];
            }).map((e) => {
                return e.country[0][number];
            }).reduce((prev, curr) => {
                return prev + curr;
            })
        }
        let chartData = [];
        for(let i = 0; i < groups.length; i++){
            chartData.push({name: groups[i], value: numbers[i]});
        }
        return chartData;
    }

    render() {
        const populationData = this.state.countriesData ?  this.getChartData('subregion', 'population') : null;
        return (
            <div className="content">
                <SimplePieChart data={populationData}></SimplePieChart>
            </div>

        )
    }
}
