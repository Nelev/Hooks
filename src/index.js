import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Root } from "./views/Root/index.jsx";

import "./index.less";

const App = (
    <IntlProvider locale="en">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Root} />
            </Switch>
        </BrowserRouter>
    </IntlProvider>
);

ReactDOM.render(App, document.getElementById("root"));
