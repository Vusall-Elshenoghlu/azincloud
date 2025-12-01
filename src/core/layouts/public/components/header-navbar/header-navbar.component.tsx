import Logo from 'assets/images/statics/Logo.png';
import {useHeaderNavbarStyles} from './header-navbar.style';
import {MenuOutlined, SearchOutlined} from '@ant-design/icons';
import {ILanguages, IState} from '../../../../../store/store';
import {useStore} from '../../../../../store/store.config';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect, useMemo, useState} from 'react';
import {environment} from '../../../../configs/app.config';
import {ILang} from '../../../../../assets/lang/lang';
import {setLocale} from '../../../../../store/store.reducer';
import {NavLink, useNavigate} from 'react-router-dom';
import {Routes} from '../../../../../router/routes';
import useLocalization from '../../../../../assets/lang';
import HeaderModalComponent from '../header-modal/headerModal.component';
import {Modal} from 'antd';
import {successToast} from '../../../../shared/toast/toast';

const HeaderNavbarComponent = () => {
    const classes = useHeaderNavbarStyles();
    const languages = useStore('languages');
    const locale = useSelector((state: IState) => state.locale);
    const [isOpen, setIsOpen] = useState(false);
    const [isUserMenu, setIsUserMenu] = useState(false);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const translate = useLocalization();
    const user = localStorage.getItem('user');

    const handleLogout = () => {
        Modal.confirm({
            title: translate('modalTitle'),
            content: translate('modalReturn'),
            okText: translate('modalOkText'),
            cancelText: translate('modalCancelText'),
            onOk: () => {
                localStorage.removeItem('Architecture (Mode: Default)-token');
                localStorage.removeItem('user');
                successToast('Logged Out!');
                navigate(Routes.login);
                window.location.reload();
            },
        });
    };

    const currentLang = useMemo(() => {
        return localStorage.getItem(`${environment.applicationName}-locale`) as ILang || 'az';
    }, [locale]);

    useEffect(() => {
        dispatch(setLocale(currentLang));
    }, [currentLang, dispatch]);

    const handleSearch = (e: any) => {
        if (e.key === 'Enter' && searchText.trim() !== '') {
            navigate(`${Routes.search}?q=${encodeURIComponent(searchText)}`);
        }
    };

    return (
        <div className={`${classes.navbar} py-16 pl-40 pr-40`}>
            <div className={`${classes.navbarContainer}`}>
                <div className='col-6'>
                    <div className={classes.left}>
                        <NavLink to={Routes.default}>
                            <img className={classes.logoImg} src={Logo} alt='logo'/>
                        </NavLink>
                    </div>
                </div>
                <div className='col-6'>
                    <div className={classes.rightContainer}>
                        <MenuOutlined
                            className={classes.hamburger}
                            onClick={() => setIsOpenMenu(prev => !prev)}
                        />
                        {isOpenMenu && (
                            <HeaderModalComponent setIsOpenMenu={setIsOpenMenu} />
                        )}
                        {
                            !isOpenMenu && (
                                <nav className={classes.navigation}>
                                    <ul className={classes.navItems}>
                                        <li>
                                            <NavLink
                                                to={Routes.about}
                                                className={classes.navLink}
                                            >
                                                {translate('about')}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Routes.products}
                                                className={classes.navLink}
                                            >
                                                {translate('products')}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Routes.news}
                                                className={classes.navLink}
                                            >
                                                {translate('news_and_blog')}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={Routes.contact}
                                                className={classes.navLink}
                                            >
                                                {translate('contact')}
                                            </NavLink>
                                        </li>
                                    </ul>
                                    <div className={classes.actions}>
                                        <div className={classes.searchIcon}>
                                            <div className={classes.searchWrapper}>
                                                <SearchOutlined onClick={() => setIsSearchOpen(prev => !prev)} />
                                                {isSearchOpen && (
                                                    <input type='text'
                                                           value={searchText}
                                                           onChange={(e) => setSearchText(e.target.value)}
                                                           onKeyDown={handleSearch}
                                                           placeholder={'search...'}
                                                           className={classes.searchInput}
                                                           autoFocus
                                                    />
                                                )}
                                            </div>
                                        </div>

                                        <div className={classes.listContent}>
                                            <div onClick={() => setIsOpen(!isOpen)} className={classes.selected}>
                                                {currentLang.toUpperCase()}
                                            </div>
                                            {
                                                isOpen && (
                                                    <ul className={classes.langList}>
                                                        {languages.map((item: ILanguages) => (
                                                            <li
                                                                key={item.key}
                                                                className={`${classes.langItem} ${currentLang === item.key ? classes.activeLang : ''}`}
                                                                onClick={() => {
                                                                    dispatch(setLocale(item.key));
                                                                    setIsOpen(false);
                                                                }}
                                                            >
                                                                {item.value}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )
                                            }
                                        </div>

                                        {user ? (
                                            <div className={classes.userDropdownWrapper}>
                                                <div
                                                    className={classes.userDropdownTrigger}
                                                    onClick={() => setIsUserMenu(prev => !prev)}
                                                >
                                                    {user}
                                                </div>
                                                {isUserMenu && (
                                                    <ul className={classes.userDropdownMenu}>
                                                        <li
                                                            className={classes.userDropdownItem}
                                                            onClick={() => {
                                                                navigate(`${Routes.payments}`);
                                                                setIsUserMenu(false);
                                                            }}
                                                        >
                                                            {translate('payments')}
                                                        </li>
                                                        <li
                                                            className={classes.userDropdownItem}
                                                            onClick={() => {
                                                                navigate(`${Routes.personal_info}`);
                                                                setIsUserMenu(false);
                                                            }}
                                                        >
                                                            {translate('personal_information')}
                                                        </li>
                                                        <li
                                                            className={classes.userDropdownItem}
                                                            onClick={() => {
                                                                navigate(`${Routes.settings}`);
                                                                setIsUserMenu(false);
                                                            }}
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
                                    </div>
                                </nav>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderNavbarComponent;