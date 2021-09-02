import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import { App } from "./components/App";
import client from "./services/services";
import "normalize.css";
import "./styles/styles.less";

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("app")
);
