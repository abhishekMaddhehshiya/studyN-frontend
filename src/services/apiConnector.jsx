import axios from "axios";
import { API_BASE_URL } from "./apiEndpoints";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const apiConnector = async (method, endpoint, data= null , headers = {}, params) => {   
    try {
        const response = await axios({
            method: method,     
            url: `${API_BASE_URL}${endpoint}`,
            data: data? data : null,
            headers: headers? headers : {},
            params: params? params : null,
        });
        return response.data;
    } catch (error) {
        console.error("API Error:", error);
        throw error;
    }       
};

