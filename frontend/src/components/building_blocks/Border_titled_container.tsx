import React from "react";
import Accordion_toggler_icon from "./Accordion_toggler_icon";

const Border_titled_container = () => {
  return (
    <div>
      <div className="title d-flex justify-content-between border border-prime rounded-2 ">
        <span>Troposphere</span> <Accordion_toggler_icon />
      </div>
    </div>
  );
};

export default Border_titled_container;
