import {useNewsAndBlogQuery} from "./actions/news-and-blog.queries";
import {useEffect, useState} from "react";
import {Card, Col, Input, Pagination, Row, Spin} from "antd";
import newsPhoto from "assets/images/statics/news.jpg";
import computerPhoto from "assets/images/statics/computer.jpg";
import girlWithComputer from "assets/images/statics/girlWithComputer.jpg";
import {UseNewsAndBlogPageStyles} from "./news-and-blogPage.style";
import {SearchIcon} from "../../assets/images/icons/search-normal";
import {rem} from "../../assets/styles/abstracts/functions";
import useLocalization from "../../assets/lang";
import {Link} from "react-router-dom";
import {INewsAndBlogDetail} from "../news-and-blog-detail/news-and-blog-detail";

const NewsAndBlogPageComponent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12;
    const [filter, setFilter] = useState("");
    const translate = useLocalization();
    const classes = UseNewsAndBlogPageStyles();
    const {data: newsAndBlog, isLoading} = useNewsAndBlogQuery();
    const [isMobile, setMobile] = useState(false);
    useEffect(() => {
        if (newsAndBlog) {
            setDatas(newsAndBlog);
        }
    }, [newsAndBlog]);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    const [datas, setDatas] = useState<INewsAndBlogDetail[]>([]);
    const handleOnChangeEvent = (e: any) => {
        const value = e.target.value;
        setFilter(value);
        const filtered = newsAndBlog.filter((news: any) =>
            news.title.toLowerCase().includes(value.toLowerCase())
        );
        setDatas(filtered);
    };
    if (isLoading) {
        return <Spin tip="Loading..."/>;
    }


    const paginatedData = datas?.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );
    console.log(datas);
    console.log(newsAndBlog);
    console.log(paginatedData);





    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <div className={classes.newsAndBlog}>
                    <h1>{translate("news_and_blog")}</h1>

                    <div className={classes.newsAndBlogContainer}>
                        <div className={classes.search}>
                            <div className={classes.searchIcon}><SearchIcon/></div>
                            <Input
                                className={classes.searchInput}
                                placeholder={translate("news_search_placeholder")}
                                bordered={false}
                                onChange = {handleOnChangeEvent}
                            />

                        </div>
                    </div>
                </div>
                <Row gutter={[35, 35]}>
                    {paginatedData?.map((item) => (
                        <Link to={`http://localhost:3000/news/${item.id}`}>
                            <Col span={8} key={item.id}>
                                <Card className={classes.card}>
                                    <img
                                        src={item.id % 3 === 0 ? girlWithComputer : item.id % 3 === 1 ? newsPhoto : computerPhoto}
                                        className={classes.cardImage}
                                        alt={item.title || "News"}
                                    />
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                    {item.date && <div className={classes.date}>{item.date}</div>}
                                </Card>
                            </Col>
                        </Link>
                    ))}
                </Row>

                <div>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={newsAndBlog?.length || 0}
                        onChange={(page) => setCurrentPage(page)}
                        simple = {isMobile}
                        className ={classes.pagination}
                    />
                </div>
            </div>
        </div>
    );
};

export default NewsAndBlogPageComponent;