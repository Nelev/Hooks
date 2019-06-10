import PropTypes from "prop-types";

import { FETCH_TEMPERATURE_START } from "../../actions/temperature";
import { FETCH_TEMPERATURE_SUCCESS } from "../../actions/temperature";
import { FETCH_TEMPERATURE_ERROR } from "../../actions/temperature";

const defaultState = {
    isFetchingTemperature: false,
    errorFetchingTemperature: null,
    currentTemperature: null
};

export const statePropType = {
    isFetchingTemperature: PropTypes.bool,
    errorFetchingTemperature: PropTypes.instanceOf(Error),
    currentTemperature: PropTypes.number
};

export default (state = defaultState, action) => {
    const { type, payload } = action;
    switch (type) {
        case FETCH_TEMPERATURE_START:
            return {
                ...state,
                isFetchingTemperature: true,
                errorFetchingTemperature: null
            };
        case FETCH_TEMPERATURE_SUCCESS:
            return {
                ...state,
                isFetchingTemeprature: false,
                currentTemperature: payload
            };
        case FETCH_TEMPERATURE_ERROR:
            return {
                ...state,
                isFetchingTemperature: false,
                errorFetchingTemperature: payload
            };
        default:
            return state;
    }
};
