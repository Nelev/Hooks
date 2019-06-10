import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemperature } from "../../actions/temperature";

const DashBoard = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTemperature());
    }, []);

    const currentTemperature = useSelector(
        state => state.views.dashboard.currentTemperature
    );

    return <div>{currentTemperature}</div>;
};

export default DashBoard;
