import React from "react";
import {Col, Row, Typography, Button} from "antd";
import {Link} from "react-router-dom";
import logo from "../../../assets/logo.svg";
import LoginFormBlock from "./Form/Form";

const {Text} = Typography;

const Login = (): React.FC => {
    return <Row type="flex" align="middle" className="auth">
        <Col lg={12} offset={6}>
            <img src={logo} alt="Usso Logo" className="logo"/>
            <Text type="secondary" className="title">Авторизация</Text>
            <Text type="secondary" className="sub-title">Если вы еще не зарегистрировались, пройдите <Link
                to="/auth/registration">регистрацию для
                входа</Link>.</Text>
            <Button type="default" block icon="left">
                Назад
            </Button>
        </Col>
        <Col lg={6} offset={6}>
            <LoginFormBlock/>
        </Col>
        <Col lg={6}>

        </Col>
    </Row>;
};

export default Login;