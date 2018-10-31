import React from 'react';

import {
    updateSearchInput,
    getWeather
} from './searchBarActions';

export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleGetWeather = this.handleGetWeather.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        dispatch(updateSearchInput(value));
    }

    handleGetWeather(event) {
        const { dispatch } = this.props;
        const { value } = event.target;
        const key = Date.now();
        const d = new Date();
        const date = `${d.getMonth()+1 < 10 ? '0' + d.getMonth()+1 : d.getMonth()+1}/${d.getDate() < 10 ? '0' + d.getDate() : d.getDate()}/${d.getFullYear()}`;
        const time = `${d.getHours() < 10 ? '0' + d.getHours() : d.getHours()}:${d.getMinutes() < 10 ? '0' + d.getMinutes() : d.getMinutes()}:${d.getSeconds() < 10 ? '0' + d.getSeconds() : d.getSeconds()}`;
        dispatch(getWeather(value, key, date, time));
    }

    handleKeyPress(event) {
        event.preventDefault();
        if (event.key === 'Enter') {
          this.handleGetWeather(event)
        }
    }

    render() {
        const { searchInput } = this.props;

        return (
            <div className='input-group'>
                <div className='input-group-prepend'>
                    <button type='button' className='btn btn-info' id='quick-one' value='San Diego' onClick={ this.handleGetWeather }>San Diego</button>
                    <button type='button' className='btn btn-info' id='quick-two' value='New York' onClick={ this.handleGetWeather }>New York</button>
                    <button type='button' className='btn btn-info' id='quick-three' value='Washington D.C.' onClick={ this.handleGetWeather }>D.C.</button>
                    <button type='button' className='btn btn-info' id='quick-four' value='London' onClick={ this.handleGetWeather }>London</button>
                    <button type='button' className='btn btn-info' id='quick-five' value='Tokyo' onClick={ this.handleGetWeather }>Tokyo</button>
                </div>
                <input 
                    type='text'
                    className='form-control'
                    placeholder='Search for your city...'
                    id='search-input'
                    value={ searchInput }
                    onChange={ this.handleSearchInput }
                    onKeyUp={this.handleKeyPress}
                />
                <div className='input-group-append'>
                    <button
                        type='button'
                        className='btn btn-outline-secondary'
                        id='search-button'
                        value={ searchInput }
                        onClick={ this.handleGetWeather }
                    >Go!</button>
                </div>
            </div>
        );
    }
}