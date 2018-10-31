import React from 'react';

export default class SearchHistory extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;

    return (
      <div className='col col-md-6 mb-3'>
        {history.length > 0 &&
          <div className='card border-info'>
            <div className='card-header border-info text-info'>Search History</div>
            <div className='card-body'>
              <table className='table table-striped table-borderless'>
                <tbody>
                  {
                    history.map(historyItem => (
                      <tr key={historyItem.key} className='d-flex justify-content-between'>
                        <td>{historyItem.searchInput}</td>
                        <td className='flex small'>
                          <div>{historyItem.date}</div>
                          <div>{historyItem.time}</div>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        }
      </div>
    );
  }
}