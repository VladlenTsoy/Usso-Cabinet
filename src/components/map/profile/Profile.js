import React, {useEffect, useState} from 'react';
import './Profile.less';
import logo from '../../../assets/logo.svg';
import {Avatar, Select} from "antd";
import {Link} from 'react-router-dom';

const {Option} = Select;

const ProfileBlock = () => {
    return <div className="profile-block">
        <div className="logo">
            <img src={logo} alt="Usso logo"/>
        </div>
        <div className="avatar-block">
            <Avatar size={40} icon="user"/>
            <div className="container">
                <div className="auth-profile-block">
                    <Link to="/auth">Авторизация</Link>
                </div>
                <div className="change-region">
                    <Select defaultValue="all" className="select-form">
                        <Option value="all" key="all">Все</Option>
                    </Select>
                </div>
            </div>
        </div>
    </div>;
};

export default ProfileBlock;