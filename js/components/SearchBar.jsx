import React from 'react';

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchWord: '',
            countryPropositions: '',
        };
    }

    handlSearchOnChange = (event) => {
        let word = event.target.value;
        this.setState({
            searchWord: word,
        })

        word.length >= 3 ? this.filterCountriesData(word) : null ;
    }

    filterCountriesData = (searchWord) => {
        const countries = this.props.countriesData.slice();
        let countriesProposition = countries.filter((e) => {
            return e.country[0].name.toLowerCase().includes(searchWord.toLowerCase());
        }).map((e) => {
            return e.country[0].name;
        });

        this.setState({
            countryPropositions: countriesProposition,
        });
    }

    handleOnChose = (event,el) => {
        event.preventDefault();
        if(typeof(this.props.handleChosenCountry) == 'function'){
            this.props.handleChosenCountry(el);
        }
        this.setState({
            countryPropositions: '',
            searchWord : '',
        });
    }

    render() {
        console.log(this.state.countryPropositions);
        let propositions = this.state.countryPropositions ?
            this.state.countryPropositions.map((el) => {
                return <li key={el} onClick={e => this.handleOnChose(e,el)}>{el}</li>;
            })
        : null;

        return (
            <section className="searchbar">
                <input
                    type='text'
                    className="searchbar__input"
                    value={this.state.searchWord}
                    onChange={this.handlSearchOnChange}
                    placeholder='Type Country name in english'>
                </input>
                <ul style={{display: this.state.searchWord.length >= 3 ? 'block' : 'none'}}>
                    {propositions}
                </ul>

            </section>
        )
    }
}
