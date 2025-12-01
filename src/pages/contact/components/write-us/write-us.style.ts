import { createUseStyles } from 'react-jss';
import colors from '../../../../assets/styles/abstracts/color';
import { rem } from '../../../../assets/styles/abstracts/functions';
import backGroundImage from 'assets/images/statics/backgrountContact.png';

const styles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#F9F5FC',
        padding: rem(20),
    },
    formWrapper: {
        width: '100%',
        maxWidth: rem(1216),
        height: 'auto',
        backgroundImage: colors.navBarBgColor,
        borderRadius: rem(28),
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
    },
    form: {
        width: '100%',
        maxWidth: '50%',
        height: '100%',
        padding: rem(28),
        '& h1': {
            fontSize: rem(32),
            color: 'white',
        },

        '@media (max-width: 992px)': {
            maxWidth: '100%',
        },
    },
    row: {
        display: 'flex',
        gap: rem(150),
        flexWrap: 'wrap',
    },
    inputName: {
        width: rem(270),
        height: rem(54),
        borderRadius: rem(41),
        border: 'none',
        '&::placeholder': {
            color:'#12475F',
        }

    },
    input: {
        width: '100%',
        height: rem(54),
        borderRadius: rem(41),
        '&::placeholder': {
            color:'#12475F',
        }
    },
    inputText: {
        height: rem(266),
        padding:rem(20),
        '&::placeholder': {
            color:'#12475F',
        }
    },
    notRobot: {
        width: '100%',
        height: rem(83),
        borderRadius: rem(41),
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: rem(20),
    },
    submitButton: {
        width: '100%',
        height: rem(54),
        backgroundColor: '#2BAAE2',
        borderRadius: rem(41),
        border: 'none',
        color: 'white',
        marginTop: rem(50),
        cursor: 'pointer',
        fontSize: rem(18),
        fontWeight: 700,
        '&:hover': {
            backgroundColor: '#329bc6',
        }
    },
    letterImg: {
        width: '100%',
        maxWidth: '50%',
        position: 'relative',
        display: 'block',

        '@media (max-width: 992px)': {
            display: 'none',
        },
    },
    layout: {
        width: rem(594.97),
        height: rem(515.32),
        transform: 'rotate(360deg)',
        backgroundImage: `url(${backGroundImage})`,
        position: 'absolute',
        top: 150,
        left: 0,
    },
    smallLet: {
        position: 'absolute',
        left: 30,
        top: rem(150),
    },
    bigLet: {
        position: 'absolute',
        left: 150,
        top: 110,
        transform: 'rotate()',
    },
    popupOverlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'center',
        zIndex: 9999,
        animation: '$fadeIn 0.3s ease-in-out',
    },

};

export const useWriteUsStyles = createUseStyles(styles);
