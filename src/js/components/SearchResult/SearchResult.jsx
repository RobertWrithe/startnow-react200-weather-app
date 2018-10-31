import React from 'react';

export default class SearchResult extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { results } = this.props;
    console.log(results);

    return (
      <div className='col col-md-6 mb-3'>
        {results !== 'none' &&
          <div className='card border-info'>
            {results === 'fail' &&
              <div className='card-body'>
                <p>Please refactor search...</p>
              </div>
            }
            {typeof results !== 'string' &&
              <div>
                <div className='card-header border-info text-info'>City Information</div>
                <div className='card-body'>
                  <div className='row flex justify-content-center'>
                    <div className='container'>
                      <div className='col text-center'>
                        <h2>{results.name}</h2>
                        <p className='small'>Lat/Long: {results.coord.lat}, {results.coord.lon}</p>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className='container flex justify-content-center'>
                    <div className='row'>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Temperature (F)</p>
                        <p className='font-weight-bold text-success'>{results.main.temp}F</p>
                      </div>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Pressure</p>
                        <p className='font-weight-bold text-success'>{results.main.pressure}</p>
                      </div>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Humidity</p>
                        <p className='font-weight-bold text-success'>{results.main.humidity}%</p>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Lowest Temp (F)</p>
                        <p className='font-weight-bold text-success'>{results.main.temp_min}F</p>
                      </div>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Highest Temp (F)</p>
                        <p className='font-weight-bold text-success'>{results.main.temp_max}F</p>
                      </div>
                      <div className='col text-center'>
                        <p className='small font-weight-bold'>Windspeed</p>
                        <p className='font-weight-bold text-success'>{results.wind.speed}mph</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            }
          </div>
        }
      </div>
    );
  }
}