import React from "react";
import { Icon } from "antd";

import "./style.less";

const SideMenu = props => {
    const { current, menuWidth, resources, setCurrent, setCurrentRoot } = props;
    return (
        <div className={"c-SideMenu"} style={{ width: menuWidth }}>
            {resources &&
                resources.map((resource, index) => {
                    return (
                        <div
                            className={
                                current === resource.name
                                    ? "c-SideMenu-Entry-Selected"
                                    : "c-SideMenu-Entry"
                            }
                            key={index}
                            onClick={() => {
                                setCurrentRoot(resource.name);
                                setCurrent(resource.name);
                            }}
                        >
                            <span className="c-SideMenu-Icon">
                                <Icon type={resource.icon} />
                            </span>
                            <span className="c-SideMenu-Label">
                                {resource.name}
                            </span>
                        </div>
                    );
                })}
        </div>
    );
};

export default SideMenu;
