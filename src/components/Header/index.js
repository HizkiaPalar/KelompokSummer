import React from "react";
import Logo from "./Logo";
import Generation from "./Generation";
const index = (props) => {
  return (
    <div>
      <h1>Header {props.text1}</h1>
      <Generation name2="By Afirst"/>
      <Logo name="By Hizkia" />
    </div>
  );
};

export default index;
