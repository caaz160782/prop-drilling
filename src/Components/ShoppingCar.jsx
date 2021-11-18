import React from "react";

const ShoppingCar = ({onPlusProduct, onEmptyCar }) => {
  const carStyle = { fonstSize: "2em" };
  return (
    <div onClick={onEmptyCar} style={carStyle}>
      🛒
      {onPlusProduct}
    </div>
  );
};

export default ShoppingCar;
