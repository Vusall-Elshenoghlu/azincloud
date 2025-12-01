import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from 'assets/styles/abstracts/color';
import fonts from 'assets/styles/abstracts/fonts';
import {breakpoint} from '../../../../../assets/styles/abstracts/mixins';
const styles = {
    navbar: {
        backgroundImage: colors.navBarBgColor,
    },
    navbarContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: rem(100),
        backgroundImage: colors.navBarBgColor,
        zIndex: '100 !important',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: rem(100),
        paddingRight: rem(160),

        [breakpoint(1024)]: {
            height: rem(80),
            paddingLeft: rem(50),
            paddingRight: rem(80),
        },

        [breakpoint(768)]: {
            height: rem(70),
            paddingLeft: rem(20),
            paddingRight: rem(20),
        },

        [breakpoint(480)]: {
            height: rem(60),
            paddingLeft: rem(15),
            paddingRight: rem(15),
        },
    },
    logoImg: {
        width: rem(165),
        height: rem(40),
        objectFit: 'contain',

        [breakpoint(1024)]: {
            width: rem(140),
            height: rem(35),
        },

        [breakpoint(768)]: {
            width: rem(120),
            height: rem(30),
        },

        [breakpoint(480)]: {
            width: rem(100),
            height: rem(25),
        },
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            display: 'block',
        }
    },

    rightContainer: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(32),
        height: 'auto',
        position: 'relative',

        [breakpoint(1200)]: {
            gap: rem(24),
        },

        [breakpoint(1024)]: {
            gap: rem(20),
        },

        [breakpoint(768)]: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: rem(12),
            width: '100%',
        },

        [breakpoint(480)]: {
            gap: rem(8),
        },
    },

    hamburger: {
        display: 'none',
        fontSize: rem(24),
        color: '#ffffff',
        cursor: 'pointer',
        padding: rem(8),
        borderRadius: rem(4),
        transition: 'background-color 0.3s ease',
        minWidth: rem(40),
        minHeight: rem(40),
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '80%',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },

        [breakpoint(768)]: {
            display: 'flex !important',
            order: 1,
        },

        [breakpoint(480)]: {
            fontSize: rem(20),
            padding: rem(6),
            minWidth: rem(32),
            minHeight: rem(32),
        },
    },

    navigation: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    navItems: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(32),
        listStyle: 'none',
        margin: 0,
        padding: 0,
        flexWrap: 'nowrap',

        '& li': {
            display: 'flex',
            alignItems: 'center',
        },

        [breakpoint(1200)]: {
            gap: rem(24),
        },

        [breakpoint(1024)]: {
            gap: rem(20),
        },

        [breakpoint(900)]: {
            gap: rem(16),
        },

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    navLink: {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: rem(16),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        transition: 'color 0.3s ease',
        whiteSpace: 'nowrap',
        padding: `${rem(8)} ${rem(4)}`,

        '&:hover': {
            color: '#e6f3ff',
        },
        '&.active': {
            color: '#e6f3ff',
        },

        [breakpoint(1200)]: {
            fontSize: rem(15),
        },

        [breakpoint(1024)]: {
            fontSize: rem(14),
            padding: `${rem(6)} ${rem(2)}`,
        },

        [breakpoint(900)]: {
            fontSize: rem(13),
            padding: `${rem(4)} ${rem(1)}`,
        },
    },

    searchWrapper: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
    },

    searchInput: {
        position: 'absolute',
        top: rem(35),
        right: 0,
        width: rem(200),
        padding: `${rem(8)} ${rem(12)}`,
        fontSize: rem(14),
        border: '1px solid #ccc',
        borderRadius: rem(6),
        backgroundColor: '#fff',
        zIndex: 1000,
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',

        [breakpoint(1024)]: {
            width: rem(180),
            top: rem(32),
        },

        [breakpoint(768)]: {
            width: rem(160),
            right: rem(-20),
            top: rem(30),
        },

        [breakpoint(480)]: {
            width: rem(140),
            right: rem(-30),
            padding: `${rem(6)} ${rem(8)}`,
            fontSize: rem(12),
        },

        [breakpoint(360)]: {
            width: rem(120),
            right: rem(-40),
        },
    },

    actions: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(16),
        marginLeft: 'auto',

        [breakpoint(1024)]: {
            gap: rem(12),
        },

        [breakpoint(768)]: {
            gap: rem(10),
            order: 2,
            marginLeft: 0,
        },

        [breakpoint(480)]: {
            gap: rem(8),
        },
    },

    searchIcon: {
        fontSize: rem(18),
        color: '#ffffff',
        cursor: 'pointer',
        padding: rem(8),
        borderRadius: rem(4),
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: rem(34),
        minHeight: rem(34),

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },

        [breakpoint(1024)]: {
            fontSize: rem(17),
            padding: rem(7),
            minWidth: rem(32),
            minHeight: rem(32),
        },

        [breakpoint(768)]: {
            fontSize: rem(16),
            padding: rem(6),
            minWidth: rem(30),
            minHeight: rem(30),
        },

        [breakpoint(480)]: {
            fontSize: rem(15),
            padding: rem(5),
            minWidth: rem(28),
            minHeight: rem(28),
        },
    },

    langList: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
        position: 'absolute',
        borderRadius: rem(8),
        padding: `${rem(8)} ${rem(5)}`,
        width: rem(60),
        alignItems: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        top: rem(35),
        right: rem(-10),
        zIndex: 1000,

        [breakpoint(1024)]: {
            width: rem(55),
            padding: `${rem(6)} ${rem(4)}`,
            top: rem(32),
        },

        [breakpoint(768)]: {
            right: rem(-5),
            width: rem(50),
            padding: `${rem(5)} ${rem(3)}`,
            top: rem(30),
        },

        [breakpoint(480)]: {
            width: rem(45),
            borderRadius: rem(6),
            right: 0,
        },
    },

    listContent: {
        position: 'relative',
    },

    langItem: {
        color: '#1D2B36',
        fontWeight: 500,
        fontSize: rem(14),
        cursor: 'pointer',
        padding: `${rem(6)} ${rem(8)}`,
        transition: 'all 0.2s ease',
        textAlign: 'center',
        width: '100%',
        borderRadius: rem(4),

        '&:hover': {
            color: '#2BAAE2',
            backgroundColor: '#f0f8ff',
        },

        [breakpoint(1024)]: {
            fontSize: rem(13),
            padding: `${rem(5)} ${rem(6)}`,
        },

        [breakpoint(768)]: {
            fontSize: rem(12),
            padding: `${rem(4)} ${rem(4)}`,
        },

        [breakpoint(480)]: {
            fontSize: rem(11),
            padding: `${rem(3)} ${rem(2)}`,
        },
    },

    activeLang: {
        color: '#2BAAE2',
        backgroundColor: '#f0f8ff',
    },

    signInBtn: {
        backgroundColor: '#ffffff',
        color: '#2BAAE2',
        border: 'none',
        fontWeight: 900,
        padding: `${rem(10)} ${rem(24)}`,
        borderRadius: rem(24),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: rem(16),
        whiteSpace: 'nowrap',
        fontFamily: fonts.fontLato,
        minWidth: rem(120),

        '&:hover': {
            backgroundColor: '#f8f9fa',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        },

        '&:active': {
            transform: 'translateY(0)',
        },

        [breakpoint(1200)]: {
            fontSize: rem(15),
            padding: `${rem(9)} ${rem(20)}`,
            minWidth: rem(110),
        },

        [breakpoint(1024)]: {
            fontSize: rem(14),
            padding: `${rem(8)} ${rem(18)}`,
            minWidth: rem(100),
        },

        [breakpoint(768)]: {
            fontSize: rem(13),
            padding: `${rem(7)} ${rem(14)}`,
            minWidth: rem(90),
        },

        [breakpoint(480)]: {
            fontSize: rem(12),
            padding: `${rem(6)} ${rem(12)}`,
            minWidth: rem(80),
            borderRadius: rem(20),
        },

        [breakpoint(360)]: {
            fontSize: rem(11),
            padding: `${rem(5)} ${rem(10)}`,
            minWidth: rem(70),
        },
    },

    selected: {
        cursor: 'pointer',
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: rem(6),
        fontWeight: 600,
        color: 'white',
        transition: 'all 0.2s ease',
        fontSize: rem(14),
        minWidth: rem(40),
        textAlign: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',

        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
        },

        [breakpoint(1024)]: {
            padding: `${rem(6)} ${rem(10)}`,
            fontSize: rem(13),
            minWidth: rem(36),
        },

        [breakpoint(768)]: {
            padding: `${rem(5)} ${rem(8)}`,
            fontSize: rem(12),
            minWidth: rem(32),
        },

        [breakpoint(480)]: {
            padding: `${rem(4)} ${rem(6)}`,
            fontSize: rem(11),
            minWidth: rem(28),
            borderRadius: rem(4),
        },
    },

    userDropdownWrapper: {
        position: 'relative',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#333',
    },

    userDropdownTrigger: {
        padding: `${rem(10)} ${rem(16)}`,
        border: `2px solid #fff`,
        borderRadius: rem(25),
        backgroundColor: '#3E98D6',
        color: '#FFFFFF',
        fontSize: rem(14),
        fontWeight: 600,
        transition: 'all 0.3s ease',
        minWidth: rem(80),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        maxWidth: rem(120),

        '&:hover': {
            color: '#3E98D6',
            backgroundColor: '#f5f5f5',
        },

        [breakpoint(1024)]: {
            padding: `${rem(8)} ${rem(14)}`,
            fontSize: rem(13),
            minWidth: rem(70),
            maxWidth: rem(100),
        },

        [breakpoint(768)]: {
            padding: `${rem(7)} ${rem(12)}`,
            fontSize: rem(12),
            minWidth: rem(60),
            maxWidth: rem(80),
        },

        [breakpoint(480)]: {
            padding: `${rem(6)} ${rem(10)}`,
            fontSize: rem(11),
            minWidth: rem(50),
            maxWidth: rem(70),
            borderRadius: rem(20),
        },

        [breakpoint(360)]: {
            padding: `${rem(5)} ${rem(8)}`,
            fontSize: rem(10),
            minWidth: rem(40),
            maxWidth: rem(60),
        },
    },

    userDropdownMenu: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
        borderRadius: rem(10),
        zIndex: 1000,
        marginTop: rem(8),
        minWidth: rem(160),
        listStyle: 'none',
        padding: `${rem(8)} 0`,

        [breakpoint(1024)]: {
            minWidth: rem(140),
            marginTop: rem(6),
        },

        [breakpoint(768)]: {
            minWidth: rem(120),
            right: rem(-10),
        },

        [breakpoint(480)]: {
            minWidth: rem(100),
            right: rem(-20),
            borderRadius: rem(8),
        },

        [breakpoint(360)]: {
            minWidth: rem(90),
            right: rem(-30),
        },
    },

    userDropdownItem: {
        padding: `${rem(12)} ${rem(16)}`,
        cursor: 'pointer',
        fontSize: rem(14),
        color: '#333',
        transition: 'all 0.2s ease',
        whiteSpace: 'nowrap',

        '&:hover': {
            color: '#3E98D6',
            backgroundColor: '#f0f8ff',
        },

        '&:first-child': {
            borderTopLeftRadius: rem(10),
            borderTopRightRadius: rem(10),
        },

        '&:last-child': {
            borderBottomLeftRadius: rem(10),
            borderBottomRightRadius: rem(10),
        },

        [breakpoint(1024)]: {
            padding: `${rem(10)} ${rem(14)}`,
            fontSize: rem(13),
        },

        [breakpoint(768)]: {
            padding: `${rem(8)} ${rem(12)}`,
            fontSize: rem(12),
        },

        [breakpoint(480)]: {
            padding: `${rem(7)} ${rem(10)}`,
            fontSize: rem(11),
        },

        [breakpoint(360)]: {
            padding: `${rem(6)} ${rem(8)}`,
            fontSize: rem(10),
        },
    },
};

export const useHeaderNavbarStyles = createUseStyles(styles);