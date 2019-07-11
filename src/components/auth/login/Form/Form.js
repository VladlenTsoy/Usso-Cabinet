import React, {useState} from "react";
import {Button, Form, Icon, Input, Tooltip} from "antd";
import {Link} from "react-router-dom";
import {useStore} from "../../../../store/useStore";
import {API_CHANGE_ACCESS_TOKEN} from "../../../../store/api/reducer";

const LoginFormBlock = ({form}): React.FC => {
    const {getFieldDecorator} = form;
    const [state, dispatch] = useStore();
    const [showPwd, setShowPwd] = useState(false);
    const [loader, setLoader] = useState(false);

    const handleSubmit = (e): any => {
        e.preventDefault();
        form.validateFields(async (err, values) => {
            if (err) return;

            setLoader(true);
            try {
                const response = await state.api.guest.post("/login", values);
                dispatch({type: API_CHANGE_ACCESS_TOKEN, payload: response.data.token});
            } catch (e) {
            }
            setLoader(false);
        });
    };

    return <Form onSubmit={handleSubmit}>
        <Form.Item>
            {getFieldDecorator("email", {
                rules: [{
                    required: true,
                    message: `Пожалуйста, введите почту!`
                }],
            })(
                <Input placeholder="Введите логин или почту" type="email" prefix={<Icon type="user"/>}/>
            )}
        </Form.Item>
        <Form.Item>
            {getFieldDecorator("password", {
                rules: [{
                    required: true,
                    message: `Пожалуйста, введите пароль!`
                }],
            })(
                <Input placeholder="Введите пароль"
                       type={showPwd ? "text" : "password"}
                       suffix={
                           showPwd ?
                               <Tooltip placement="topLeft" title="Показать пароль">
                                   <Icon className="password-icon" theme="filled" type="eye"
                                         onClick={(): void => setShowPwd(!showPwd)}/>
                               </Tooltip> :
                               <Tooltip placement="topLeft" title="Скрыть пароль">
                                   <Icon className="password-icon" theme="filled"
                                         type="eye-invisible" onClick={(): void => setShowPwd(!showPwd)}/>
                               </Tooltip>
                       }
                       prefix={<Icon type="lock"/>}/>
            )}
        </Form.Item>
        <Form.Item>
            <Link to="/auth/forgot-password">Забыли пароль?</Link>
            <Button htmlType="submit" loading={loader} type="primary" block>
                Войти
            </Button>
        </Form.Item>
    </Form>;
};

export default Form.create({name: "login"})(LoginFormBlock);