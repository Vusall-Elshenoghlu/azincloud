import {Swiper, SwiperSlide} from 'swiper/react';
import {usePartnersStyles} from './techPartners.style';
import {A11y, Navigation, Autoplay} from 'swiper/modules';
import core from '/src/assets/images/statics/core.png';
import vmware from '/src/assets/images/statics/vmware.png';
import googleCloud from '/src/assets/images/statics/googleCloud.png';
import alibabaCloud from '/src/assets/images/statics/alibabaCloud.png';
import cloudMask from '/src/assets/images/statics/cloudMask.png';
import partnersSectionLogo from '/src/assets/images/statics/partners-section-logo.png';
import ibm from '/src/assets/images/statics/ibm.png';
import oracle from '/src/assets/images/statics/oracle.png';
import aws from '/src/assets/images/statics/aws.png';
import microsoftAzure from '/src/assets/images/statics/microsoftAzure.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useLocalization from "../../../../assets/lang";

const TechPartnersComponent = () => {
    const classes = usePartnersStyles();
    const translate = useLocalization();
    return (
        <div className={'container'}>
            <div className={classes.techPartnersSection}>
                <div className={classes.leftContainer}>
                    <h2 className={classes.partnersTitle}>{translate("tech_partners")}</h2>
                    <div className={classes.swiperContainer}>
                        <Swiper
                            modules={[A11y, Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={2}
                            direction='vertical'
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            allowTouchMove={false}
                            navigation={{
                                nextEl: '.custom-swiper-button-next',
                                prevEl: '.custom-swiper-button-prev',
                            }}
                            className={classes.customSwiper}
                            breakpoints={{}}
                        >
                            <SwiperSlide>
                                <div className={classes.partnersGrid}>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={core} alt='core'/>
                                    </div>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={googleCloud} alt='google cloud'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.partnersGrid}>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={vmware} alt='vmware'/>
                                    </div>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={alibabaCloud} alt='alibaba cloud'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.partnersGrid}>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={ibm} alt='ibm'/>
                                    </div>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={microsoftAzure} alt='microsoftAzure'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={classes.partnersGrid}>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={oracle} alt='oracle'/>
                                    </div>
                                    <div className={`${classes.card} animate-up`}>
                                        <img src={aws} alt='aws'/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        <div className={`custom-swiper-button-prev ${classes.arrow}`}>&larr;</div>
                        <div className={`custom-swiper-button-next ${classes.arrow}`}>&rarr;</div>

                    </div>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <img src={partnersSectionLogo} alt='partnersSectionLogo'/>
            </div>
        </div>
    );
};

export default TechPartnersComponent;