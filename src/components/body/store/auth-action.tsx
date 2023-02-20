import { GET, POST } from "./fetch-auth-action";

// 토큰을 만드는 함수이며, auth-action.ts내부에서만 사용
const createTokenHeader = (token: string) => {
    return {
        headers: {
            'Authorization': 'Bearer ' + token
        }
    }
}

// 토큰의 만료시간을 계산하는 함수이며, auth-action.ts내부에서만 사용
const calculateRemainingTime = (expirationTime: number) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
};

// 토큰값과 만료시간을 부여받으면 그것을 localStorage내부에 저장
export const loginTokenHandler = (token: string, expirationTime: number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));

    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
}

//localStorage내부에 토큰이 존재하는지 검색하는 함수
// 만약 존재한다면, 만료까지 남은 시간과 토큰값을 같이 객체로 반환
export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';

    const remaingTime = calculateRemainingTime(+ storedExpirationDate);

    // 만약 시간이 1초 아래로 남았으면 자동으로 토큰을 삭제
    if (remaingTime <= 1000) {
        localStorage.removeItem('token');
        localStorage.removeItem('expirationTime');
        return null
    }

    return {
        token: storedToken,
        duration: remaingTime
    }
}

// 회원가입 URL로 POST 방식으로 호출하는 함수
// 반환타입: Promise<AxiosResponse<any, any> | null>
export const signupActionHandler = (memberid: string, password: string) => {
    const URL = '/api/signup'
    const signupObject = { memberid, password };

    const response = POST(URL, signupObject, {});
    return response;
};

// 로그인 URL을 POST방식으로 호출
export const loginActionHandler = (memberid: string, password: string) => {
    const URL = '/api/login';
    const loginObject = { memberid, password };
    const response = POST(URL, loginObject, {});

    return response;
};

// 로그아웃을 해주는 함수로, localStorage에 저장된 토큰과 만료시간을 삭제
export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
};

// 유저의 정보를 GET방식으로 호출하는 함수 => 토큰값을 헤더에 넣고 호출
export const getUserActionHandler = (token: string) => {
    const URL = '/member/me';
    const response = GET(URL, createTokenHeader(token));
    return response;
}