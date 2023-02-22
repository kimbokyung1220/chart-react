import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import AuthContext from './store/auth-context';

const HomeBodyComponent = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <div style={{marginTop: '50px'}}>
                <h1> Welcome ~~~~~ 🍀 </h1>
            </div>
        
        </>
    )
}
export default HomeBodyComponent;