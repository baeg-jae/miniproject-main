import axios from "axios";

export const api = axios.create({
    baseURL: "http://13.125.217.152/",
    headers: {
        "content-type": "application/json;charset=UTF-8",
        accept: "application/json,",
    },
});

api.interceptors.request.use(
    function (config) {
        const accessToken = document.cookie.split('=')[1];
        config.headers.common['X-AUTH-TOKEN'] = `${accessToken}`;
        console.log(config);
        return config;
    });

export const Axios = {

    // user
    login: (username, password) =>
        api.post('/api/login', {
            username: username,
            password: password,
        }),
    signup: (username, nickName, password) => //  
        api.post('/api/signup', { //
            username: username,
            nickName: nickName,
            password: password,
        }),
};