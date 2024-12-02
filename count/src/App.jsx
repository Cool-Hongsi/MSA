import React from "react";
import ReactDOM from "react-dom/client";
import CountHeader from "./component/Header";
import "./index.css";
import { StoreProvider } from "store/store";

const App = () => {
  return (
    <div className="container">
      <CountHeader />
    </div>
  );
};

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(
  <StoreProvider>
    <App />
  </StoreProvider>
);
