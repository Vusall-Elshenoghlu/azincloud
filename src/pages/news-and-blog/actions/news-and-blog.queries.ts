import {getNewsAndBlog} from "./news-and-blog.service";
import {useQuery} from "react-query";

export const useNewsAndBlogQuery = () => {
    return useQuery({
        queryKey: ["newsAndBlogsQuery"],
        queryFn: getNewsAndBlog,
    });
};