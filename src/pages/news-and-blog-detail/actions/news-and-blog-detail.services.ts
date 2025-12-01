import axios from "axios";
import {IProducts} from "../../products/products";
import {INewsAndBlogDetail} from "../news-and-blog-detail";

export const getNewsAndBlogDetail = async (id: any): Promise<INewsAndBlogDetail> => {
    const response = await axios.get<INewsAndBlogDetail>(`http://localhost:4400/newsAndBlog/${id}`);
    console.log("Product Detail response:", response);
    console.log(response.data);
    return response.data;
};