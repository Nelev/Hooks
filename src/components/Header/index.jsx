import React, { useState } from "react";

import { Button, Modal } from "antd";

import "./style.less";

const useToggleModal = (init, ref) => {
    const [show, setToggleModal] = useState(init);
    const toggleModal = () => setToggleModal(!show);
    return { show, toggleModal };
};

const Header = () => {
    const [showProfile, setShowProfile] = useState(false);

    const Profile = () => {
        console.log(showProfile);
        return showProfile === true ? (
            <Modal title="Basic Modal" visible={showProfile} />
        ) : null;
    };

    return (
        <div className="c-Header">
            <Button
                onClick={() => {
                    setShowProfile();
                }}
            />
            <Profile />
        </div>
    );
};

export default Header;
