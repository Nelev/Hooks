import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DisplayCard from "../../components/DisplayCard/index.jsx";

import { fetchTemperature } from "../../actions/temperature";

const DashBoard = props => {
    const { show } = props;
    const dispatch = useDispatch();

    const currentTemperature = useSelector(
        state => state.views.dashboard.currentTemperature
    );

    useEffect(() => {
        dispatch(fetchTemperature());
    }, [show]);

    return show ? (
        <div>
            <DisplayCard>{currentTemperature}</DisplayCard>
        </div>
    ) : null;
};

export default DashBoard;
