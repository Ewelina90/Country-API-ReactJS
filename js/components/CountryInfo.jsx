import React from 'react';

export class CountryInfo extends React.Component {

    formatNumber = (num) => {
        const number = num;
        let counter = 1;
        let result = [];
        const numberArray = number.toString().split('');
        for(let i = numberArray.length-1; i >= 0; i--){
            result.push(numberArray[i]);
            if((counter % 3 === 0) && i !== 0 ){
                result.push('.');
            }
            counter++;
        }
        result.reverse().join();
        return result;
    }

    render() {
        const { countryInfo } = this.props;
        const area = this.formatNumber(countryInfo[0].area);
        const population = this.formatNumber(countryInfo[0].population);

        // Show when data is fetching
        if( !countryInfo ){
            return null;
        }

        return (

                <div>
                    <div className="countryinfo__container__col1">
                        <div className="row">
                            <h2>country</h2>
                            <p>{ countryInfo[0].name }</p>
                        </div>
                        <div className="row">
                            <img src={ countryInfo[0].flag }></img>
                        </div>
                    </div>
                    <div className="countryinfo__container__col2">
                        <div className="countryinfo__container__col2__col1">
                            <div className="row">
                                <h2>capital</h2>
                                <p>{ countryInfo[0].capital }</p>
                            </div>
                            <div className="row">
                                <h2>subregion</h2>
                                <p>{ countryInfo[0].subregion }</p>
                            </div>
                            <div className="row">
                                <h2>population</h2>
                                <p>{ population }</p>
                            </div>
                        </div>
                        <div className="countryinfo__container__col2__col2">
                                <div className="row">
                                    <h2>area km<sup>2</sup></h2>
                                    <p>{ area }</p>
                                </div>
                                <div className="row">
                                    <h2>currencies - symbol</h2>
                                    <p>{ countryInfo[0].currencies[0].name } - { countryInfo[0].currencies[0].symbol } </p>
                                </div>
                                <div className="row">
                                    <h2>language</h2>
                                    <p>{ countryInfo[0].languages[0].name }</p>
                                </div>
                        </div>
                    </div>
                </div>
        )
    }
}
