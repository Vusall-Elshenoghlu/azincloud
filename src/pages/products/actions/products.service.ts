import {IProducts} from "../products";
import axiosInstance from "../../../core/configs/axios.config";
import axios from "axios";
import {API} from "../../../core/configs/api.config";

export const getProducts = async (): Promise<any> => {
    const response = await axiosInstance.get<IProducts[]>(API.products);
    console.log("Products response:", response);
    return response.data;
};