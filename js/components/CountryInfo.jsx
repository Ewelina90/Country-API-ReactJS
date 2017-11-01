import React from 'react';

export class CountryInfo extends React.Component {

    render() {
        const { countryInfo } = this.props;
        console.log(countryInfo);
        return (
            <section className="countryinfo">
                <div className="countryinfo__container">
                    <div className="countryinfo__container__col1">
                        <h2>name</h2>
                            <p>{ countryInfo[0].name }</p>
                        <img></img>
                        <div>Mapa</div>
                    </div>
                    <div className="countryinfo__container__col2">
                        <div className="countryinfo__container__col2__col">
                            <h2>capital</h2>
                                <p>{ countryInfo[0].capital }</p>
                            <h2>subregion</h2>
                                <p>{ countryInfo[0].subregion }</p>
                            <h2>population</h2>
                                <p>{ countryInfo[0].population }</p>
                        </div>
                        <div className="countryinfo__container__col2__col">
                            <h2>area</h2>
                                <p>{ countryInfo[0].area }</p>
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
