import { combineReducers } from 'redux';
import searchBarReducer from './components/searchBar/searchBarReducer';

const rootReducer = combineReducers({
    search: searchBarReducer
});

export default rootReducer;
