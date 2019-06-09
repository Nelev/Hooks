import React from "react";
import { Modal } from "antd";
import { FormattedMessage } from "react-intl";

const Profile = props => {
    const { isShowing, toggleModal } = props;
    return isShowing ? (
        <Modal
            title={<FormattedMessage id="components.header.profileTitle" />}
            visible={isShowing}
            onCancel={toggleModal}
            onOk={toggleModal}
        />
    ) : null;
};

export default Profile;
