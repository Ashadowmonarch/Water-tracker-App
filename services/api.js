import axois from "axios";

const BASE_URL = "http://10.0.0.250:8000/api/";
const axoisInstance = axois.create({ baseURL: BASE_URL });

export const getAllProducts = async () => {
  return (await axoisInstance.get("products/")).data;
};

export const getSingleProduct = async (id) => {
  return (await axoisInstance.get(`products/${id}/`)).data;
};

export const postProduct = async (data) => {
  await axoisInstance.post("products/create/", data);
};

export const updateProduct = async (id, data) => {
  await axoisInstance.put(`products/update/${id}/`, data);
};

export const deleteProduct = async (id) => {
  await axoisInstance.delete(`products/delete/${id}/`);
};

export const registerUser = async (userData) => {
  const response = await axoisInstance.post(`register/`, userData);
  return response.data;
};

// Login user API call
export const loginUser = async (credentials) => {
  const response = await axoisInstance.post(`token/`, credentials);
  localStorage.setItem("access_token", response.data.access);
  localStorage.setItem("refresh_token", response.data.refresh);
  return response.data;
};

// Set Authorization token for Axios requests
export const setAuthToken = (token) => {
  if (token) {
    axoisInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axoisInstance.defaults.headers.common["Authorization"];
  }
};
