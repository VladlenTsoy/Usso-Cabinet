import React from 'react';
import './Auth.less';
import {Card, Col, Row, Typography} from "antd";
import logo from '../../assets/logo.svg';

const {Text} = Typography;

const Auth = () => {
    return <Row type="flex" justify="center" align="middle" className="auth">
        <Col lg={6}>
            <Card>
                <img src={logo} alt="Usso Logo" className="logo"/>
                <Text type="secondary" className="sub-title">Система подбора конструкций наружной рекламы по
                    Узбекистану.</Text>
            </Card>
        </Col>
    </Row>;
};

export default Auth;