import { useNewsAndBlogDetailQuery } from "./actions/news-and-blog-detail.queries";
import {Link, useParams} from "react-router-dom";
import {useNewsAndBlogDetailStyles} from "./news-and-blog-detail.style";
import {rem} from "../../assets/styles/abstracts/functions";
import {ArrowSmallLeft} from "../../assets/images/icons/arrows";
import useLocalization from "../../assets/lang";
import girlWithComputer from "../../assets/images/statics/girlWithComputer.jpg";
import newsPhoto from "../../assets/images/statics/news.jpg";
import computerPhoto from "../../assets/images/statics/computer.jpg";
import {Card} from "antd";
import {INewsAndBlogDetail} from "./news-and-blog-detail";

const NewsAndBlogDetailComponent = () => {
    const classes = useNewsAndBlogDetailStyles();
    const { id } = useParams<{ id: any }>();
    const translate = useLocalization();
    const { data: newsAndBlogDetail, isLoading } = useNewsAndBlogDetailQuery(id);
    console.log(id);
    console.log(newsAndBlogDetail);
    if (isLoading) return <p>Yüklənir...</p>;

    return (
        <div className={classes.container}>
            <Link to={"/news"}>
                <div className={classes.backAndIcon}>
                    <div className={classes.icon}>
                        <div className={classes.arrow}><ArrowSmallLeft/></div>
                    </div>
                    <h4 style={{marginTop:rem(10), color:"#2BAAE2"}}>{translate("back")}</h4>
                </div>
            </Link>
            <div className={classes.news}>
                {
                        <div className={classes.card}>
                            <h1>{newsAndBlogDetail?.title}</h1>
                            {newsAndBlogDetail?.date && <div className={classes.date}>{newsAndBlogDetail.date}</div>}
                            <img
                                src={
                                    ((newsAndBlogDetail?.id ?? 0) % 3) === 0
                                        ? girlWithComputer
                                        : ((newsAndBlogDetail?.id ?? 0) % 3) === 1
                                            ? newsPhoto
                                            : computerPhoto
                                }
                                className={classes.cardImage}
                                alt={newsAndBlogDetail?.title || "News"}
                            />
                            <p>{newsAndBlogDetail?.content}</p>

                        </div>

                }
            </div>
        </div>
    );
};

export default NewsAndBlogDetailComponent;
