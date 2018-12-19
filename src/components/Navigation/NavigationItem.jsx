import React from "react";
import hex from "../../_assets/images/hex.svg";
import filledHex from "../../_assets/images/filledHex.svg";

const NavigationItem = ({ tabInfo, currentTab }) => {
  return (
    <li className={currentTab === tabInfo.index ? "current" : ""}>
      <div className="hex">
        <span>{tabInfo.step}</span>
        <img src={hex} alt="hex" />
        <img src={filledHex} className="back" alt="blue-hex" />
      </div>
      <span>{tabInfo.title}</span>
    </li>
  );
};

export default NavigationItem;
