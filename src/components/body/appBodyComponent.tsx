import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import qs from 'qs';

const AppBodyComponent = () => {
    const loginEvent = (values: any) => {
        console.log('Success:', values);

        axios({
            method: 'POST',
            url: 'http://localhost:8080/common/login', // 확인 필요 => emv파일로 common으로 사용
            // responseType: 'From'
            data: qs.stringify({
                userid: values.ID,
                password: values.PW
            }),
            // json > From
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        .then((response) => {
            const data = response.data
            console.log(data)

        })
        .catch((error) => {
            console.log(error);
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