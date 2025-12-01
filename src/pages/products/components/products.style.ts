import { createUseStyles } from "react-jss";
import { rem } from "assets/styles/abstracts/functions";

const breakpoints = {
    tablet: '1024px',
    mobile: '768px',
    small: '480px'
};

const styles = {
    container: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: `${rem(0)} ${rem(20)}`,
        backgroundColor: 'transparent',
        position: 'relative',
        top: rem(-80),
        zIndex: 2,

        [`@media (max-width: ${breakpoints.tablet})`]: {
            top: rem(30),
            padding: `${rem(0)} ${rem(15)}`,
        },
        [`@media (max-width: ${breakpoints.mobile})`]: {
            top: rem(80),
            padding: `${rem(0)} ${rem(10)}`,
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            top: rem(100),
        },
    },

    cards: {
        width: '100%',
        maxWidth: rem(1200),
        backgroundColor: 'white',
        borderRadius: rem(28),
        boxShadow: '0 8px 32px rgba(18, 71, 95, 0.08)',
        padding: rem(40),
        boxSizing: 'border-box',

        [`@media (max-width: ${breakpoints.tablet})`]: {
            padding: rem(30),
            borderRadius: rem(24),
        },
        [`@media (max-width: ${breakpoints.mobile})`]: {
            padding: rem(20),
            borderRadius: rem(20),
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            padding: rem(16),
            borderRadius: rem(16),
        },
    },

    tabsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(16),
        marginBottom: rem(40),

        [`@media (max-width: ${breakpoints.mobile})`]: {
            flexDirection: 'column',
            gap: rem(12),
            marginBottom: rem(30),
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            marginBottom: rem(24),
        },
    },

    activeTab: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(8),
        padding: `${rem(12)} ${rem(24)}`,
        backgroundColor: '#EAF5FC',
        border: 'none',
        borderRadius: rem(25),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: rem(180),

        [`@media (max-width: ${breakpoints.mobile})`]: {
            width: '100%',
            maxWidth: rem(280),
            padding: `${rem(10)} ${rem(20)}`,
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            minWidth: rem(160),
            padding: `${rem(8)} ${rem(16)}`,
        },
    },

    inactiveTab: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(8),
        padding: `${rem(12)} ${rem(24)}`,
        backgroundColor: 'transparent',
        border: 'none',
        borderRadius: rem(25),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        minWidth: rem(180),

        '&:hover': {
            backgroundColor: '#f8f9fa',
        },

        [`@media (max-width: ${breakpoints.mobile})`]: {
            width: '100%',
            maxWidth: rem(280),
            padding: `${rem(10)} ${rem(20)}`,
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            minWidth: rem(160),
            padding: `${rem(8)} ${rem(16)}`,
        },
    },

    tabText: {
        fontSize: rem(16),
        fontWeight: '600',
        fontFamily: 'Lato, sans-serif',
        color: '#12475F',
        margin: 0,

        [`@media (max-width: ${breakpoints.mobile})`]: {
            fontSize: rem(14),
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            fontSize: rem(13),
        },
    },

    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: rem(300),
    },

    productsGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: rem(24),
        marginBottom: rem(32),

        [`@media (max-width: ${breakpoints.tablet})`]: {
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: rem(20),
        },
        [`@media (max-width: ${breakpoints.mobile})`]: {
            gridTemplateColumns: '1fr',
            gap: rem(16),
            marginBottom: rem(24),
        },
    },

    productCard: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: rem(24),
        backgroundColor: 'white',
        borderRadius: rem(20),
        boxShadow: '0 4px 16px rgba(18, 71, 95, 0.06)',
        transition: 'all 0.3s ease',
        minHeight: rem(220),
        justifyContent: 'space-between',

        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 8px 24px rgba(18, 71, 95, 0.12)',
        },

        [`@media (max-width: ${breakpoints.mobile})`]: {
            padding: rem(20),
            minHeight: rem(200),
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            padding: rem(16),
            minHeight: rem(180),
        },
    },

    productIcon: {
        width: rem(64),
        height: rem(64),
        backgroundColor: '#F8F9FA',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: rem(16),

        '& img': {
            width: rem(32),
            height: rem(32),
        },

        [`@media (max-width: ${breakpoints.small})`]: {
            width: rem(56),
            height: rem(56),
            marginBottom: rem(12),

            '& img': {
                width: rem(28),
                height: rem(28),
            },
        },
    },

    productTitle: {
        fontSize: rem(18),
        fontWeight: '700',
        fontFamily: 'Lato, sans-serif',
        color: '#12475F',
        margin: `0 0 ${rem(8)} 0`,
        lineHeight: '1.3',

        [`@media (max-width: ${breakpoints.mobile})`]: {
            fontSize: rem(16),
        },
        [`@media (max-width: ${breakpoints.small})`]: {
            fontSize: rem(15),
        },
    },

    productSubtitle: {
        fontSize: rem(14),
        fontWeight: '400',
        fontFamily: 'Lato, sans-serif',
        color: '#6B7280',
        margin: `0 0 ${rem(16)} 0`,
        lineHeight: '1.4',

        [`@media (max-width: ${breakpoints.small})`]: {
            fontSize: rem(13),
            margin: `0 0 ${rem(12)} 0`,
        },
    },

    productPrice: {
        backgroundColor: '#F1F5F9',
        borderRadius: rem(12),
        padding: `${rem(8)} ${rem(16)}`,

        '& span': {
            fontSize: rem(14),
            fontWeight: '600',
            fontFamily: 'Lato, sans-serif',
            color: '#12475F',
        },

        [`@media (max-width: ${breakpoints.small})`]: {
            padding: `${rem(6)} ${rem(12)}`,

            '& span': {
                fontSize: rem(13),
            },
        },
    },

    moreSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: rem(16),
        borderTop: '1px solid #E5E7EB',
    },

    moreLink: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(8),
        textDecoration: 'none',
        transition: 'all 0.3s ease',

        '&:hover': {
            transform: 'translateX(4px)',
        },
    },

    moreText: {
        fontSize: rem(16),
        fontWeight: '600',
        fontFamily: 'Lato, sans-serif',
        color: '#2BAAE2',
        margin: 0,

        [`@media (max-width: ${breakpoints.mobile})`]: {
            fontSize: rem(14),
        },
    },

    moreArrow: {
        width: rem(24),
        height: rem(24),
        backgroundColor: '#2BAAE2',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontSize: rem(12),
        transition: 'all 0.3s ease',

        [`@media (max-width: ${breakpoints.small})`]: {
            width: rem(20),
            height: rem(20),
            fontSize: rem(10),
        },
    },
};

export const useProductsStyles = createUseStyles(styles);