import { connect } from 'react-redux';
import SearchResult from './SearchResult';

function mapStoreToProps(store) {
    return {
        results: store.search.results
    };
}

export default connect(mapStoreToProps)(SearchResult);