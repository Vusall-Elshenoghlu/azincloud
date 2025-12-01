import { createUseStyles } from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    techPartnersSection: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: `${rem(60)} ${rem(100)}`,
        height: rem(641),
        overflow: 'hidden',
        maxWidth: '100vw',
        boxSizing: 'border-box',
        background: '#f5f9fc',

        // Responsive start
        '@media (max-width: 1024px)': {
            flexDirection: 'column',
            height: 'auto',
            padding: `${rem(40)} ${rem(20)}`,
        },
    },
    leftContainer: {
        width: '50%',
        position: 'relative',

        '@media (max-width: 1024px)': {
            width: '100%',
            marginBottom: rem(40),
        },
    },
    rightContainer: {
        width: '45%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& img': {
            width: '100%',
            maxWidth: rem(450),
        },

        '@media (max-width: 1024px)': {
            width: '100%',
            '& img': {
                maxWidth: rem(300),
            },
        },
    },
    partnersTitle: {
        fontSize: rem(32),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        color: '#12475F',
        marginBottom: rem(40),
        textAlign: 'center',

        '@media (max-width: 768px)': {
            fontSize: rem(24),
            marginBottom: rem(24),
        },
    },
    swiperContainer: {
        position: 'relative',
        height: rem(320),

        '@media (max-width: 768px)': {
            height: rem(280),
        },

        '@media (max-width: 480px)': {
            height: rem(240),
        },
    },
    customSwiper: {
        height: '100%',
        '& .swiper-wrapper': {
            height: '100%',
        },
        '& .swiper-slide': {
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
        },
    },
    partnersGrid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: rem(20),
        width: '100%',

        '@media (max-width: 480px)': {
            gridTemplateColumns: '1fr',
        },
    },
    card: {
        padding: rem(20),
        borderRadius: rem(16),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: rem(146),
        backgroundColor: 'white',
        animation: '$fadeUp 0.8s ease-in-out',
        '& img': {
            maxWidth: '100%',
            maxHeight: rem(45),
            objectFit: 'contain',
        },

        '@media (max-width: 480px)': {
            height: rem(110),
            padding: rem(12),
        },
    },
    arrow: {
        color: '#dde8ee',
        fontSize: rem(40),
        fontWeight: 600,
        position: 'absolute',
        cursor: 'pointer',
        zIndex: 10,
        width: rem(80),
        height: rem(80),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '50%',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: '#2CACE2',
        },
        '&.custom-swiper-button-next': {
            top: '100%',
        },
        '&.custom-swiper-button-prev': {
            top: '100%',
            left: rem(-60),
        },
        '&.swiper-button-disabled': {
            opacity: 0.5,
            cursor: 'not-allowed',
        },

        '@media (max-width: 768px)': {
            fontSize: rem(32),
            width: rem(60),
            height: rem(60),
        },

        '@media (max-width: 480px)': {
            fontSize: rem(24),
            width: rem(48),
            height: rem(48),
            '&.custom-swiper-button-prev': {
                left: rem(-40),
            },
        },
    },
    details: {
        color: '#2CACE2',
        fontSize: rem(16),
        cursor: 'pointer',
        fontWeight: 500,
    },
    animateUp: {
        animation: '$fadeUp 0.8s ease-in-out',
    },
    '@keyframes fadeUp': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0)',
        },
    },

};

export const usePartnersStyles = createUseStyles(styles);