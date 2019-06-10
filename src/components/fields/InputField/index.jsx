import Input from "antd/lib/input";
import React from "react";

const InputField = props => {
    const { input } = props;
    return <Input {...input} />;
};

export default InputField;
