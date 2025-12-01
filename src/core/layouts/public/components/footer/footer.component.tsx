import { useFooterStyles } from './footer.style';
import useLocalization from '../../../../../assets/lang';
import {Link} from 'react-router-dom';
import {UserTag} from "../../../../../assets/images/icons/user-tag";
import {
    LocationIcon,
    MessageIcon,
    PhoneIcon,
    TelegramIcon,
    YoutubeIcon
} from '../../../../../assets/images/icons/sosial-medias';
import {InstagramIcon} from "../../../../../assets/images/icons/instagram";
import {LinkedinIcon} from "../../../../../assets/images/icons/linkedin";
import {FacebookFilled} from '@ant-design/icons';
import {Routes} from '../../../../../router/routes';


const FooterComponent = () => {
    const classes = useFooterStyles();
    const translate = useLocalization();
    const date = new Date().getFullYear();
    return (
        <footer className={`${classes.footerSection} `}>
            <div className={`container ${classes.footerContainer} `}>
                <div className={classes.inputContainer}>
                    <p>{translate('subscribe_text')}</p>
                    <div className={classes.inputGroup}>
                        <input
                            type='email'
                            placeholder='mail.cloud.az'
                            className={classes.input}
                        />
                        <button className={classes.subscrBtn}>
                            {translate('subscribe_button')}
                        </button>
                    </div>
                </div>



                <div className={classes.contactsContainer}>
                    <div className={classes.contactItem}>
                        <UserTag/>
                        <p>157</p>
                    </div>

                    <div className={classes.contactItem}>
                        <PhoneIcon/>
                        <p>+994 12 200 00 20</p>
                    </div>

                    <div className={classes.contactItem}>
                        <MessageIcon />
                        <p>info@cloud.az</p>
                    </div>

                    <div className={classes.contactItem}>
                        <LocationIcon />
                        <p>74, Alibey Huseynzade, AZ1009,<br />Baku, Azerbaijan</p>
                    </div>
                </div>

                <div className={classes.divider}></div>

                <div className={classes.mediaIconsContainer}>
                    <a>{translate('technical_support')}</a>
                    <a href={Routes.faq}>{translate('faq')}</a>
                    <a href={Routes.terms}>{translate('legal')}</a>

                    <div className={classes.socialMediaIcons}>
                        <Link to='#'><FacebookFilled/></Link>
                        <Link to='#'><InstagramIcon /></Link>
                        <Link to='#'><LinkedinIcon /></Link>
                        <Link to='#'><TelegramIcon /></Link>
                        <Link to='#'><YoutubeIcon /></Link>
                    </div>
                </div>
            </div>

            <div className={classes.bottomBar}>
                {translate('copyright')} {date} {translate('beta_text')} (
                <Link to='#'>{translate('beta_link_text')}</Link>)
            </div>
        </footer>
    );
};

export default FooterComponent;