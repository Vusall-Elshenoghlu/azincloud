import {useQuery} from "react-query";
import {getProducts} from "./products.service";
export const useProductsQuery = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: getProducts,
    });
};