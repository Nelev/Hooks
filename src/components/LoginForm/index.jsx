import Button from "antd/lib/button";
import React from "react";
import { Field, reduxForm } from "redux-form";

import InputField from "../../components/fields/InputField/index.jsx";

import "./style.less";

const LoginForm = props => {
    const { pristine, submitting, handleSubmit } = props;
    return (
        <div className="c-Login-Form">
            <form onSubmit={handleSubmit}>
                <div>
                    <label style={{ color: "white" }}>Username</label>
                    <div>
                        <Field
                            name="username"
                            component={InputField}
                            type="text"
                            placeholder="User Name"
                        />
                    </div>
                </div>
                <div>
                    <Button
                        className="c-loginButton"
                        type="primary"
                        htmlType="submit"
                        disabled={pristine || submitting}
                    >
                        Enter
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default reduxForm({
    form: "login"
})(LoginForm);
