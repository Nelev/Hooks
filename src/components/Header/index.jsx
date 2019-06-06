import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Button, Icon, Modal } from "antd";

import "./style.less";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [showProfile, setShowProfile] = useState(false);

    const Menu = () => {
        return showMenu ? <div style={{ color: "black" }}>Menu</div> : null;
    };

    const MenuToogle = () => {
        return (
            <span
                className="c-Header-MenuToggle"
                onClick={() => {
                    setShowMenu(!showMenu);
                }}
            >
                <Icon type={showMenu ? "close" : "profile"} />
            </span>
        );
    };

    const Profile = () => {
        return showProfile ? (
            <Modal
                title={<FormattedMessage id="components.header.profileTitle" />}
                visible={showProfile}
                onCancel={() => {
                    setShowProfile(false);
                }}
                onOk={() => {
                    setShowProfile(false);
                }}
            />
        ) : null;
    };

    return (
        <div className="c-Header">
            <MenuToogle />
            <span className="c-HeaderTitle">
                <FormattedMessage id="app.title" />
            </span>
            <span className="c-ProfileButton">
                <Button
                    type="user"
                    onClick={() => {
                        setShowProfile(true);
                    }}
                >
                    <Icon type="user" />
                </Button>
            </span>
            <Profile />
            <Menu />
        </div>
    );
};

export default Header;
