import {getNewsAndBlogDetail} from "./news-and-blog-detail.services";
import {useQuery} from "react-query";

export const useNewsAndBlogDetailQuery = (id: any) => {
    return useQuery({
        queryKey: ["newsAndBlogDetail", id],
        queryFn: () => getNewsAndBlogDetail(id),
        enabled: !!id
    });
};

// queryKey: ["newsAndBlogDetailQuery", id],
//     queryFn: getNewsAndBlogDetail(id),
//     enabled: !id