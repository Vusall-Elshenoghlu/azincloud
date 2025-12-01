import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {useSearchStyles} from "./search.style";
import useLocalization from "../../assets/lang";
import {SearchIcon} from "../../assets/images/icons/search-normal";
import {rem} from "../../assets/styles/abstracts/functions";
import { ArrowSmallRight} from "../../assets/images/icons/arrows";
import {ISearchValues} from "./search";
import {SearchPageIcon} from "../../assets/images/icons/search-page-icon";

const dummyData = [
    {id: 1, title: "News and blogs", content: "Pay Lorem Ipsum..."},
    {id: 2, title: "Product and Services", content: "Pay when printer..."},
    {id: 3, title: "About us", content: "Lorem Pay Ipsum..."},
];

const SearchComponent = () => {
    const {search} = useLocation();
    const query = new URLSearchParams(search).get("q");
    const [filtered, setFiltered] = useState<ISearchValues[]>([]);
    const classes = useSearchStyles();
    const translate = useLocalization();
    const dinamicContent = (text: any, query: any) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, "gi");
        const parts = text.split(regex);

        return parts.map((part: any, index: any) =>
            part.toLowerCase() === query.toLowerCase() ? (
                <span key={index} style={{color:"#2BAAE2"}}>{part}</span>
            ) : (
                <span key={index}>{part}</span>
            )
        );
    };

    useEffect(() => {
        if (query) {
            const result = dummyData.filter(
                (item) =>
                    item.title.toLowerCase().includes(query.toLowerCase()) ||
                    item.content.toLowerCase().includes(query.toLowerCase())
            );
            setFiltered(result);
        }
    }, [query]);



    return (
        <div className={classes.container}>
            <h1>{translate("search_result")}</h1> <br/> <br/>
            <div className={classes.searchContainer}>
                <div style={{display: "flex", gap:rem(10)}}>
                    <SearchIcon/>
                    <p style={{marginTop: rem(5)}}>{filtered.length} {translate("result_fond")}:</p> <span style={{marginTop: rem(5), color:"#2BAAE2", fontWeight: "bold"}}>“{query}”</span>
                </div>
                <br/>
                <div className={classes.line}></div>

                {filtered.length > 0 ? (
                    filtered.map((item) => (
                        <div key={item.id} className={classes.results}>
                            <div style={{display: "flex", gap: rem(10)}}>
                                <h4>{item.title}</h4>
                                <ArrowSmallRight/>
                            </div>

                            <p>{dinamicContent(item.content, query)}</p>
                            <div className={classes.line}></div>
                        </div>
                    ))
                ) : (
                    <div style={{textAlign: "center", marginTop: rem(40),}}>
                        <SearchPageIcon/> <br/>    <br/>
                        <p style={{fontSize: rem(16), color: "#999"}}>{translate("we_found")}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SearchComponent;
