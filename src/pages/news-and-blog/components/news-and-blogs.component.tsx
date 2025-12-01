import {useNewsAndBlogStyles} from "./news-and-blog.style";
import {ArrowLeft, ArrowRight} from "../../../assets/images/icons/arrows";
import {useNewsAndBlogQuery} from "../actions/news-and-blog.queries";
import {Card, Spin} from "antd";
import newsPhoto from "assets/images/statics/news.jpg";
import {Swiper, SwiperSlide} from "swiper/react";
import {Swiper as SwiperClass} from "swiper";
import {A11y, Navigation} from "swiper/modules";
import {useRef} from "react";
import 'swiper/css';
import 'swiper/css/navigation';
import useLocalization from "../../../assets/lang";
import {Link} from "react-router-dom";
import {Routes} from "../../../router/routes";

const NewsAndBlogsComponent = () => {
    const classes = useNewsAndBlogStyles();
    const {data: newsAndBlog = [], isLoading} = useNewsAndBlogQuery();
    const prevRef = useRef<HTMLDivElement | null>(null);
    const nextRef = useRef<HTMLDivElement | null>(null);

    const translate = useLocalization();

    return (
        <div className={'container'}>
            <div className={`${classes.container}`}>
                <div className={classes.newsAndBlog}>
                    <h1>{translate("news_and_blog")}</h1>
                    <div className={classes.arrows}>
                        <div ref={prevRef}>
                            <ArrowLeft/>
                        </div>
                        <div ref={nextRef}>
                            <ArrowRight/>
                        </div>
                    </div>
                    <Link to={Routes.news}><h2>{translate("more")}</h2></Link>
                </div>

                {isLoading ? (
                    <Spin size="large" style={{margin: "auto"}}/>
                ) : (
                    <Swiper
                        modules={[A11y, Navigation]}
                        className={classes.swiperContainer}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={newsAndBlog.length > 3}

                        onSwiper={(swiper: SwiperClass) => {
                            setTimeout(() => {
                                if (swiper.params.navigation) {
                                    //@ts-ignore
                                    swiper.params.navigation.prevEl = prevRef.current;
                                    //@ts-ignore
                                    swiper.params.navigation.nextEl = nextRef.current;
                                    swiper.navigation.destroy();
                                    swiper.navigation.init();
                                    swiper.navigation.update();
                                }
                            });
                        }}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 20
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 25
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 0
                            },
                        }}
                    >
                        {newsAndBlog.map((item: any, index: any) => (
                            <SwiperSlide key={index}>
                                <Link to={`/news/${item.id}`}>
                                    <Card className={classes.card} bordered={false}>
                                        <img
                                            src={newsPhoto}
                                            className={classes.cardImage}
                                            alt={item.title || "News"}
                                        />
                                        <h4>{item.title}</h4>
                                        <p>{item.content}</p>
                                        {item.date && <div className="date">{item.date}</div>}
                                    </Card>
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                )}
            </div>
        </div>
    );
};

export default NewsAndBlogsComponent;
