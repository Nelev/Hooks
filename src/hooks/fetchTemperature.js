import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchTemperature } from "../actions/temperature";

const mapDispatchToProps = {
    fetchTemperature: fetchTemperature
};

const useFetchTemperature = () => {
    useEffect(() => {
        fetchTemperature();
    }, []);
};

export default connect(
    null,
    mapDispatchToProps
)(useFetchTemperature);
