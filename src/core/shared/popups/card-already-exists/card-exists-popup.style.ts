import {createUseStyles} from 'react-jss';
import {rem} from "../../../../assets/styles/abstracts/functions";
import fonts from "../../../../assets/styles/abstracts/fonts";

const styles = {
    cardContainer: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        padding: rem(20),
        "@media (max-width: 768px)": {
            padding: rem(15),
        },
        "@media (max-width: 480px)": {
            padding: rem(10),
        },
    },
    popupSelect: {
        width: rem(536),
        height: rem(360),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: rem(41),
        backgroundColor: 'white',
        marginTop: '10vh',
        animation: '$slideDown 0.4s ease forwards',
        padding: rem(30),
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
        maxWidth: '90vw',
        maxHeight: '85vh',
        "@media (max-width: 1024px)": {
            width: rem(480),
            height: rem(320),
            borderRadius: rem(35),
            padding: rem(25),
        },
        "@media (max-width: 768px)": {
            width: '85vw',
            height: 'auto',
            minHeight: rem(280),
            borderRadius: rem(30),
            padding: rem(20),
            marginTop: '5vh',
        },
        "@media (max-width: 576px)": {
            width: '90vw',
            borderRadius: rem(25),
            padding: rem(18),
            marginTop: '3vh',
        },
        "@media (max-width: 480px)": {
            width: '95vw',
            borderRadius: rem(20),
            padding: rem(15),
            marginTop: '2vh',
        },
        "@media (max-width: 360px)": {
            width: '98vw',
            borderRadius: rem(18),
            padding: rem(12),
        },
    },

    '@keyframes slideDown': {
        '0%': {
            transform: 'translateY(-100px)',
            opacity: 0,
        },
        '100%': {
            transform: 'translateY(0)',
            opacity: 1,
        },
    },

    '@keyframes fadeIn': {
        '0%': {
            opacity: 0,
            transform: 'scale(0.8)',
        },
        '100%': {
            opacity: 1,
            transform: 'scale(1)',
        },
    },

    popupIcon: {
        width: rem(103),
        height: rem(103),
        flexShrink: 0,
        "@media (max-width: 1024px)": {
            width: rem(90),
            height: rem(90),
        },
        "@media (max-width: 768px)": {
            width: rem(80),
            height: rem(80),
        },
        "@media (max-width: 576px)": {
            width: rem(70),
            height: rem(70),
        },
        "@media (max-width: 480px)": {
            width: rem(60),
            height: rem(60),
        },
        "@media (max-width: 360px)": {
            width: rem(50),
            height: rem(50),
        },
    },

    popupText: {
        color: '#12475F',
        fontSize: rem(18),
        fontWeight: 500,
        fontFamily: fonts.fontLato,
        marginTop: rem(20),
        lineHeight: 1.4,
        maxWidth: '100%',
        wordWrap: 'break-word',
        "@media (max-width: 1024px)": {
            fontSize: rem(16),
            marginTop: rem(18),
        },
        "@media (max-width: 768px)": {
            fontSize: rem(15),
            marginTop: rem(15),
            lineHeight: 1.3,
        },
        "@media (max-width: 576px)": {
            fontSize: rem(14),
            marginTop: rem(12),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(13),
            marginTop: rem(10),
            lineHeight: 1.2,
        },
        "@media (max-width: 360px)": {
            fontSize: rem(12),
            marginTop: rem(8),
        },
    },

    popupBtn: {
        width: rem(448),
        height: rem(54),
        borderRadius: rem(41),
        borderColor: '#12475F',
        borderWidth: '1px',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        marginTop: rem(60),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "@media (max-width: 1024px)": {
            width: rem(380),
            height: rem(50),
            marginTop: rem(50),
            borderRadius: rem(35),
        },
        "@media (max-width: 768px)": {
            width: '100%',
            maxWidth: rem(320),
            height: rem(48),
            marginTop: rem(40),
            borderRadius: rem(30),
        },
        "@media (max-width: 576px)": {
            height: rem(44),
            marginTop: rem(35),
            borderRadius: rem(25),
        },
        "@media (max-width: 480px)": {
            height: rem(42),
            marginTop: rem(30),
            borderRadius: rem(22),
        },
        "@media (max-width: 360px)": {
            height: rem(40),
            marginTop: rem(25),
            borderRadius: rem(20),
        },
        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'normal',
            fontFamily: fonts.fontLato,
            color: '#12475F',
            margin: 0,
            transition: 'color 0.3s ease',
            "@media (max-width: 1024px)": {
                fontSize: rem(16),
            },
            "@media (max-width: 768px)": {
                fontSize: rem(15),
            },
            "@media (max-width: 576px)": {
                fontSize: rem(14),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(13),
            },
            "@media (max-width: 360px)": {
                fontSize: rem(12),
            },
        },
        '&:hover p': {
            color: 'white',
        },
        '&:hover': {
            backgroundColor: '#12475F !important',
            borderColor: '#12475F',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 20px rgba(18, 71, 95, 0.3)',
        },
        '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 4px 12px rgba(18, 71, 95, 0.2)',
        },
        '&:focus': {
            outline: 'none',
            boxShadow: '0 0 0 3px rgba(43, 170, 226, 0.3)',
        },
    },

    '@media (max-width: 768px)': {
        popupSelect: {
            animation: '$fadeIn 0.3s ease forwards',
        },
    },

    closeIcon: {
        position: 'absolute',
        top: rem(15),
        right: rem(15),
        fontSize: rem(24),
        cursor: 'pointer',
        color: '#12475F',
        padding: rem(5),
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        zIndex: 10,
        "&:hover": {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.1)',
        },
        "@media (max-width: 768px)": {
            fontSize: rem(20),
            top: rem(12),
            right: rem(12),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(18),
            top: rem(10),
            right: rem(10),
        },
    },

    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        zIndex: 9999,
        animation: '$overlayFadeIn 0.3s ease forwards',
        "@media (max-width: 768px)": {
            alignItems: 'center',
            padding: rem(15),
        },
    },

    '@keyframes overlayFadeIn': {
        '0%': {
            opacity: 0,
        },
        '100%': {
            opacity: 1,
        },
    },

    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: rem(100),
        color: '#666',
        fontSize: rem(14),
        "@media (max-width: 480px)": {
            fontSize: rem(12),
            minHeight: rem(80),
        },
    },

    errorState: {
        color: '#FF4757',
        fontSize: rem(14),
        textAlign: 'center',
        padding: rem(10),
        backgroundColor: '#FFE8EA',
        borderRadius: rem(8),
        margin: `${rem(10)} 0`,
        "@media (max-width: 480px)": {
            fontSize: rem(12),
            padding: rem(8),
        },
    },
};

export const useExistsPopupStyles = createUseStyles(styles);