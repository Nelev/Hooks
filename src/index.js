import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import messagesEn from "./messages/en";
import Root from "./views/Root/index.jsx";

import "./index.less";

// TODO: get the current broswer language and load the locale one.
// const language = navigator.language.split(/[-_]/)[0]
const language = "en";
const messages = { en: messagesEn };

const App = (
    <IntlProvider locale={language} messages={messages[language]}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Root} />
            </Switch>
        </BrowserRouter>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
