import {PhoneOutlined,} from "@ant-design/icons";
import {useContactInfoMapStyles} from "./contact-info.style";
import locationImg from "assets/images/statics/location.png";
import messageText from "assets/images/statics/message-text.png";
import {BehanceIcon} from "../../../../assets/images/icons/behance";
import {InstagramIcon} from "../../../../assets/images/icons/instagram";
import {LinkedinIcon} from "../../../../assets/images/icons/linkedin";
import {rem} from "../../../../assets/styles/abstracts/functions";
import {UserTag} from "../../../../assets/images/icons/user-tag";
import useLocalization from "../../../../assets/lang";
import {TelegramIcon} from "../../../../assets/images/icons/sosial-medias";

const ContactInfoMap = () => {

    const classes = useContactInfoMapStyles();
    const translate = useLocalization();

    return (
        <div className={classes.wrapper}>
            <div className={'row'}>
                <div className={`col-6 ${classes.infoSection}`}>
                    <h3 style={{
                        fontSize: rem(32),
                        fontFamily: "Lato",
                        fontWeight: "700"
                    }}>{translate("our_contacts")}</h3>
                    <div className={`d-flex`} style={{gap: rem(10)}}>
                        <div style={{marginTop: rem(5)}}><UserTag/></div>
                        <p>157</p>
                    </div>
                    <p><PhoneOutlined/> +994 12 200 00 20</p>
                    <div className={`d-flex`} style={{gap: rem(10)}}>
                        <div style={{marginTop: rem(5)}}><img src={messageText} alt=""/></div>
                        <p>info@edu.az</p>
                    </div>
                    <div className={`d-flex`} style={{gap: rem(10)}}>
                        <div style={{marginTop: rem(5)}}><img src={locationImg} alt=""/></div>
                        <p>74, Alibey Huseynzade, AZ1009, Baku, Azerbaijan</p>
                    </div>

                    <div className={classes.social}>
                        <BehanceIcon/>
                        <InstagramIcon/>
                        <TelegramIcon/>
                        <LinkedinIcon/>
                    </div>
                </div>
                <div className={`col-6 ${classes.mapSection}`}>
                    <iframe
                        className={classes.mapFrame}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3038.768785133683!2d49.83809411540131!3d40.376521764895665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc7cfb90203%3A0x20e04b76b80d1a75!2s74%20Alibey%20Huseynzade%20St%2C%20Baku%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1722441600000!5m2!1sen!2saz"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactInfoMap;
