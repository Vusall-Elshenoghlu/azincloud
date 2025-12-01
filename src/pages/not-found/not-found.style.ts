import { createUseStyles } from 'react-jss';
import { rem } from '../../assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';
import { breakpoint } from '../../assets/styles/abstracts/mixins';

const styles = {
    notFoundSelect: {
        minHeight: '100vh',
        backgroundColor: '#f5f9fc',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [breakpoint(768)]: {
            height: 'auto',
            width: 'auto',
        },
    },
    notFoundContainer: {
        width: rem(1216),
        height: rem(963),
        backgroundColor: 'white',
        margin: `${rem(100)} auto`,
        [breakpoint(768)]: {
            width: 'auto',
            height: 'auto',
        },
    },
    notFoundText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(50),
        padding: rem(10),
        '& p': {
            color: '#12475F',
            fontSize: rem(22),
            fontWeight: 500,
            fontFamily: fonts.fontLato,
            fontStyle: 'medium',
        },
        [breakpoint(768)]: {
            height: 'auto',
            width: 'auto',
        },
    },
    notFoundImage: {
        marginTop: rem(100),
        width: rem(490),
        height: rem(496),
        [breakpoint(768)]: {
            height: rem(303),
            width: rem(300),
        },
    },
    notFoundBtn: {
        display: 'inline-block',
        padding: `${rem(10)} ${rem(24)}`,
        backgroundColor: '#00AEEF',
        color: 'white',
        borderRadius: rem(20),
        textDecoration: 'none',
        fontWeight: 500,
        transition: 'background-color 0.3s',
        '&:hover': {
            backgroundColor: 'white',
            color: '#00AEEF',
        },
    },
};

export const useNotFoundStyles = createUseStyles(styles);
