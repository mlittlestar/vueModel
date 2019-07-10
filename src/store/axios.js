import axios from 'axios'
// import qs from 'qs'
//配置
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.baseURL = 'http://203.195.251.185:8282/';
//axios.defaults.baseURL = 'http://127.0.0.1:8080/';
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data,{ allowDots: true });
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axios;