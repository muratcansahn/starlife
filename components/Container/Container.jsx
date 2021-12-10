import React from "react";

const Container = (props) => {
  return <div className=" container-bg fixed-top">{props.children}</div>;
};

export default Container;
