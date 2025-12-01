import {createUseStyles} from 'react-jss';
import {rem} from '../../../../assets/styles/abstracts/functions';
import fonts from '../../../../assets/styles/abstracts/fonts';

const styles = {
    servicesSection: {
        padding: `${rem(80)} 0`,
        textAlign: 'center',
        width: "100%",
        height: "auto",
    },
    cardTitle: {
        fontSize: rem(18),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        fontStyle: 'bold',
        color: '#12475F',
        marginBottom: rem(30),
        marginTop: rem(10),

    },
    title: {
        fontSize: rem(32),
        fontWeight: 700,
        fontStyle: 'bold',
        color: '#12475F',
        fontFamily: fonts.fontLato,
        marginBottom: rem(30),
        marginTop: rem(10),

    },
    description: {
        fontSize: rem(16),
        fontWeight: 400,
        fontStyle: 'regular',
        fontFamily: fonts.fontLato,
        lineHeight: '160%',
        margin: 'auto',
        textAlign: 'center',
        width: "auto",
        color: '#12475F',
    },
    services: {
        overflow: 'hidden',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: rem(40),
        justifyItems: 'center',
        padding: `0 ${rem(20)}`
    },
    serviceContainer: {
        position: 'relative',
        marginTop: rem(30),

    },
    serviceCard: {
        width: rem(280),
        height: rem(260),
        backgroundColor: '#FFFFFF',
        borderRadius: rem(28),
        boxSizing: 'border-box',
        textAlign: 'left',
        display: 'flex',
        position: 'absolute',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: rem(24),
        zIndex: 2,


    },
    cardShadow: {
        position: 'absolute',
        bottom: rem(-10),
        right: rem(-10),
        objectFit: 'contain',
        left: 0,
        width: '100%',
        zIndex: 0
    },
    cardText: {
        fontSize: rem(16),
        fontWeight: 400,
        fontFamily: fonts.fontLato,
        fontStyle: 'regular',
        lineHeight: '160%',
        color: '#12475F',
    },
    cardIcons: {
        position: 'relative',
        width: rem(36),
        height: rem(36),
        margin: `${rem(2)} ${rem(10)} `,

    },
    customersSection: {
        width: '100%',
        height: rem(384),
        backgroundImage: 'linear-gradient( to right, #1559A4, #2D99DC)',
        marginTop: rem(180),
    },
    customersIcon: {
        width: rem(75),
        height: rem(75),
        marginTop: rem(8),
    },
    customersContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: `0 ${rem(100)}`,
    },
    customerCard: {
        textAlign: 'center',
        color: '#fff',
        position: 'relative',
        flex: 1,
    },

    customerTitle: {
        fontSize: rem(24),
        marginTop: rem(16),
        fontWeight: 500,
        fontFamily: fonts.fontLato,
    },

    customerCount: {
        fontSize: rem(50),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        marginTop: rem(12),
    },

    divider: {
        position: 'absolute',
        right: 0,
        top: '50%',
        transform: 'translateY(-50%)',
        height: rem(140),
        width: rem(1),
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    "@media (max-width: 768px)": {
        servicesSection: {
            width: 'auto',
            height: "auto",
            overflow: 'hidden',

        },
        description: {
            fontSize: rem(10),
            height: "auto",
            width: "auto",
            padding: rem(10),
        },
        customersSection: {
            width: '100%',
            height: 'auto',
            backgroundColor: "aquamarine",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: rem(15),
            overflow: 'hidden',
        },
        customersContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: rem(20)
        },
        divider: {
            display: 'none',
        }

    }


};

export const useServicesStyles = createUseStyles(styles);