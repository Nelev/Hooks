import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import dashboardReducer from "./views/DashBoard/reducer";

export default combineReducers({
    form,
    views: combineReducers({
        routing: routerReducer,
        dashboard: dashboardReducer
    })
});
