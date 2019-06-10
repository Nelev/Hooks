import React from "react";

import { useCurrent } from "../../hooks/index";
import Header from "../../components/Header/index.jsx";
import DashBoard from "../DashBoard/index.jsx";

const Root = () => {
    const { current, setCurrent } = useCurrent("DASHBOARD");
    return (
        <React.Fragment>
            <Header setCurrentRoot={setCurrent} />
            <DashBoard show={current === "DASHBOARD" ? true : false} />
        </React.Fragment>
    );
};

export default Root;
