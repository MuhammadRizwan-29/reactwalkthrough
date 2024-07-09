import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/Tabs/Tabs";
// import Tabs from "./Components/Tabs/Tabs";
import Tabs from "./Components/Tabs/Tabs";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Tabs />
  </React.StrictMode>
);
