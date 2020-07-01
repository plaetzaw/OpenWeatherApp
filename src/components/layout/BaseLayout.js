import React from "react";
import HeaderTest from "./HeaderTest";

const BaseLayout = (props) => {
  return (
    <div className="container">
      <HeaderTest />
      {props.children}
    </div>
  );
};

export default BaseLayout;
