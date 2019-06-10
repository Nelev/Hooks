import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../../actions/temperature";

const DashBoard = () => {
    const dispatch = useDispatch();

    const currentTemperature = useSelector(
        state => state.views.dashboard.currentTemperature
    );

    useEffect(() => {
        dispatch(fetchTemperature());
    }, []);

    return <div>{currentTemperature}</div>;
};

export default DashBoard;
