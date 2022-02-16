import axios from 'axios';
import store from './store';
import router from './router';

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL
})
axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = store.state.user.token;
    return config
})
axiosClient.interceptors.response.use(response => {
    return response
}, error => {
    if (error.response.status === 401) {
        store.commit('logout');
        router.push({
            name: "Login"
        });
    } else if (error.response.status === 404) {
        router.push({
            name: "NotFound"
        });
    }
    return Promise.reject(error);
})

export default axiosClient;
