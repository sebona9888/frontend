import axios from "axios";

const API = "http://localhost:5000/api/admin";

export const loginAdmin = (data) => {
    return axios.post(`${API}/login`, data);
};

export const getMe = (token) => {
    return axios.get(`${API}/me`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
};