import Icon from "antd/lib/icon";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../actions/login";
import LoginForm from "../../components/LoginForm/index.jsx";

import "./style.less";

const Login = props => {
    const { children } = props;
    const logged = useSelector(state => state.user.logged);
    const dispatch = useDispatch();
    const handleSubmit = formValues => {
        dispatch(login(formValues));
    };

    const Footer = () => {
        return (
            <div className="c-Login-Footer">
                © 2019
                <a
                    href="https://github.com/Nelev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Nelev
                </a>
                , made with
                <Icon
                    type="heart"
                    theme="filled"
                    style={{ marginLeft: 5, marginRight: 5 }}
                />
                in Berlin
            </div>
        );
    };

    const Title = () => {
        return <div className="c-Login-Title">Hooks</div>;
    };

    return logged === false ? (
        <div className="v-Login">
            <Title />
            <LoginForm onSubmit={handleSubmit} />
            <Footer />
        </div>
    ) : (
        children
    );
};

export default Login;
