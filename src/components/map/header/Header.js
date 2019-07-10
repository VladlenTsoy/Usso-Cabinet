import React from "react";
import "./Header.less";
import {Avatar} from "antd";
import logo from "../../../assets/logo.svg";

const HeaderMapBlock = (): React.FC => {
    return <div className="profile-block">
        <div className="logo">
            <img src={logo} alt="Usso logo"/>
        </div>
        <div className="avatar-block">
            <Avatar size={40} icon="user"/>
        </div>
    </div>;
};

export default HeaderMapBlock;