import React from "react";
import "./Header.less";
import {Avatar, Icon, Button} from "antd";
import logo from "../../../assets/logo.svg";

const HeaderMapBlock = (): React.FC => {
    return <div className="profile-block">
        <div className="back-block">
                <Icon type="arrow-left" />
        </div>
        <div className="logo">
            <img src={logo} alt="Usso logo"/>
        </div>
        <div className="avatar-block">
            <Avatar size={40} icon="user"/>
            <Button>Войти</Button>
        </div>
    </div>;
};

export default HeaderMapBlock;