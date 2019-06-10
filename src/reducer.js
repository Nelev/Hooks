import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";
import { reducer as form } from "redux-form";

import dashboardReducer from "./views/DashBoard/reducer";
import userReducer from "./views/Login/reducer";

export default combineReducers({
    form,
    user: userReducer,
    views: combineReducers({
        routing: routerReducer,
        dashboard: dashboardReducer
    })
});
