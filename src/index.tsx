import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";
import App from "./components/App";
import client from "./services/services";
import "normalize.css";
import "./styles/styles.less";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <App />
        </Provider>
    </ApolloProvider>,
    document.getElementById("app")
);
