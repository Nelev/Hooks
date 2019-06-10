import React, { useState } from "react";

import { useCurrent } from "../../hooks/index";
import Header from "../../components/Header/index.jsx";
import DashBoard from "../DashBoard/index.jsx";

import "./style.less";

const Root = () => {
    const { current, setCurrent } = useCurrent("DASHBOARD");
    const [contentMargin, setContentMargin] = useState(40);
    return (
        <div className="v-Container">
            <React.Fragment>
                <Header
                    setCurrentRoot={setCurrent}
                    setContentMargin={setContentMargin}
                    contentMargin={contentMargin}
                />
                <div
                    className="v-ContentArea"
                    style={{ marginLeft: contentMargin }}
                >
                    <DashBoard show={current === "DASHBOARD" ? true : false} />
                </div>
            </React.Fragment>
        </div>
    );
};

export default Root;
