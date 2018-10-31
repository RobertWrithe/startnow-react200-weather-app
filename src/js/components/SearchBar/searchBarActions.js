import axios from 'axios';

export function updateSearchInput(searchInput) {
    return {
        type: 'UPDATE_SEARCH_INPUT',
        payload: { searchInput }
    };
}

export function getWeather(searchInput, key, date, time) {
    return {
        type: 'GET_WEATHER',
        payload: axios.get(`/api/${searchInput}`)
            .then(res => {
                console.log(res.data);
                return {
                    results: res.data,
                    searchInput: searchInput,
                    key: key,
                    date: date,
                    time: time
                }
            })
    }
};