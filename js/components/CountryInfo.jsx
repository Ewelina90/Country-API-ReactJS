import React from 'react';

export class CountryInfo extends React.Component {

    render() {
        return (
            <section className="countryinfo">
                <div className="countryinfo__container">
                    <div className="countryinfo__container__col1">
                        <h2>Poland</h2>
                        <img></img>
                        <div>Mapa</div>
                    </div>
                    <div className="countryinfo__container__col2">
                        <div className="countryinfo__container__col2__col">
                            col
                        </div>
                        <div className="countryinfo__container__col2__col">
                            col
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
