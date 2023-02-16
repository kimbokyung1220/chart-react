import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const AppBodyComponent = () => {
    const onFinish = (values: any) => {
        console.log('Success:', values);
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
                    onFinish={onFinish}
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
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </>
    )
}
export default AppBodyComponent;