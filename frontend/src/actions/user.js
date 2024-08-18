// import axiosInstance from './axiosInstance';

// export const getUser = () => async (dispatch) => {
//     try {
//         dispatch({ type: "GET_USER_REQUEST" });
//         const { data } = await axiosInstance.get("/api/v1/user");
//         dispatch({
//             type: "GET_USER_SUCCESS",
//             payload: data.user,
//         });
//     } catch (error) {
//         dispatch({
//             type: "GET_USER_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// // export const login = (email, password) => async (dispatch) => {
// //     try {
// //         dispatch({ type: "LOGIN_REQUEST" });
// //         const { data } = await axiosInstance.post("/api/v1/login", { email, password });
// //         dispatch({
// //             type: "LOGIN_SUCCESS",
// //             payload: data.message,
// //         });
// //     } catch (error) {
// //         dispatch({
// //             type: "LOGIN_FAILURE",
// //             payload: error.response?.data?.message || error.message,
// //         });
// //     }
// // };

// export const login = (email, password) => async (dispatch) => {
//     try {
//         dispatch({ type: "LOGIN_REQUEST" });
//         const { data } = await axiosInstance.post("/api/v1/login", { email, password });
//         localStorage.setItem('token', data.token); // Store token in localStorage
//         dispatch({
//             type: "LOGIN_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "LOGIN_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };



// export const logout = () => async (dispatch) => {
//     try {
//         dispatch({ type: "LOGOUT_REQUEST" });
//         const { data } = await axiosInstance.get("/api/v1/logout");
//         dispatch({
//             type: "LOGOUT_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "LOGOUT_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const loadUser = () => async (dispatch) => {
//     try {
//         dispatch({ type: "LOAD_USER_REQUEST" });
//         const { data } = await axiosInstance.get("/api/v1/me");
//         dispatch({
//             type: "LOAD_USER_SUCCESS",
//             payload: data.user,
//         });
//     } catch (error) {
//         dispatch({
//             type: "LOAD_USER_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
//     try {
//         dispatch({ type: "UPDATE_USER_REQUEST" });
//         const { data } = await axiosInstance.put("/api/v1/admin/update", { name, email, password, skills, about });
//         dispatch({
//             type: "UPDATE_USER_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "UPDATE_USER_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const addTimeline = (title, description, date) => async (dispatch) => {
//     try {
//         dispatch({ type: "ADD_TIMELINE_REQUEST" });
//         const { data } = await axiosInstance.post("/api/v1/admin/timeline/add", { title, description, date });
//         dispatch({
//             type: "ADD_TIMELINE_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "ADD_TIMELINE_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const deleteTimeline = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: "DELETE_TIMELINE_REQUEST" });
//         const { data } = await axiosInstance.delete(`/api/v1/admin/timeline/${id}`);
//         dispatch({
//             type: "DELETE_TIMELINE_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "DELETE_TIMELINE_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const addProject = (url, title, image, description, techStack) => async (dispatch) => {
//     try {
//         dispatch({ type: "ADD_PROJECT_REQUEST" });
//         const { data } = await axiosInstance.post("/api/v1/admin/project/add", { url, title, image, description, techStack });
//         dispatch({
//             type: "ADD_PROJECT_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "ADD_PROJECT_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const deleteProject = (id) => async (dispatch) => {
//     try {
//         dispatch({ type: "DELETE_PROJECT_REQUEST" });
//         const { data } = await axiosInstance.delete(`/api/v1/admin/project/${id}`);
//         dispatch({
//             type: "DELETE_PROJECT_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "DELETE_PROJECT_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };

// export const contactUs = (name, email, message) => async (dispatch) => {
//     try {
//         dispatch({ type: "CONTACT_US_REQUEST" });
//         const { data } = await axiosInstance.post("/api/v1/contact", { name, email, message });
//         dispatch({
//             type: "CONTACT_US_SUCCESS",
//             payload: data.message,
//         });
//     } catch (error) {
//         dispatch({
//             type: "CONTACT_US_FAILURE",
//             payload: error.response?.data?.message || error.message,
//         });
//     }
// };


import axiosInstance from './axiosInstance';

export const getUser = () => async (dispatch) => {
    try {
        dispatch({ type: "GET_USER_REQUEST" });
        const { data } = await axiosInstance.get("/api/v1/user");
        dispatch({
            type: "GET_USER_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "GET_USER_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: "LOGIN_REQUEST" });
        const { data } = await axiosInstance.post("/api/v1/login", { email, password });
        localStorage.setItem('token', data.token); // Store token in localStorage
        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGIN_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const logout = () => async (dispatch) => {
    try {
        dispatch({ type: "LOGOUT_REQUEST" });
        localStorage.removeItem('token'); // Remove token from localStorage
        const { data } = await axiosInstance.get("/api/v1/logout");
        dispatch({
            type: "LOGOUT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "LOGOUT_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const loadUser = () => async (dispatch) => {
    try {
        dispatch({ type: "LOAD_USER_REQUEST" });
        const { data } = await axiosInstance.get("/api/v1/me");
        dispatch({
            type: "LOAD_USER_SUCCESS",
            payload: data.user,
        });
    } catch (error) {
        dispatch({
            type: "LOAD_USER_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const updateUser = (name, email, password, skills, about) => async (dispatch) => {
    try {
        dispatch({ type: "UPDATE_USER_REQUEST" });
        const { data } = await axiosInstance.put("/api/v1/admin/update", { name, email, password, skills, about });
        dispatch({
            type: "UPDATE_USER_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "UPDATE_USER_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const addTimeline = (title, description, date) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_TIMELINE_REQUEST" });
        const { data } = await axiosInstance.post("/api/v1/admin/timeline/add", { title, description, date });
        dispatch({
            type: "ADD_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_TIMELINE_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const deleteTimeline = (id) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_TIMELINE_REQUEST" });
        const { data } = await axiosInstance.delete(`/api/v1/admin/timeline/${id}`);
        dispatch({
            type: "DELETE_TIMELINE_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_TIMELINE_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const addProject = (url, title, image, description, techStack) => async (dispatch) => {
    try {
        dispatch({ type: "ADD_PROJECT_REQUEST" });
        const { data } = await axiosInstance.post("/api/v1/admin/project/add", { url, title, image, description, techStack });
        dispatch({
            type: "ADD_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "ADD_PROJECT_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const deleteProject = (id) => async (dispatch) => {
    try {
        dispatch({ type: "DELETE_PROJECT_REQUEST" });
        const { data } = await axiosInstance.delete(`/api/v1/admin/project/${id}`);
        dispatch({
            type: "DELETE_PROJECT_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "DELETE_PROJECT_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

export const contactUs = (name, email, message) => async (dispatch) => {
    try {
        dispatch({ type: "CONTACT_US_REQUEST" });
        const { data } = await axiosInstance.post("/api/v1/contact", { name, email, message });
        dispatch({
            type: "CONTACT_US_SUCCESS",
            payload: data.message,
        });
    } catch (error) {
        dispatch({
            type: "CONTACT_US_FAILURE",
            payload: error.response?.data?.message || error.message,
        });
    }
};

