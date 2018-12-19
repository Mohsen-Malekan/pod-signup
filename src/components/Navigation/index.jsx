import React from "react";
import NavigationItem from "./NavigationItem";
import tabs from "./tabs";

const Navigation = props => {
  return (
    <nav className="form-steps">
      <ul>
        {tabs.map(tab => (
          <NavigationItem
            key={tab.step}
            tabInfo={tab}
            currentTab={props.current}
          />
        ))}
      </ul>
      <div className="line" />
    </nav>
  );
};

export default Navigation;
