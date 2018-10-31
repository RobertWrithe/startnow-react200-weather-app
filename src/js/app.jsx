import React from 'react';
import SearchBar from './components/SearchBar';
import SearchHistory from './components/SearchHistory';
import SearchResult from './components/SearchResult';

export default class App extends React.Component {

  render() {
    return (
      <div className='container mt-3'>
        <div className='jumbotron mb-3' >
          <h1 className='display-4'>Origin Weather Application</h1><br/>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
        <div className='row'>
          <div className='container-fluid mb-3'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
            <SearchResult />
            <SearchHistory />
        </div>
      </div>
    );
  }
}
