import FormContainer from "./js/components/container/FormContainer.jsx";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;