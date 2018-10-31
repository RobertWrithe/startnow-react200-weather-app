const defaultState = {
    searchInput: '',
    pending: false,
    history: [],
    results: {}
};

export default function SearchBarReducer (state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_INPUT': {
            return {
                ...state,
                searchInput: payload.searchInput
            };
        }
        
        case 'GET_WEATHER_FULFILLED': {
            const { results, searchInput, key, date, time } = action.payload;
            return {
                searchInput: '',
                pending: false, 
                history: [
                    { searchInput, key, date, time },
                    ...state.history
                ],
                results: results
            };
        }
        
        case 'GET_WEATHER_PENDING': {
            return {
              ...state,
              pending: true, 
            };
        }

        case 'GET_WEATHER_REJECTED': {
            return {
              ...state,
              pending: false, 
            };
        }

        default: {
            return state;
        }
    }
}