import axios from 'axios';

const {
    REACT_APP_WEATHER_URL,
    REACT_APP_LATITUDE_PARAM,
    REACT_APP_LONGITUDE_PARAM,
    REACT_APP_EXCLUDE_PARAM,
    REACT_APP_UNITS_PARAM,
    REACT_APP_WEATHER_API_KEY
} = process.env;

export function weatherHasErrored(bool) {
    return {
        type: 'WEATHER_HAS_ERRORED',
        hasErrored: bool
    };
}

export function weatherIsLoading(bool) {
    return {
        type: 'WEATHER_IS_LOADING',
        isLoading: bool
    };
}

export function weatherFetchDataSuccess(weather) {
    return {
        type: 'WEATHER_FETCH_DATA_SUCCESS',
        weather
    };
}

export function weatherFetchData() {
    const apiURL = `${REACT_APP_WEATHER_URL}?lat=${REACT_APP_LATITUDE_PARAM}&lon=${REACT_APP_LONGITUDE_PARAM}&exclude=${REACT_APP_EXCLUDE_PARAM}&units=${REACT_APP_UNITS_PARAM}&appid=${REACT_APP_WEATHER_API_KEY}`;

    return (dispatch) => {
        dispatch(weatherIsLoading(true));
        return axios
            .get(apiURL)
            .then((resp) => {
                if(resp.statusText.toLocaleLowerCase() !== 'ok') {
                    throw Error(resp.statusText);
                }
                dispatch(weatherIsLoading(false))
                return resp.data;
            })
            .then((weather) => dispatch(weatherFetchDataSuccess(weather)))
            .catch((error) => dispatch(weatherHasErrored(true)))
    }
}