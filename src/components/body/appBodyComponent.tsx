import React, { useContext, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from "axios";
import AuthContext from './store/auth-context';
import { Navigate   } from 'react-router-dom';
import { TokenClass } from 'typescript';

const AppBodyComponent = () => {
    const [token, setToken] = useState("");

console.log("login 호출111")
    const onClickImg = () => {
        return <Navigate to="/home" />;
      }

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
                console.log("login 호출")
                // authCtx.login(res.data)
                if(res.data !== null) {
                    localStorage.setItem('accessToken', res.data.accessToken)
                    
                   setToken(res.data.accessToken)
                }
                

            })
            .catch(erro => {
                // handle error
                console.log("handle error");
                console.log(erro);
            })
            .then(() => {
                // always executed
               
            });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    useEffect(() => {
        if(token !== undefined) {
            console.log(token)
           
        }
    },[token])

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