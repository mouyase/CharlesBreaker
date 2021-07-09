import Axios from "axios";
import qs from "qs";


let axios = Axios.create({
})
axios.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
});

export default axios