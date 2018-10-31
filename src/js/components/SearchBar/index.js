import { connect } from 'react-redux';
import SearchBar from './SearchBar';

function mapStoreToProps(store) {
    return {
        searchInput: store.search.searchInput,
        history: store.search.history
    };
}

export default connect(mapStoreToProps)(SearchBar);