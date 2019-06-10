import React from "react";

import { useCurrent } from "../../hooks/index";
import Header from "../../components/Header/index.jsx";
import DashBoard from "../DashBoard/index.jsx";

const Root = () => {
    const { current } = useCurrent("DASHBOARD");
    return (
        <React.Fragment>
            <Header />
            {current === "DASHBOARD" ? <DashBoard /> : null}
        </React.Fragment>
    );
};

export default Root;
