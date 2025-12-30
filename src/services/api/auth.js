import api from "./index";

export const login = async (data) => {
    return await api.post("/auth/login", data);
}

export const forgotPassword = async (data) => {
    return await api.post("/auth/forgot-password", data);
}

export const resetPassword = async (token, data) => {
  return await api.put(`/auth/reset-password/${token}`, data);
};