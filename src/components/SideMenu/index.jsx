import React from "react";

import "./style.less";

const SideMenu = props => {
    const { resources, show } = props;
    return (
        <div className={show ? "c-SideMenu" : "c-SideMenu-Expanded"}>
            {resources &&
                resources.map((resource, index) => {
                    return (
                        <div className="c-SideMenu-Entry" key={index}>
                            {resource.name}
                        </div>
                    );
                })}
        </div>
    );
};

export default SideMenu;
