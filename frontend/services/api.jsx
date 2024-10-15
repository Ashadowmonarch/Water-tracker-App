import axios from "axios";

const BASE_URL = "http://10.0.0.250:8000/api/";
const axiosInstance = axios.create({ baseURL: BASE_URL });

export const getAllWater = async () => {
  return (await axiosInstance.get("water/")).data;
};

export const postWaterDetail = async (data) => {
  await axiosInstance.post("waterCreate/", data);
};
