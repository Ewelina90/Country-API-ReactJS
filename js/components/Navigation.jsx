import React from 'react';
import {IndexLink} from 'react-router';

export class Navigation extends React.Component {

    render() {
        const activeStyle = {color: '#4a90e2'};
        return (
            <div className="conteiner">
                <h1>Find out information about countries</h1>
                <nav>
                    <ul>
                        <li><IndexLink to="/" activeStyle={activeStyle}>Countries Info</IndexLink></li>
                        <li><IndexLink to="/statistics" activeStyle={activeStyle}>Statistics</IndexLink></li>
                    </ul>
                </nav>
                {this.props.children}
            </div>
        )
    }
}
