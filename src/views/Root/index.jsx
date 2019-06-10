import React from "react";

import { useCurrent } from "../../hooks/index";
import Header from "../../components/Header/index.jsx";
import DashBoard from "../DashBoard/index.jsx";

import "./style.less";

const Root = () => {
    const { current, setCurrent } = useCurrent("DASHBOARD");
    return (
        <div className="v-Container">
            <React.Fragment>
                <Header setCurrentRoot={setCurrent} />
                <span className="v-ContentArea">
                    <DashBoard show={current === "DASHBOARD" ? true : false} />
                </span>
            </React.Fragment>
        </div>
    );
};

export default Root;
