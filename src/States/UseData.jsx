import React, { useState } from "react";

const UseData = () => {
  const [coders, setcoders] = useState("coders");
  //   const [name, setname] = useState("My Name");
  //   const [value, setvalue] = useState(0);
  //   function HandleChnage() {
  //     setname("My Profile");
  //     setvalue(value + 1)
  //   }
  //   function HnadleDec(){
  //     setvalue(value - 1)
  //   }
  function HandleClaass() {
    setcoders("newcoders");
  }
  return (
    <div>
      <h1 className={coders}>Codings First</h1>
      <button onClick={HandleClaass}>Change</button>
      {/* {30 < 5 ? <h1>Codings First</h1> : <h1>Hello Coders</h1>} */}
      {/* <h1>{name}</h1>
      <h1>{value}</h1>
      <button onClick={HandleChnage}>Click to Chnage</button>
      <button onClick={HnadleDec}>Click to Decrement</button> */}
    </div>
  );
};

export default UseData;
