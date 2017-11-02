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
            <section className="countryinfo">
                <div className="countryinfo__container">
                    <div className="countryinfo__container__col1">
                        <h2>name</h2>
                        <p>{ countryInfo[0].name }</p>
                        <img src={ countryInfo[0].flag }></img>
                        <div>Mapa</div>
                    </div>
                    <div className="countryinfo__container__col2">
                        <div className="countryinfo__container__col2__col1">
                            <h2>capital</h2>
                                <p>{ countryInfo[0].capital }</p>
                            <h2>subregion</h2>
                                <p>{ countryInfo[0].subregion }</p>
                            <h2>population</h2>
                                <p>{ population }</p>
                        </div>
                        <div className="countryinfo__container__col2__col2">
                            <h2>area km^2</h2>
                                <p>{ area }</p>
                            <h2>'currencies, symbol'</h2>
                                <p>{ countryInfo[0].currencies[0].name}
                                   { countryInfo[0].currencies[0].symbol }
                               </p>
                            <h2>'languages.name'</h2>
                                <p>{ countryInfo[0].languages[0].name }</p>

                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
