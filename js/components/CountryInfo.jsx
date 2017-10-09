import React from 'react';

export class CountryInfo extends React.Component {

    render() {
        return (
            <section className="countryinfo">
                <div className="countryinfo__container">
                    <div className="countryinfo__container__col1">
                        <h2>name</h2>
                        <img></img>
                        <div>Mapa</div>
                    </div>
                    <div className="countryinfo__container__col2">
                        <div className="countryinfo__container__col2__col">
                            <h2>capital</h2>
                            <h2>subregion</h2>
                            <h2>population</h2>
                        </div>
                        <div className="countryinfo__container__col2__col">
                            <h2>area</h2>
                            <h2>'currencies.name currencies.symbol'</h2>
                            <h2>'languages.name'</h2>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
