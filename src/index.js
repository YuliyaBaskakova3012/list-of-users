import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App/App.js";
import store from '../redux/redux-store';
import "./index.scss"
ReactDOM.render(<Provider store={store}>
<App/>
</Provider>
, document.getElementById("root"));