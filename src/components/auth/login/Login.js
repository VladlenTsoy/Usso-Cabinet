import React, {useState} from 'react';
import {Card, Col, Row, Typography, Form, Icon, Input, Tooltip, Button} from "antd";
import {Link} from 'react-router-dom';
import logo from '../../../assets/logo.svg';

const {Text} = Typography;

const Login = ({form}) => {
    const {getFieldDecorator} = form;
    const [showPwd, setShowPwd] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
    };

    return <Row type="flex" justify="center" align="middle" className="auth">
        <Col lg={6}>
            <Card>
                <img src={logo} alt="Usso Logo" className="logo"/>
                <Text type="secondary" className="title">Авторизация</Text>
                <Text type="secondary" className="sub-title">Если вы еще не зарегистрировались, пройдите <Link
                    to="/auth/registration">регистрацию для
                    входа</Link>.</Text>
                <Form onSubmit={handleSubmit}>
                    {/* Email */}
                    <Form.Item>
                        {getFieldDecorator('login', {
                            rules: [{
                                required: true, message: `Пожалуйста, введите логин или почту!`
                            }],
                        })(
                            <Input placeholder="Введите логин или почту"
                                   prefix={<Icon type="user"/>}/>
                        )}
                    </Form.Item>

                    {/* Password */}
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [{
                                required: true, message: `Пожалуйста, введите пароль!`
                            }],
                        })(
                            <Input placeholder="Введите пароль"
                                   type={showPwd ? 'text' : 'password'}
                                   suffix={
                                       showPwd ?
                                           <Tooltip placement="topLeft" title="Показать пароль">
                                               <Icon className="password-icon" theme="filled" type="eye"
                                                     onClick={() => setShowPwd(!showPwd)}/>
                                           </Tooltip> :
                                           <Tooltip placement="topLeft" title="Скрыть пароль">
                                               <Icon className="password-icon" theme="filled"
                                                     type="eye-invisible"
                                                     onClick={() => setShowPwd(!showPwd)}/>
                                           </Tooltip>
                                   }
                                   prefix={<Icon type="key"/>}/>
                        )}
                    </Form.Item>
                    <Form.Item>
                        <Link to="/auth/forgot-password">Забыли пароль?</Link>
                        <Button htmlType="submit" loading={loader} type="primary" block>
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
                <Button type="default" block icon="left">
                    Назад
                </Button>
            </Card>
        </Col>
    </Row>;
};

export default Form.create({name: 'login'})(Login);