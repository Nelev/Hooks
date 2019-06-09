import React from "react";

import Header from "../../components/Header/index.jsx";
import SideMenu from "../../components/SideMenu/index.jsx";

import { useMenu } from "../../hooks/index";

const resources = [
    { name: "Dashboard", icon: "" },
    { name: "Heat", icon: "" },
    { name: "Humid", icon: "" },
    { name: "FAN", icon: "" }
];

const Root = () => {
    const { showMenu, toggleMenu } = useMenu();
    return (
        <React.Fragment>
            <Header />
            <SideMenu
                resources={resources}
                show={showMenu}
                toggleMenu={toggleMenu}
            />
        </React.Fragment>
    );
};

export default Root;
