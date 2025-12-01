import { createUseStyles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';

const  styles = {
    clientSection: {
        padding: `${rem(80)} 0`,
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
    },
    title: {
        fontSize: rem(36),
        fontWeight: 600,
        color: '#2c5282',
        marginBottom: rem(60),
    },
    clientGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(80),
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `0 ${rem(20)}`,
        flexWrap: 'wrap'
    },
    clientLogoContainer: {
        position: 'relative',
        '&:not(:first-child)::before': {
            content: '""',
            position: 'absolute',
            left: rem(-40),
            top: '50%',
            transform: 'translateY(-50%)',
            width: rem(2),
            height: rem(50),
            backgroundColor: '#e2e8f0',
            opacity: 0.5
        }
    },
    clientLogo: {
        height: rem(60),
        width: 'auto',
        objectFit: 'contain',
        transition: 'transform 0.3s ease',
        opacity: 0.7,
        '&:hover': {
            transform: 'scale(1.1)',
            opacity: 1
        }
    },
    '@media (max-width: 768px)': {
        clientGrid: {
            gap: rem(40),
            flexDirection: 'column'
        },
        clientLogoContainer: {
            '&:not(:first-child)::before': {
                display: 'none'
            }
        },
        title: {
            fontSize: rem(28),
            marginBottom: rem(40)
        },
        clientLogo: {
            height: rem(50)
        }
    }
};


export const useClientStyles = createUseStyles(styles);