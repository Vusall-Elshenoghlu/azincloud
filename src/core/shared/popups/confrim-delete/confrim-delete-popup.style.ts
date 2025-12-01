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
        padding: `0 ${rem(20)}`,
    },

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

    popupText: {
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

    cancelBtn: {
        width: rem(202),
        borderRadius: rem(41),
        borderColor: '#12475F',
        borderWidth: '1px',
        borderStyle: 'solid',
        backgroundColor: 'transparent',
        height: rem(54),
        cursor: 'pointer',
        transition: 'all 0.3s ease',

        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'normal',
            fontFamily: fonts.fontLato,
            color: '#12475F',
            margin: 0,
            transition: 'color 0.3s ease',
        },

        '&:hover p': {
            color: 'white',
        },

        '&:hover': {
            backgroundColor: '#12475F !important',
            border: 'none',
        },

        '@media (max-width: 768px)': {
            width: rem(180),
            height: rem(48),
            borderRadius: rem(35),

            '& p': {
                fontSize: rem(16),
            },
        },

        '@media (max-width: 480px)': {
            width: '100%',
            maxWidth: rem(160),
            height: rem(44),
            borderRadius: rem(30),

            '& p': {
                fontSize: rem(14),
            },
        },
    },

    deleteBtn: {
        width: rem(202),
        borderRadius: rem(41),
        backgroundColor: 'transparent',
        borderColor: '#EF626C',
        borderWidth: '1px',
        borderStyle: 'solid',
        height: rem(54),
        color: '#EF626C',
        cursor: 'pointer',
        transition: 'all 0.3s ease',

        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'normal',
            fontFamily: fonts.fontLato,
            color: '#EF626C',
            margin: 0,
            transition: 'color 0.3s ease',
        },

        '&:hover p': {
            color: 'white',
        },

        '&:hover': {
            backgroundColor: '#EF626C !important',
            border: 'none',
        },

        '@media (max-width: 768px)': {
            width: rem(180),
            height: rem(48),
            borderRadius: rem(35),

            '& p': {
                fontSize: rem(16),
            },
        },

        '@media (max-width: 480px)': {
            width: '100%',
            maxWidth: rem(160),
            height: rem(44),
            borderRadius: rem(30),

            '& p': {
                fontSize: rem(14),
            },
        },
    },

    row: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(20),
        marginTop: rem(60),

        '@media (max-width: 768px)': {
            gap: rem(15),
            marginTop: rem(40),
        },

        '@media (max-width: 480px)': {
            gap: rem(10),
            marginTop: rem(30),
            flexDirection: 'column',
            width: '100%',

            '& > *': {
                width: '100%',
                maxWidth: rem(200),
            },
        },
    },
};

export const useConfrimDeleteStyles = createUseStyles(styles);