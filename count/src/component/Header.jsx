import React from "react";

const HeaderComp = ({ count, handleClear, handleIncrement, cart }) => {
  return (
    <>
      <header>This is Count Header</header>
      <div>
        <div>Count From Host: {count}</div>
        <button onClick={handleClear}>Clear</button>
        <button onClick={handleIncrement}>+</button>
      </div>
      <hr />
      <div>
        {cart &&
          cart.map((item, index) => {
            return <div key={index}>{item}</div>;
          })}
      </div>
    </>
  );
};

export default HeaderComp;
