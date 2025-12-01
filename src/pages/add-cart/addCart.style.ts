import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100vh',
        padding: rem(20),
        boxSizing: 'border-box',

        '@media (max-width: 768px)': {
            padding: rem(16),
            height: '100vh',
        },

        '@media (max-width: 480px)': {
            padding: rem(12),
        }
    },

    addCartContainer: {
        position: "relative",
        display: 'flex',
        flexDirection: 'column',
        gap: rem(10),
        justifyContent: 'center',
        alignItems: 'center',
        margin: `0 ${rem(70)}`,
        backgroundColor: '#FFFFFF',
        width: '100%',
        maxWidth: rem(1800),
        height: rem(427),
        borderRadius: rem(28),
        padding: rem(24),
        boxSizing: 'border-box',


        '@media (max-width: 1024px)': {
            margin: `0 ${rem(40)}`,
            height: 'auto',
            minHeight: rem(380),
            padding: rem(20),
        },

        '@media (max-width: 768px)': {
            margin: `0 ${rem(20)}`,
            height: 'auto',
            minHeight: rem(350),
            padding: rem(16),
            borderRadius: rem(20),
            gap: rem(8),
        },

        '@media (max-width: 480px)': {
            margin: 0,
            height: 'auto',
            minHeight: rem(320),
            padding: rem(16),
            borderRadius: rem(16),
            gap: rem(6),
        }
    },

    title: {
        fontSize: rem(18),
        color: '#12475F',
        fontFamily: fonts.fontLato,
        fontStyle: 'bold',
        fontWeight: '700',
        textAlign: 'center',

        '@media (max-width: 768px)': {
            fontSize: rem(16),
        },

        '@media (max-width: 480px)': {
            fontSize: rem(15),
        }
    },

    description: {
        fontSize: rem(18),
        color: '#12475F',
        fontFamily: fonts.fontLato,
        fontStyle: 'medium',
        fontWeight: '500',
        width: '100%',
        maxWidth: rem(665),
        lineHeight: '122%',
        textAlign: 'center',


        '& a': {
            color: '#5cbde8',
            textDecoration: 'none',
            marginRight: rem(10),

        },

        '@media (max-width: 1024px)': {
            fontSize: rem(16),
            maxWidth: '100%',
        },

        '@media (max-width: 768px)': {
            fontSize: rem(15),
            lineHeight: '130%',
        },

        '@media (max-width: 480px)': {
            fontSize: rem(14),
            lineHeight: '135%',
        }
    },

    titleContainer: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(10),
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',

        '@media (max-width: 768px)': {
            gap: rem(8),
        },

        '@media (max-width: 480px)': {
            gap: rem(6),
        }
    },

    addCartBtn: {
        width: '100%',
        maxWidth: rem(448),
        height: rem(54),
        backgroundColor: '#2BAAE2',
        color: 'white',
        borderRadius: rem(41),
        border: 'none',
        fontSize: rem(18),
        fontWeight: '900',
        fontFamily: fonts.fontLato,
        fontStyle: 'black',
        cursor: 'pointer',
        marginTop: rem(10),
        transition: 'all 0.3s ease',

        '&:hover': {
            color: '#2BAAE2',
            backgroundColor: 'white',
            border: `2px solid #2BAAE2`,
        },

        '@media (max-width: 1024px)': {
            maxWidth: rem(400),
            fontSize: rem(17),
        },

        '@media (max-width: 768px)': {
            maxWidth: '100%',
            height: rem(48),
            fontSize: rem(16),
            borderRadius: rem(35),
            marginTop: rem(8),
        },

        '@media (max-width: 480px)': {
            height: rem(44),
            fontSize: rem(15),
            borderRadius: rem(30),
            marginTop: rem(6),
        },

        '@media (hover: none)': {
            '&:hover': {
                color: 'white',
                backgroundColor: '#2BAAE2',
                border: 'none',
            }
        }
    }
};

export const useAddCartStyles = createUseStyles(styles);