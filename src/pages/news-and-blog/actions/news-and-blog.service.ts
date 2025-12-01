import axios from "axios";
import {INewsAndBlog} from "../news-and-blog";
import {IProducts} from "../../products/products";
import {API} from "../../../core/configs/api.config";
import axiosInstance from "../../../core/configs/axios.config";

export const getNewsAndBlog = async (): Promise<any> => {
    const response = await axiosInstance.get<INewsAndBlog[]>(API.news);
    console.log("Products response:", response);
    return response.data;
};