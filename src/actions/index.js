import axios from 'axios';

const {
    VITE_WEATHER_URL,
    VITE_LATITUDE_PARAM,
    VITE_LONGITUDE_PARAM,
    VITE_EXCLUDE_PARAM,
    VITE_UNITS_PARAM,
    VITE_WEATHER_API_KEY
} = import.meta.env;

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
    const apiURL = `${VITE_WEATHER_URL}?lat=${VITE_LATITUDE_PARAM}&lon=${VITE_LONGITUDE_PARAM}&exclude=${VITE_EXCLUDE_PARAM}&units=${VITE_UNITS_PARAM}&appid=${VITE_WEATHER_API_KEY}`;

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