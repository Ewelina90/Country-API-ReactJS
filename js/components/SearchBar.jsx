import React from 'react';

export class SearchBar extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            searchWord: '',
            countryPropositions: '',
            propositionsList: '',
            index: 0,
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

        this.createPropositionList(countriesProposition,searchWord);
    }

    createPropositionList = (countries,searchWord) => {
        let propositions = countries.length >= 1 ?
            countries.map((country, id) => {
                let word = searchWord.toLowerCase();
                let startIndex = country.toLowerCase().indexOf(word);
                let endIndex = word.length + startIndex;
                let begining = country.slice(0,startIndex);
                let middle = country.slice(startIndex, endIndex);
                let end = country.slice(word.length + startIndex)
                return <li key={ country + id }
                           onClick={ e => this.handleOnChose(e,country) }
                           className="searchbar__list__item"
                           >
                           { begining }
                           <span style={{fontWeight: 'bold', fontFamily: 'inherit' }}>{ middle }</span>
                           { end }
                       </li>;
            })
            : <li className="searchbar__list__item">
                This country doesn't exist.
              </li>;

        this.setState({
            countryPropositions: countries,
            propositionsList: propositions,
        })
    }

    handleOnChose = (event,el) => {
        event.preventDefault();
        const { handleChosenCountry } = this.props;

        if(typeof(handleChosenCountry) == 'function'){
            handleChosenCountry(el);
        }
        this.setState({
            countryPropositions: '',
            searchWord : '',
        });
    }

    handleOnKeyPress = event => {
        const key = event.keyCode;
        let indexLocal = this.state.index;
        if (this.state.propositionsList.length){
            const propoList = this.refs.propList.children;
            switch (key) {
                case 40:
                    if((indexLocal < propoList.length) && (indexLocal > 0)){
                        propoList[indexLocal - 1].classList.remove('activeKey');
                        propoList[indexLocal].classList.add('activeKey');
                        indexLocal = indexLocal + 1;
                    }
                    else if((indexLocal < propoList.length) && (indexLocal === 0)) {
                        propoList[indexLocal].classList.add('activeKey');
                        indexLocal = indexLocal + 1;
                    }
                    break;
                case 38:
                    if(indexLocal > 0){
                        propoList[indexLocal -1].classList.remove('activeKey');
                        if(indexLocal > 1){
                            indexLocal = indexLocal - 1;
                        }
                        propoList[indexLocal -1].classList.add('activeKey');
                    }
                    break;
                case 13:
                    propoList[indexLocal -1].classList.remove('activeKey');
                    this.handleOnChose(event,propoList[indexLocal -1].textContent);
                    indexLocal = 0;
                    break;
                default:
                    indexLocal = 0;

            }
        }
        this.setState({
            index: indexLocal,
        });

    }

    render() {
        const { searchWord, propositionsList } = this.state;
        return (
            <section className="searchbar">
                <input
                    type='text'
                    className="searchbar__input"
                    value={ searchWord }
                    onChange={ this.handlSearchOnChange }
                    onKeyDown={ this.handleOnKeyPress }
                    tabIndex='0'
                    placeholder='Type Country name in english'>
                </input>
                <ul style={{display: searchWord.length >= 3 ? 'block' : 'none'}}
                    className="searchbar__list"
                    ref='propList'>
                    { propositionsList }
                </ul>
            </section>
        )
    }
}
