import axios from "axios";

var Config = require("Config");

export const FETCH_TEMPERATURE_START = "FETCH_TEMPERATURE_START";
export const FETCH_TEMPERATURE_SUCCESS = "FETCH_TEMPERATURE_SUCCESS";
export const FETCH_TEMPERATURE_ERROR = "FETCH_TEMPERATURE_ERROR";

export const SET_TEMPERATURE_START = "SET_TEMPERATURE_START";
export const SET_TEMPERATURE_SUCCESS = "SET_TEMPERATURE_SUCCESS";
export const SET_TEMPERATURE_ERROR = "SET_TEMPERATURE_ERROR";

export const fetchTemperature = () => async dispatch => {
    try {
        dispatch({ type: FETCH_TEMPERATURE_START });
        const { data } = await axios.get(Config.serverUrl + `/temperature`);
        dispatch({
            type: FETCH_TEMPERATURE_SUCCESS,
            payload: data.temperature
        });
    } catch (err) {
        dispatch({
            type: FETCH_TEMPERATURE_ERROR,
            payload: err
        });
    }
};

export const setTemperature = temp => async dispatch => {
    try {
        dispatch({ type: SET_TEMPERATURE_START });
        //const { data } = await axios.post(`API_URL/temp`);
        setTimeout(() => {
            dispatch({
                type: SET_TEMPERATURE_SUCCESS,
                payload: temp
            });
        }, 1500);
    } catch (err) {
        dispatch({
            type: FETCH_TEMPERATURE_ERROR,
            payload: err
        });
    }
};
