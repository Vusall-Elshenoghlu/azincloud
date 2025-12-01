import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    popupSelect: {
        width: rem(536),
        maxWidth: '90vw',
        height: rem(360),
        minHeight: rem(300),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: rem(41),
        backgroundColor: 'white',
        marginTop: '10vh',
        padding: rem(20),
        boxSizing: 'border-box',
        animation: '$slideDown 0.4s ease forwards',

        '@media (max-width: 768px)': {
            width: '85vw',
            height: 'auto',
            minHeight: rem(280),
            borderRadius: rem(25),
            marginTop: '5vh',
            padding: rem(15),
        },

        '@media (max-width: 480px)': {
            width: '95vw',
            marginTop: '3vh',
            borderRadius: rem(20),
            padding: rem(10),
            minHeight: rem(250),
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

    popupTitle: {
        color: '#12475F',
        fontSize: rem(18),
        fontWeight: rem(500),
        fontFamily: fonts.fontLato,
        marginTop: rem(20),
        lineHeight: 1.4,

        '@media (max-width: 768px)': {
            fontSize: rem(16),
            marginTop: rem(15),
        },

        '@media (max-width: 480px)': {
            fontSize: rem(14),
            marginTop: rem(10),
            padding: `0 ${rem(10)}`,
        },
    },

    popupContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    loginBtn: {
        width: rem(448),
        maxWidth: '100%',
        backgroundColor: '#2BAAE2',
        color: 'white',
        borderRadius: rem(41),
        border: 'none',
        marginTop: rem(50),
        height: rem(54),
        cursor: 'pointer',
        transition: 'all 0.3s ease',

        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'normal',
            fontFamily: fonts.fontLato,
            margin: 0,
        },

        '&:hover': {
            backgroundColor: '#2196D6',
            transform: 'translateY(-2px)',
        },

        '@media (max-width: 768px)': {
            width: rem(380),
            height: rem(48),
            marginTop: rem(40),
            borderRadius: rem(35),

            '& p': {
                fontSize: rem(16),
            },
        },

        '@media (max-width: 480px)': {
            width: '100%',
            maxWidth: rem(300),
            height: rem(44),
            marginTop: rem(30),
            borderRadius: rem(30),

            '& p': {
                fontSize: rem(14),
            },
        },
    },

    card: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: `0 ${rem(20)}`,
    },

    popupIcon: {
        width: rem(103),
        height: rem(103),

        '@media (max-width: 768px)': {
            width: rem(80),
            height: rem(80),
        },

        '@media (max-width: 480px)': {
            width: rem(60),
            height: rem(60),
        },
    },
};

export const usePasswordChangeStyle = createUseStyles(styles);