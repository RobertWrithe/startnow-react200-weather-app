import { combineReducers } from 'redux';
import searchBarReducer from './components/SearchBar/searchBarReducer';

const rootReducer = combineReducers({
    search: searchBarReducer
});

export default rootReducer;
