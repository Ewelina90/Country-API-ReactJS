import React from 'react';
import {IndexLink} from 'react-router';

export class Navigation extends React.Component {

    render() {

        return (
            <div className="conteiner">
                <header className="header">
                    <h1 className="header__title">Powered by COUNTRIES API</h1>
                    <h3 className="header__subtitle">Find out information about countries</h3>
                </header>
                <nav className="navigation">
                    <ul className="navigation__menu">
                        <li className="navigation__menu__item">
                            <IndexLink
                                to="/"
                                className="navigation__menu__link"
                                activeClassName="navigation__menu__item--active">
                                Countries Info
                            </IndexLink>
                        </li>
                        <li className="navigation__menu__item">
                            <IndexLink
                                to="/statistics"
                                className="navigation__menu__link"
                                activeClassName="navigation__menu__item--active">
                                Statistics
                            </IndexLink>
                        </li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
