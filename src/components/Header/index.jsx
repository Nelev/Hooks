import React, { useState } from "react";

import { Button, Modal } from "antd";

import "./style.less";

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);

    const Profile = () => {
        return showProfile === true ? (
            <Modal
                title="Basic Modal"
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
            <Button
                onClick={() => {
                    setShowProfile(true);
                }}
            />
            <Profile />
        </div>
    );
};

export default Header;
