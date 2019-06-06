import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import { Button, Icon, Modal } from "antd";

import "./style.less";

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);

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
        </div>
    );
};

export default Header;
