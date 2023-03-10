import React, { useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import AuthContext from './store/auth-context';
import { Navigate } from 'react-router-dom';
import { TokenClass } from 'typescript';

const AppBodyComponent = () => {

    const authCtx = useContext(AuthContext);

    // [ Login 버튼 클릭 ]
    const loginEvent = (values: any) => {
        const url = "http://localhost:8080/api/login";
        const data = {
            'memberid': values.ID,
            'password': values.PW
        };
        // const config = { "Content-Type": 'application/json' };
        // useContext에서 로그인함수 호출 => localStorage에 토큰값 set
        axios.post(url, data)
            .then(res => {
                // 로그인

                authCtx.login(res.data)

            })
            .catch(erro => {
                console.log("회원가입이 되어 있지 않습니다")
            })
            .then(() => {
                // always executed

            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <div>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    initialValues={{ remember: true }}
                    onFinish={loginEvent}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                    style={{ float: 'left' }}
                >
                    <Form.Item
                        label="ID"
                        name="ID"
                        rules={[{ required: true, message: 'ID를 입력해 주세요! :D' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="PW"
                        name="PW"
                        rules={[{ required: true, message: '비밀번호를 입력해 주세요! :D' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="primary" htmlType="submit" >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default AppBodyComponent;