import React, { useState } from "react";
import { Icon } from "antd";

import "./style.less";

const SideMenu = props => {
    const [currentResource, setCurrentResource] = useState("Dashboard");
    const { resources, show } = props;
    return (
        <div className={show ? "c-SideMenu-Expanded" : "c-SideMenu"}>
            {resources &&
                resources.map((resource, index) => {
                    return (
                        <div
                            className={
                                currentResource === resource.name
                                    ? "c-SideMenu-Entry-Selected"
                                    : "c-SideMenu-Entry"
                            }
                            key={index}
                            onClick={() => {
                                setCurrentResource(resource.name);
                            }}
                        >
                            <span className="c-SideMenu-Icon">
                                <Icon type={resource.icon} />
                            </span>
                            {show ? resource.name : ""}
                        </div>
                    );
                })}
        </div>
    );
};

export default SideMenu;
