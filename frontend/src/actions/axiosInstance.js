// // import axios from 'axios';

// // const apiURL = process.env.REACT_APP_API_URL;

// // const axiosInstance = axios.create({
// //     baseURL: apiURL,
// //     withCredentials: true,
// //     headers: {
// //         "Content-Type": "application/json",
// //     },
// // });

// // export default axiosInstance;


// import axios from 'axios';

// const apiURL = process.env.REACT_APP_API_URL;

// const axiosInstance = axios.create({
//     baseURL: apiURL,
//     withCredentials: true,
//     headers: {
//         "Content-Type": "application/json",
//     },
// });

// // Intercept request to add token
// axiosInstance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('token');
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// export default axiosInstance;

// axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://portfolio-i6fi.onrender.com',
    withCredentials: true, // This ensures cookies are sent with requests
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default axiosInstance;

