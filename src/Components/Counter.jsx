import React from "react";

const Counter = ({ qty ,onMenusProductClick, onPlusProductClick}) => {
  const styleContainer = {
    margin: "5px",
    fontSize: "20px",
  };
  const styleQty = {
    marginLeft: "15px",
    marginRight: "15px",
  };

  return (
    <div style={styleContainer}>
   <button  disabled={qty <=0}  onClick={onMenusProductClick}> - </button>
      <span style={styleQty}>{qty}</span>
      <button onClick ={onPlusProductClick}> + </button>
    </div>
  );
};
// 
export default Counter;
