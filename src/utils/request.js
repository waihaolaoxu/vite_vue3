import axios from "axios";

let request = axios.create({
    baseURL: "/api/zf/",
    timeout: 30000
});

// 添加请求拦截器
request.interceptors.request.use(
    function (config) {
        return config;
    }
);

// 添加响应拦截器
request.interceptors.response.use(
    function (res) {
        return res.data;
    }
);


export {
    request
}
