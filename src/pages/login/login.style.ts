import colors from 'assets/styles/abstracts/color';
import { rem } from 'assets/styles/abstracts/functions';
import { createUseStyles } from 'react-jss';
import fonts from '../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../assets/styles/abstracts/mixins';

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',

        [breakpoint(768)]: {
            width: 'auto',
            overflowX: 'hidden',
        },
    },

    title: {
        fontSize: rem(20),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        marginTop: rem(50),
        fontStyle: 'bold',
    },

    cardTitle: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(120),
        marginBottom: rem(40),
        paddingBottom: rem(20),
    },

    underLine: {
        position: 'absolute',
        top: '100%',
    },

    panel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: rem(40),
        height: rem(855),
        maxHeight: 'auto',
        padding: `${rem(100)} 0`,

        [breakpoint(768)]: {
            width: '90%',
            maxWidth: rem(350),
            padding: rem(20),
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            borderRadius: rem(40),
        },
    },

    or: {
        color: colors.authSubtitleText,
    },

    invalidField: {
        border: '1px solid ' + colors.validationErrorColor,
    },

    rightPhoto: {
        width: '30%',
        position: 'absolute',
        right: '-10%',
        top: '40%',
        transform: 'rotate(-180deg)',

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    leftPhoto: {
        width: '40%',
        position: 'absolute',
        left: '-10%',
        top: '-25%',

        [breakpoint(768)]: {
            display: 'none',
        },
    },

    loginAndRegister: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(10),
    },

    forgotPassword: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '-12px',
        marginBottom: '16px',
        color: 'white',
        cursor: 'pointer',
        fontSize: '13px',
    },

    signinBtn: {
        width: rem(536),
        backgroundColor: '#2BAAE2',
        color: 'white',
        borderRadius: rem(41),
        border: 'none',

        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'black',
            fontFamily: fonts.fontLato,
        },

        [breakpoint(768)]: {
            width: '100%',
        },
    },

    card: {
        width: rem(1216),
        position: 'relative',
        height: '100%',
        borderRadius: '40px',
        backgroundImage: 'linear-gradient(to right, #1559A4, #2D99DC)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
    },

    formInputs: {
        width: rem(536),
        height: rem(54),
        borderRadius: rem(41),

        '& input::placeholder': {
            color: '#12475F ',
        },

        [breakpoint(768)]: {
            width: rem(300),
        },
    },
};

export const useLoginStyles = createUseStyles(styles);
