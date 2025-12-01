import { createUseStyles } from 'react-jss';
import {rem} from "../../../../../assets/styles/abstracts/functions";
import fonts from "../../../../../assets/styles/abstracts/fonts";

const styles = {
    container: {
        width: '100%',
        maxWidth: rem(400),
        height: 'auto',
        background: 'white',
        position: 'absolute',
        left: rem(20),
        zIndex:"9999 !important",
        top: '100%',
        borderRadius: rem(8),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',

        '@media (max-width: 768px)': {
            left: rem(10),
            right: rem(10),
            width: 'calc(100% - 20px)',
            maxWidth: 'none',
        },

        '@media (max-width: 480px)': {
            left: rem(5),
            right: rem(5),
            width: 'calc(100% - 10px)',
            borderRadius: rem(6),
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
        },
    },
    headerModalContainer: {
        position: 'relative',
        height: '100%',
        padding: rem(20),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%',
        zIndex: 9999,

        '@media (max-width: 768px)': {
            padding: rem(16),
        },

        '@media (max-width: 480px)': {
            padding: rem(12),
        },
    },
    navigation: {
        width: '100%',
    },
    navItems: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: rem(5),
        listStyle: 'none',
        margin: 0,
        padding: 0,
        marginBottom: rem(20),

        '& li': {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            borderBottom: '1px solid #f0f0f0',
            paddingBottom: rem(8),
            marginBottom: rem(8),

            '&:last-child': {
                borderBottom: 'none',
                marginBottom: 0,
                paddingBottom: 0,
            }
        },

        '@media (max-width: 480px)': {
            gap: rem(3),
            marginBottom: rem(15),
        },
    },
    navLink: {
        color: '#12475f',
        textDecoration: 'none',
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        transition: 'color 0.3s ease',
        whiteSpace: 'nowrap',
        fontSize: rem(16),
        padding: `${rem(8)} 0`,
        width: '100%',
        display: 'block',

        '&:hover': {
            color: '#2baae2',
        },
        '&.active': {
            color: '#2baae2',
        },

        '@media (max-width: 768px)': {
            fontSize: rem(15),
            padding: `${rem(10)} 0`,
        },

        '@media (max-width: 480px)': {
            fontSize: rem(14),
            padding: `${rem(12)} 0`,
            whiteSpace: 'normal',
        },
    },
    actions: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        marginTop: rem(10),

        '@media (max-width: 480px)': {
            marginTop: rem(8),
        },
    },
    signInBtn: {
        backgroundColor: '#2baae2',
        color: 'white',
        width: '100% !important',
        border: 'none',
        fontWeight: 900,
        padding: `${rem(12)} ${rem(24)}`,
        borderRadius: rem(24),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: rem(16),
        whiteSpace: 'nowrap',
        fontFamily: fonts.fontLato,

        '&:hover': {
            backgroundColor: '#1e90d1',
            transform: 'translateY(-1px)',
            boxShadow: '0 4px 12px rgba(43, 170, 226, 0.3)',
        },

        '&:active': {
            transform: 'translateY(0)',
        },

        '@media (max-width: 768px)': {
            padding: `${rem(14)} ${rem(20)}`,
            fontSize: rem(15),
        },

        '@media (max-width: 480px)': {
            padding: `${rem(16)} ${rem(18)}`,
            fontSize: rem(14),
            borderRadius: rem(20),
            whiteSpace: 'normal',
            minHeight: rem(48),
        },
    },
    languageSelector: {
        display: 'flex',
        justifyContent: 'center',
        gap: rem(15),
        marginTop: rem(15),
        paddingTop: rem(15),
        borderTop: '1px solid #f0f0f0',
        flexWrap: 'wrap',

        '@media (max-width: 768px)': {
            gap: rem(12),
            marginTop: rem(12),
            paddingTop: rem(12),
        },

        '@media (max-width: 480px)': {
            gap: rem(10),
            marginTop: rem(10),
            paddingTop: rem(10),
        },
    },
    langBtn: {
        background: 'none',
        border: 'none',
        color: '#12475f',
        fontFamily: fonts.fontLato,
        fontWeight: 600,
        fontSize: rem(14),
        cursor: 'pointer',
        padding: `${rem(4)} ${rem(8)}`,
        borderRadius: rem(4),
        transition: 'all 0.3s ease',
        minHeight: rem(32),

        '&:hover': {
            backgroundColor: '#f8f9fa',
            color: '#2baae2',
        },

        '@media (max-width: 480px)': {
            fontSize: rem(13),
            padding: `${rem(6)} ${rem(10)}`,
            minHeight: rem(36),
            minWidth: rem(36),
        },
    },
    contactInfo: {
        marginTop: rem(20),
        paddingTop: rem(15),
        borderTop: '1px solid #f0f0f0',

        '@media (max-width: 768px)': {
            marginTop: rem(16),
            paddingTop: rem(12),
        },

        '@media (max-width: 480px)': {
            marginTop: rem(12),
            paddingTop: rem(10),
        },
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        marginBottom: rem(10),
        color: '#12475f',
        fontSize: rem(14),
        fontFamily: fonts.fontLato,

        '& svg': {
            color: '#2baae2',
            fontSize: rem(16),
            flexShrink: 0,
        },

        '@media (max-width: 768px)': {
            gap: rem(8),
            marginBottom: rem(8),
            fontSize: rem(13),

            '& svg': {
                fontSize: rem(15),
            }
        },

        '@media (max-width: 480px)': {
            gap: rem(6),
            marginBottom: rem(6),
            fontSize: rem(12),
            alignItems: 'flex-start',

            '& svg': {
                fontSize: rem(14),
                marginTop: rem(2),
            }
        },
    },
    socialLinks: {
        display: 'flex',
        justifyContent: 'center',
        gap: rem(15),
        marginTop: rem(15),
        paddingTop: rem(15),
        borderTop: '1px solid #f0f0f0',
        flexWrap: 'wrap',

        '& a': {
            color: '#12475f',
            fontSize: rem(20),
            transition: 'color 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: rem(44),
            minWidth: rem(44),
            borderRadius: rem(4),

            '&:hover': {
                color: '#2baae2',
                backgroundColor: '#f8f9fa',
            }
        },

        '@media (max-width: 768px)': {
            gap: rem(12),
            marginTop: rem(12),
            paddingTop: rem(12),

            '& a': {
                fontSize: rem(18),
                minHeight: rem(40),
                minWidth: rem(40),
            }
        },

        '@media (max-width: 480px)': {
            gap: rem(10),
            marginTop: rem(10),
            paddingTop: rem(10),

            '& a': {
                fontSize: rem(16),
                minHeight: rem(48),
                minWidth: rem(48),
            }
        },
    },
    activeLang: {
        color: '#2BAAE2',
        fontWeight: 700,

        '@media (max-width: 480px)': {
            backgroundColor: 'rgba(43, 170, 226, 0.1)',
        },
    },

    '@media (max-width: 320px)': {
        container: {
            left: rem(2),
            right: rem(2),
            width: 'calc(100% - 4px)',
        },
        headerModalContainer: {
            padding: rem(10),
        },
        navLink: {
            fontSize: rem(13),
        },
        signInBtn: {
            fontSize: rem(13),
            padding: `${rem(14)} ${rem(16)}`,
        },
    },
    userDropdownWrapper: {
        position: 'relative',
        cursor: 'pointer',
        fontWeight: 'bold',
        color: '#333',
    },

    userDropdownTrigger: {
        padding: rem(8),
        border: `1px solid #ccc`,
        borderRadius: rem(4),
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: '#f5f5f5',
        },
    },

    userDropdownMenu: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#fff',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        borderRadius: rem(4),
        zIndex: 10,
        marginTop: rem(5),
        minWidth: rem(120),
        listStyle: 'none',
        padding: 0,
    },

    userDropdownItem: {
        padding: rem(10),
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#f0f0f0',
        },
        '&:last-child': {
            borderBottom: 'none',
        },
    },

};

export const useHeaderModalStyles = createUseStyles(styles);