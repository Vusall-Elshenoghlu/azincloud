import { createUseStyles } from 'react-jss';
import { rem } from '../../assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../assets/styles/abstracts/mixins';

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
    },
    card: {
        width: rem(1216),
        height: rem(855),
        backgroundImage: 'linear-gradient(to right, #1559A4, #2D99DC)',
        color: 'white',
        borderRadius: rem(28),
        position: 'relative',
        marginTop: rem(60),
        marginBottom: rem(60),

        [breakpoint(1024)]: {
            width: '90%',
            height: rem(720),
        },

        [breakpoint(768)]: {
            width: '100%',
            height: 'auto',
            marginTop: rem(30),
            marginBottom: rem(30),
            borderRadius: rem(16),
        },
    },
    panel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'visible',
        padding: `${rem(60)} 0`,

        [breakpoint(768)]: {
            padding: `${rem(30)} ${rem(16)}`,
        },
    },
    rightPhoto: {
        width: '30%',
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'rotate(-180deg)',

        [breakpoint(1024)]: {
            width: '40%',
            right: '-15%',
            top: '45%',
        },

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    leftPhoto: {
        width: '40%',
        position: 'absolute',
        left: '-10%',
        top: '-25%',

        [breakpoint(1024)]: {
            width: '50%',
            left: '-15%',
        },

        [breakpoint(768)]: {
            display: 'none',
        },
    },
    backAndIcon: {
        display: 'flex',
        gap: rem(10),
    },
    icon: {
        width: rem(36),
        height: rem(36),
        zIndex: 10,
        backgroundColor: '#2BAAE2',
        borderRadius: '50%',
        position: 'relative',
        cursor: 'pointer',

        [breakpoint(576)]: {
            width: rem(28),
            height: rem(28),
        },
    },
    arrow: {
        position: 'absolute',
        left: '20%',
        top: '20%',

        [breakpoint(576)]: {
            left: '15%',
            top: '15%',
        },
    },
    underLine: {
        position: 'absolute',
        top: '100%',

        [breakpoint(576)]: {
            top: '95%',
            width: '50%',
        },
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        flexDirection: 'column',
        '& h2': {
            fontSize: rem(20),
            fontWeight: 700,
            fontFamily: fonts.fontLato,
            fontStyle: 'bold',
            marginTop: rem(70),
            marginBottom: rem(20),
        },

        [breakpoint(992)]: {
            '& h2': {
                fontSize: rem(18),
                marginTop: rem(40),
                marginBottom: rem(16),
            },
        },
    },
    sendBtn: {
        width: rem(536),
        backgroundColor: '#2BAAE2',
        color: 'white',
        borderRadius: rem(41),
        border: 'none',
        padding: rem(26),
        '& h3': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'black',
            fontFamily: fonts.fontLato,
        },

        [breakpoint(992)]: {
            width: '100%',
            padding: rem(20),
            '& h3': {
                fontSize: rem(16),
            },
        },
    },
    fpText: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        gap: rem(20),
        '& p': {
            fontSize: rem(16),
            fontWeight: 500,
            fontFamily: fonts.fontLato,
            fontStyle: 'medium',
            width: rem(286),
            marginTop: rem(20),
        },
        '& span': {
            fontSize: rem(16),
            textAlign: 'center',
            fontWeight: 800,
            fontFamily: fonts.fontLato,
            fontStyle: 'extra-bold',
            marginBottom: rem(20),
        },

        [breakpoint(992)]: {
            '& p': {
                fontSize: rem(14),
                width: '90%',
            },
            '& span': {
                fontSize: rem(14),
            },
        },

        [breakpoint(576)]: {
            gap: rem(14),
            '& p': {
                fontSize: rem(13),
            },
        },
    },
    sendOtp: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: rem(20),

        [breakpoint(576)]: {
            gap: rem(14),
        },
    },
    emailInput: {
        width: rem(536),
        height: rem(54),
        borderRadius: rem(41),
        '&::placeholder': {
            color: '#12475F',
        },

        [breakpoint(992)]: {
            width: '100%',
            height: rem(48),
        },
    },
};

export const useFpStyles = createUseStyles(styles);