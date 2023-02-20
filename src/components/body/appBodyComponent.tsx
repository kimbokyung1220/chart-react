import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import qs from 'qs';
import { config } from 'process';

const AppBodyComponent = () => {
    const loginEvent = (values: any) => {
        console.log('Success:', values);

        const url = "http://localhost:8080/api/login";
        const data = {
            'memberid': values.ID,
            'password': values.PW
        };
        // const config = { "Content-Type": 'application/json' };

        axios.post(url, data)
            .then(res => {
                // handle success
                console.log("res");
                console.log(res);
            })
            .catch(erro => {
                // handle error
                console.log("erro");
                console.log(erro);
            })
            .then(() => {
                // always executed
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    // 로그인 event

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