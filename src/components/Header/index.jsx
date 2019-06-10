import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Icon, Tooltip } from "antd";

import Profile from "../Profile/index.jsx";
import SideMenu from "../SideMenu/index.jsx";
import { useCurrent, useModal } from "../../hooks/index.js";

import "./style.less";

const resources = [
    { name: "DASHBOARD", icon: "area-chart" },
    { name: "HEAT", icon: "fire" },
    { name: "HUMID", icon: "clock-circle" },
    { name: "FAN", icon: "dashboard" }
];

const Header = props => {
    const { current, setCurrent } = useCurrent("DASHBOARD");
    const { isShowing, toggleModal } = useModal();
    const [menuWidth, setMenuWidth] = useState(55);
    const { setCurrentRoot } = props;

    const MenuToogle = () => {
        return (
            <span
                className="c-Header-MenuToggle"
                onClick={() => {
                    const newWidth = menuWidth === 55 ? 170 : 55;
                    setMenuWidth(newWidth);
                }}
            >
                <Icon type={menuWidth === 55 ? "close" : "profile"} />
            </span>
        );
    };

    return (
        <div className="c-Header">
            <MenuToogle />
            <span className="c-HeaderTitle">
                <FormattedMessage id="app.title" />
            </span>
            <span className="c-Header-Profile-Icon" onClick={toggleModal}>
                <Tooltip title="profile">
                    <Icon type="user" />
                </Tooltip>
            </span>
            <Profile isShowing={isShowing} toggleModal={toggleModal} />
            <SideMenu
                menuWidth={menuWidth}
                resources={resources}
                current={current}
                setCurrent={setCurrent}
                setCurrentRoot={setCurrentRoot}
            />
        </div>
    );
};

export default Header;
