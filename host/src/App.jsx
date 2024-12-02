import React, { Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import HostHeader from "./component/Header";
import "./index.css";
import { StoreProvider, useStore } from "store/store";
const CountHeader = React.lazy(() => import("count/Header"));

const App = () => {
  const [count, setCount] = useState(0);
  const [cartName, setCartName] = useState("");
  const { cart, addCart } = useStore();
  const handleClear = () => {
    setCount(0);
  };
  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div className="container">
      <HostHeader />
      <Suspense fallback={<div>Loading...</div>}>
        <CountHeader
          count={count}
          handleClear={handleClear}
          handleIncrement={handleIncrement}
          cart={cart}
        />
      </Suspense>
      <hr />
      <input
        type="text"
        placeholder="Cart Name"
        name="cartName"
        value={cartName}
        onChange={(e) => setCartName(e.target.value)}
      />
      <button onClick={() => addCart(cartName)}>Add Cart</button>
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
