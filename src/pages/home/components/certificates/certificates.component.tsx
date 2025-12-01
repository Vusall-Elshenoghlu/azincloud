import {useCertificatesStyles} from './certificates.style';
import {Swiper, SwiperSlide} from "swiper/react";
import  {A11y,  Autoplay} from 'swiper/modules';
import iso1 from '/src/assets/images/statics/iso1-sertificate.png';
import iso2 from '/src/assets/images/statics/iso1-sertificate.png';
import tierSertificate from '/src/assets/images/statics/tier-sertificate.png';
import nettySertificate from '/src/assets/images/statics/netty-sertificate.png';
import tierSampleSertificate from '/src/assets/images/statics/tier-sample-sertificate.png';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import useLocalization from "../../../../assets/lang";

const CertificatesComponent= () => {
    const classes=useCertificatesStyles();
    const translate = useLocalization();
  return (
      <div className={classes.sertificatesSection}>
          <h2 className={classes.title}>{translate("certificates")}</h2>
            <div className={classes.sertificatesContainer}>
                <Swiper
                modules={[A11y, Autoplay]}
                slidesPerView={5}
                spaceBetween={30}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,

                }}
                breakpoints={{
                    0: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    480: {
                        slidesPerView: 2.5,
                        spaceBetween: 25,
                    },
                    768: {
                        slidesPerView: 3.5,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    },
                }}>
                    <SwiperSlide className={classes.slidesContainer}> <img src={iso1} alt={'iso1'}/></SwiperSlide>
                    <SwiperSlide className={classes.slidesContainer}> <img src={iso2} alt={'iso2'}/></SwiperSlide>
                    <SwiperSlide className={classes.slidesContainer}> <img src={tierSertificate} alt={'tierSertificate'}/></SwiperSlide>
                    <SwiperSlide className={classes.slidesContainer}> <img src={nettySertificate} alt={'nettySertificate'}/></SwiperSlide>
                    <SwiperSlide className={classes.slidesContainer}> <img src={iso2} alt={'iso2'}/></SwiperSlide>
                    <SwiperSlide className={classes.slidesContainer}> <img src={tierSampleSertificate} alt={'tierSampleSertificate'}/></SwiperSlide>
                </Swiper>
            </div>

      </div>
  );
};
export default CertificatesComponent;