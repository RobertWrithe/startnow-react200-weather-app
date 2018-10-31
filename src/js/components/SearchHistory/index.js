import { connect } from 'react-redux';
import SearchHistory from './SearchHistory';

function mapStoreToProps(store) {
    return {
        history: store.search.history
    };
}

export default connect(mapStoreToProps)(SearchHistory);