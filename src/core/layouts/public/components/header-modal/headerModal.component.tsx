import {useHeaderModalStyles} from './headerModal.style';
import {NavLink, useNavigate} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';
import {MessageOutlined, EnvironmentOutlined, FacebookOutlined, InstagramOutlined, LinkedinOutlined, YoutubeOutlined} from '@ant-design/icons';
import {ILanguages, IState} from '../../../../../store/store';
import {setLocale} from '../../../../../store/store.reducer';
import useLocalization from '../../../../../assets/lang';
import {useStore} from '../../../../../store/store.config';
import {useMemo, useState} from 'react';
import {environment} from '../../../../configs/app.config';
import {ILang} from '../../../../../assets/lang/lang';
import {useDispatch, useSelector} from 'react-redux';
import {Modal} from 'antd';
import {successToast} from '../../../../shared/toast/toast';

const HeaderModalComponent = ({setIsOpenMenu}: any) => {
    const classes = useHeaderModalStyles();
    const translate = useLocalization();
    const languages = useStore('languages');
    const dispatch = useDispatch();
    const locale = useSelector((state: IState) => state.locale);
    const user = useStore('user');
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const currentLang = useMemo(() => {
        return localStorage.getItem(`${environment.applicationName}-locale`) as ILang || 'az';
    }, [locale]);

    const handleLogout = () => {
        Modal.confirm({
            title: translate('modalTitle'),
            content: translate('modalReturn'),
            okText: translate('modalOkText'),
            cancelText: translate('modalCancelText'),
            onOk: () => {
                console.log('User logged out');
                localStorage.removeItem('Architecture (Mode: Default)-token');
                successToast('Logged Out!');
                navigate(Routes.login);
                window.location.reload();

            },
        });
    };

    return (
        <div className={classes.container}>
            <div className={classes.headerModalContainer}>
                <nav className={classes.navigation}>
                    <ul className={classes.navItems}>
                        <li>
                            <NavLink
                                to={Routes.about}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('about')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.products}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('products')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.news}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('news_and_blog')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.contact}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('contact')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.contact}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('technical_support')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.faq}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('faq')}
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={Routes.terms}
                                className={classes.navLink}
                                onClick={()=>setIsOpenMenu(false)}

                            >
                                {translate('huquq')}
                            </NavLink>
                        </li>
                    </ul>

                    {user ? (
                        <div className={classes.userDropdownWrapper}>
                            <div
                                className={classes.userDropdownTrigger}
                                onClick={() => setIsOpen(prev => !prev)}
                            >
                                {user}
                            </div>
                            {isOpen && (
                                <ul className={classes.userDropdownMenu}>
                                    <li
                                        className={classes.userDropdownItem}
                                        onClick={() => navigate(`${Routes.payments}`)}
                                    >
                                        {translate('payments')}
                                    </li>
                                    <li
                                        className={classes.userDropdownItem}
                                        onClick={() => navigate(`${Routes.settings}`)}
                                    >
                                        {translate('settings')}
                                    </li>
                                    <li
                                        className={classes.userDropdownItem}
                                        onClick={handleLogout}
                                    >
                                        {translate('logout')}
                                    </li>
                                </ul>
                            )}
                        </div>
                    ) : (
                        <NavLink to={Routes.login}>
                            <button className={classes.signInBtn}>
                                {translate('login_button')}
                            </button>
                        </NavLink>
                    )}


                        <ul className={classes.languageSelector}>
                            {languages.map((item: ILanguages) => (
                                <li
                                    key={item.key}
                                    className={`${classes.langBtn} ${currentLang === item.key ? classes.activeLang : ''}`}
                                    onClick={() => dispatch(setLocale(item.key))}
                                >
                                    {item.value}
                                </li>
                            ))}
                        </ul>


                    <div className={classes.contactInfo}>
                        <div className={classes.contactItem}>
                            <MessageOutlined />
                            <span>info@azincloud.az</span>
                        </div>
                        <div className={classes.contactItem}>
                            <EnvironmentOutlined />
                            <span>74, əlibəy Hüseynzadə, AZ1009, Bakı, Azərbaycan</span>
                        </div>
                    </div>

                    <div className={classes.socialLinks}>
                        <a href='#' aria-label='Facebook'>
                            <FacebookOutlined />
                        </a>
                        <a href='#' aria-label='Instagram'>
                            <InstagramOutlined />
                        </a>
                        <a href='#' aria-label='LinkedIn'>
                            <LinkedinOutlined />
                        </a>
                        <a href='#' aria-label='YouTube'>
                            <YoutubeOutlined />
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default HeaderModalComponent;