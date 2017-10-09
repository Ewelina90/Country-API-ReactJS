import React from 'react';
import {SearchBar} from './SearchBar.jsx';
import {CountryInfo} from './CountryInfo.jsx';

export class Countries extends React.Component {

    render() {
        return (
            <div className="content">
                <SearchBar></SearchBar>
                <CountryInfo></CountryInfo>
            </div>
        )
    }
}
