import {createUseStyles} from "react-jss";
import {rem} from "../../../../assets/styles/abstracts/functions";
import fonts from "../../../../assets/styles/abstracts/fonts";

const styles = {
    popupSelect: {
        position: "relative",
        right: rem(180),
        top: rem(20),

        '@media (max-width: 768px)': {
            right: rem(100),
            top: rem(15),
        },

        '@media (max-width: 480px)': {
            right: rem(20),
            top: rem(10),
            left: '50%',
            transform: 'translateX(-50%)',
        },
    },

    container: {
        width: rem(352),
        maxWidth: '90vw',
        height: rem(144),
        minHeight: rem(120),
        backgroundColor: 'white',
        borderRadius: rem(17),
        zIndex: 999,
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        padding: rem(10),
        boxSizing: 'border-box',

        '@media (max-width: 768px)': {
            width: rem(320),
            height: 'auto',
            minHeight: rem(110),
            borderRadius: rem(15),
            padding: rem(15),
        },

        '@media (max-width: 480px)': {
            width: '95vw',
            maxWidth: rem(300),
            borderRadius: rem(12),
            padding: rem(12),
            minHeight: rem(100),
        },
    },

    searchInput: {
        borderRadius: rem(41),
        backgroundColor: '#F3F6F7',
        width:  rem(312),
        maxWidth: '100%',
        padding: rem(15),
        border: 'none',
        fontSize: rem(14),
        boxSizing: 'border-box',
        outline: 'none',

        '&::placeholder': {
            color: '#12475F',
        },

        '&:focus': {
            backgroundColor: '#E8F4F8',
        },

        '@media (max-width: 768px)': {
            width: '100%',
            padding: rem(12),
            borderRadius: rem(35),
        },

        '@media (max-width: 480px)': {
            padding: rem(10),
            borderRadius: rem(30),
            fontSize: rem(13),
        },
    },

    searchButtons: {
        display: "flex",
        justifyContent: "center",
        gap: rem(20),
        marginTop: rem(30),
        width: '100%',

        '@media (max-width: 768px)': {
            gap: rem(15),
            marginTop: rem(25),
        },

        '@media (max-width: 480px)': {
            gap: rem(12),
            marginTop: rem(20),
        },
    },

    reset: {
        color: "#12475F",
        fontSize: rem(18),
        fontWeight: 900,
        fontFamily: fonts.fontLato,
        fontStyle: "normal",
        cursor: "pointer",
        transition: 'color 0.3s ease',
        userSelect: 'none',

        '&:hover': {
            color: '#0E3A4B',
        },

        '&:active': {
            transform: 'scale(0.95)',
        },

        '@media (max-width: 768px)': {
            fontSize: rem(16),
        },

        '@media (max-width: 480px)': {
            fontSize: rem(14),
        },
    },

    search: {
        color: "#2BAAE2",
        fontSize: rem(18),
        fontWeight: 900,
        fontFamily: fonts.fontLato,
        fontStyle: "normal",
        cursor: "pointer",
        transition: 'color 0.3s ease',
        userSelect: 'none',

        '&:hover': {
            color: '#2196D6',
        },

        '&:active': {
            transform: 'scale(0.95)',
        },

        '@media (max-width: 768px)': {
            fontSize: rem(16),
        },

        '@media (max-width: 480px)': {
            fontSize: rem(14),
        },
    },
};

export const useSearchPopupStyles = createUseStyles(styles);