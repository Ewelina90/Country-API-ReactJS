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
                                region: e.region,
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
                // treat Russian Federation as part of Asia
                if(e.country[0]['name'] === "Russian Federation"){
                    console.log(true);
                    return groups[i] === "Central Asia";
                }else{
                    return groups[i] === e.country[0][group];
                }
            }).map((e) => {
                if(e.country[0][number] == undefined){
                    return 0;
                }else {
                    return e.country[0][number];
                }
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
        const areaData = this.state.countriesData ? this.getChartData('subregion', 'area') : null;
        console.log(this.state.countriesData);
        return (
            <div className="content">
                <div className="row">
                    <div className="chart">
                        <h2 className="chart__title">Number of population in each subregion</h2>
                        <SimplePieChart key={1} data={populationData}></SimplePieChart>
                    </div>
                    <div className="chart">
                        <h2 className="chart__title">Area of each subregion</h2>
                        <SimplePieChart key={2} data={areaData}></SimplePieChart>
                    </div>
                </div>
            </div>

        )
    }
}
