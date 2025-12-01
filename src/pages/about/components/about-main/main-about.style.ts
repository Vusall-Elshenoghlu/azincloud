import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import colors from '../../../../assets/styles/abstracts/color';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    container: {
        width: '100%',
        minHeight: rem(600),
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        padding: rem(20),
        gap: rem(40),
        backgroundImage: colors.navBarBgColor
    },

    cloud: {
        maxWidth: rem(500),
        width: '100%',
        height: 'auto',
    },

    about: {
        maxWidth: rem(800),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: rem(20),
        textAlign: 'left',
    },

    aboutText: {
        fontFamily: `${fonts.fontLato}, sans-serif`,
        fontWeight: 700,
        fontSize: rem(28),
        lineHeight: '1.4',
        color: 'white',
    },

    content: {
        fontFamily: `${fonts.fontLato}, sans-serif`,
        fontWeight: 400,
        fontSize: rem(16),
        lineHeight: '1.6',
        color: '#F9F9F9',
    },



};

export const useAboutStyles = createUseStyles(styles);
