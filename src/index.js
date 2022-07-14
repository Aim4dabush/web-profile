import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

//components
import reportWebVitals from "./reportWebVitals";

//routes
import routes from "./Routes/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Router>{routes}</Router>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
