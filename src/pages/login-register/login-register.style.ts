import { rem } from '../../assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';
import { createUseStyles } from 'react-jss';
import {breakpoint} from '../../assets/styles/abstracts/mixins';

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
    },

    title: {
        fontSize: rem(20),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        marginTop: rem(50),
        fontStyle: 'bold',

        [breakpoint(768)]: {
            fontSize: rem(16),
            marginTop: rem(30),
        },
    },

    cardTitle: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(120),
        marginBottom: rem(40),
        paddingBottom: rem(20),

        [breakpoint(1024)]: {
            gap: rem(60),
        },

        [breakpoint(768)]: {
            flexDirection: 'column',
            gap: rem(16),
            marginBottom: rem(20),
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

    underLine: {
        position: 'absolute',
        top: '100%',
    },

    panel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'visible',
        padding: `${rem(60)} 0`,

        [breakpoint(768)]: {
            padding: `${rem(30)} ${rem(16)}`,
            height: 'auto',
        },
    },

    card: {
        width: rem(1216),
        height: 'auto',
        backgroundImage: 'linear-gradient(to right, #1559A4, #2D99DC)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
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
};

export const useLoginRegister = createUseStyles(styles);