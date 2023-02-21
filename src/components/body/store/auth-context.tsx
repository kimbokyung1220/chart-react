import React, { useState, useEffect, useCallback } from "react";
import * as authAction from './auth-action';

let logoutTimer: NodeJS.Timeout;

type Props = { children?: React.ReactNode }
type UserInfo = { memberid: string };
type LoginToken = {
    grantType: string,
    accessToken: string,
    tokenExpiresIn: number
}
// createContext는 각각의 컴포넌트에 포함되는 객체를 만드는 로직
const AuthContext = React.createContext({
    token: '',
    userObj: { memberid: '' },
    isLoggedIn: false,
    isSuccess: false,
    isGetSuccess: false,
    signup: (memberid: string, password: string) => { },
    login: (data: any) => { },
    logout: () => { },
    getUser: () => { }
});

//Context의 Provider 역할, 즉 Context의 변화를 알리는 Provider 컴포넌트를 반환하는 함수
export const AuthContextProvider: React.FC<Props> = (props) => {

        // authAction.retrieveStoredToken을 통해 token을 확인하는 함수를 실행하여 안의 값을 넣어줌
    // 만약 token값이 존재 => initialToken의 값은 tokenData의 token값
    const tokenData = authAction.retrieveStoredToken();

    let initialToken: any;
    if (tokenData) {
        initialToken = tokenData.token!;
    }

    const [token, setToken] = useState(initialToken);
    const [userObj, setUserObj] = useState({
        memberid: ''
    });

    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [isGetSuccess, setIsGetSuccess] = useState<boolean>(false);

    const userIsLoggedIn = !!token;


    // 회원가입을 하는 함수
    const signupHandler = (memberid: string, password: string) => {
        setIsSuccess(false);
        const response = authAction.signupActionHandler(memberid, password);
        response.then((result) => {
            if (result !== null) {
                setIsSuccess(true);
            }
        });
    }

    // 로그인 함수
    const loginHandler = (data: any) => {
        setIsSuccess(false);
        console.log("login함수 + isSuccess--------------");
        console.log(data)

        if(data !== null) {
            setToken(data.accessToken);
            localStorage.setItem('accessToken', token)
            //alert(token);
        }

    };

    // 먼저 이 함수는 이후 useEffect를 통해 토큰이 없어지면 자동으로 로그아웃을 실행하게 할 것이므로, 무한루프를 막기 위해 useCallback으로 감싸줌
    const logoutHandler = useCallback(() => {
        setToken('');
        authAction.logoutActionHandler();
        if (logoutTimer) {
            clearTimeout(logoutTimer);
        }
    }, []);

    // 
    const getUserHandler = () => {
        setIsGetSuccess(false);
        const data = authAction.getUserActionHandler(token);
        data.then((result) => {
            if (result !== null) {
                console.log('get user start!');
                const userData: UserInfo = result.data;
                setUserObj(userData);
                setIsGetSuccess(true);
            }
        })

    };

    // retrieveStoredToken로 받은 token값과, logoutHandler를 종속변수로 삼는 useEffect훅
    useEffect(() => {
        if (tokenData) {
            console.log(tokenData.duration);
            logoutTimer = setTimeout(logoutHandler, tokenData.duration);
        }
    }, [tokenData, logoutHandler]);

    useEffect(() => {
 
    }, [token]);


    const contextValue = {
        token,
        userObj,
        isLoggedIn: userIsLoggedIn,
        isSuccess,
        isGetSuccess,
        signup: signupHandler,
        login: loginHandler,
        logout: logoutHandler,
        getUser: getUserHandler
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext;