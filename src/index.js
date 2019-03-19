import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react";
import { Provider } from "react-redux";
import { render } from "react-dom";
import store from "./js/store/store"

render(
    <Provider store={store}>
        <FormContainer />
    </Provider>,
    document.getElementById("app")
);