import {createUseStyles} from 'react-jss';
import {rem} from '../../assets/styles/abstracts/functions';
import colors from '../../assets/styles/abstracts/color';
import fonts from '../../assets/styles/abstracts/fonts';

const styles = {
    container: {
        width: '100%',
        paddingTop: rem(150),
        padding: '5%',
        '& h1': {
            fontSize: rem(32),
            fontWeight: 'bold',
            color: '#12475F',
            textTransform: 'capitalize',
            marginBottom: rem(70),
        },
    },

    personalInfoContainer: {
        width: '100%',
        backgroundImage: colors.navBarBgColor,
        borderRadius: rem(28),
        padding: `${rem(40)} ${rem(60)} ${rem(60)}`,
        marginBottom: rem(30),
    },

    infoRow: {
        margin: 0,
        '& .ant-col': {
            paddingLeft: '0 !important',
            paddingRight: '0 !important',
        }
    },

    infoBox: {
        display: 'flex',
        flexDirection: 'column',
        gap: rem(8),
        height: '100%',
    },

    label: {
        fontSize: rem(16),
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.7)',
        lineHeight: '121%',
        letterSpacing: '0%',
        margin: 0,
        marginBottom: rem(4),
    },

    value: {
        fontFamily: fonts.fontLato,
        fontWeight: '800',
        fontSize: rem(16),
        lineHeight: '121%',
        letterSpacing: '0%',
        color: 'white',
        margin: 0,
        wordBreak: 'break-word',
    },

    changePassword: {
        width: '100%',
        minHeight: rem(76),
        borderRadius: rem(28),
        backgroundColor: 'white',
        boxShadow: '0px 4px 16px 0px rgba(18, 71, 95, 0.07)',
        padding: rem(24),
        display: 'flex',
        alignItems: 'center',
        border: '1px solid rgba(18, 71, 95, 0.1)',
    },

    textAndIcon: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(15),

        '& h2': {
            fontSize: rem(18),
            lineHeight: '122%',
            letterSpacing: '0%',
            fontWeight: '700',
            color: '#12475F',
            margin: 0,
        }
    },

    editIcon: {
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

        '&:hover': {
            opacity: 0.7,
        }
    },

    '@media (max-width: 768px)': {
        personalInfoContainer: {
            padding: rem(24),
        },

        infoBox: {
            marginBottom: rem(24),
        },

        container: {
            padding: '3%',

            '& h1': {
                fontSize: rem(24),
            }
        }
    }
};

export const usePersonalInformationStyles = createUseStyles(styles);