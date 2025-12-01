import {createUseStyles} from 'react-jss';
import {rem} from 'assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';
import {breakpoint} from '../../../../assets/styles/abstracts/mixins';

const styles = {
    '@global': {
        body: {
            backgroundColor: '#f8fcff !important',
            margin: 0,
            padding: 0,
        },
    },
    container: {
        width: '100%',
        padding: rem(50),
        paddingLeft: rem(100),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(60),
        marginLeft: 'auto !important',
        marginRight: 'auto !important',
        justifyContent: 'center',
        alignItems: 'center',

    },
    aboutText: {
        fontFamily: `${fonts.fontLato}, sans-serif`,
        fontWeight: 700,
        fontSize: rem(28),
        lineHeight: '1.4',
        color: '#12475F',
    },
    aboutContent: {
        fontFamily: `${fonts.fontLato}, sans-serif`,
        fontWeight: 400,
        fontStyle: 'Regular',
        color: '#12475F',
    },
    row: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        gap: rem(350),
    },

    rowReverse: {
        width: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
    },

    textBlock: {
        flex: 1,
        minWidth: rem(280),
        maxWidth: rem(600),

        '& h3': {
            color: '#12475F',
            fontSize: rem(20),
            marginBottom: rem(8),
        },
        '& p': {
            fontSize: rem(16),
            color: '#333',
            marginBottom: rem(20),
            lineHeight: 1.6,
        },
    },

    imageBlock: {
        flex: 1,
        minWidth: rem(280),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: '100%',
        maxWidth: rem(500),
        borderRadius: rem(12),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    },
    machineImage: {
        width: '100%',
        maxWidth: rem(500),
        borderRadius: rem(12),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        marginRight: rem(240),
    },

    [breakpoint(768)]: {
        container: {
            paddingLeft: rem(20),
            paddingRight: rem(20),
        },
        row: {
            flexDirection: 'column',
        },
        rowReverse: {
            flexDirection: 'column',
        },
        textBlock: {
            width: '100%',
            padding: rem(10),
            backgroundColor: 'transparent',
        },
        image: {
            width: '100%',
            maxWidth: rem(300),
        },
        machineImage: {
            width: '100%',
            maxWidth: rem(300),
            marginRight: 0,
        },
        aboutText: {
            fontSize: rem(22),
        },
        aboutContent: {
            fontSize: rem(14),
        },
    },
};

export const useAboutDetailStyles = createUseStyles(styles);
