import './header.style';
import HeaderNavbarComponent from '../header-navbar/header-navbar.component';
import navBarBg from '/src/assets/images/statics/navBarBg.png';
import subNavbarBg from '/src/assets/images/statics/subNavbarBg.png';
import {useHeaderStyles} from './header.style';
import {Swiper, SwiperSlide} from 'swiper/react';
import {A11y, Pagination} from 'swiper/modules';
import swiperCloud from '/src/assets/images/statics/swiper-cloud.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay} from 'swiper/modules';
import useLocalization from '../../../../../assets/lang';
import {useLocation} from 'react-router-dom';

const HeaderComponent = () => {
    const classes = useHeaderStyles();
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const translate = useLocalization();

    return (
        <div>

                <HeaderNavbarComponent/>
            {isHomePage && (
                <div style={{position: 'relative'}}>
                    <img className={classes.navBarBg} src={navBarBg || "/placeholder.svg"} alt={'logo'}/>
                    <img className={classes.subNavbar} src={subNavbarBg || "/placeholder.svg"} alt='subNavbarBg'/>
                    <div className={`${classes.swiperContainer}`}>
                        <div className={classes.swiperTextSection}>
                            <div className={classes.swiperWrapper}>
                                <Swiper
                                    modules={[A11y, Pagination, Autoplay]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    pagination={{clickable: true}}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                    style={{height: 'auto'}}
                                >
                                    <SwiperSlide style={{height: 'auto', display: 'flex'}}>
                                        <div className={classes.slideContent}>
                                            <h1 className={classes.mainTitle}>
                                                {translate('cloud')}<br/>
                                                {translate('csp')}
                                            </h1>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{height: 'auto', display: 'flex'}}>
                                        <div className={classes.slideContent}>
                                            <h1 className={classes.mainTitle}>
                                                {translate('cloud')}<br/>
                                                {translate('csp')}
                                            </h1>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide style={{height: 'auto', display: 'flex'}}>
                                        <div className={classes.slideContent}>
                                            <h1 className={classes.mainTitle}>
                                                {translate('cloud')}<br/>
                                                {translate('csp')}
                                            </h1>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                        <div className={classes.swiperImageSection}>
                            <div className={classes.swiperCloudImg}>
                                <img src={swiperCloud || "/placeholder.svg"} alt='swiper-cloud'/>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default HeaderComponent;
