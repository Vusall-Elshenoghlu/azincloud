import { createUseStyles } from 'react-jss';
import { rem } from '../../assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';
import colors from "../../assets/styles/abstracts/color";

const styles = {
    page: {
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: rem(32),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        color: '#12475F',
        marginTop: rem(50),
    },
    container: {
        width: '100%',
        padding: rem(80),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(60),
    },
    tableContainer: {
        width: '100%',
        overflow: 'hidden',
    },
    tableHead: {
        height: rem(75),
        backgroundImage: colors.navBarBgColor,
        borderRadius: `${rem(28)} ${rem(28)} 0 0`,
        display: 'flex',
        justifyContent: 'space-between',
        color: 'white',
        fontSize: rem(16),
        fontWeight: 800,
        alignItems: 'center',
        padding: `0 ${rem(40)}`,
    },
    tableBody: {
        width: '100%',
        height: rem(110),
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${rem(40)}`,
        borderBottom: '1px solid #f0f0f0',
    },
    mobilePhone: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(10),
        minWidth: rem(150),
        margin: `0 ${rem(40)}`,
    },
    invoice: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(10),
        minWidth: rem(120),
        marginRight: rem(210),
    },
    name: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: rem(10),
        minWidth: rem(200),
    },
    email: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(10),
        minWidth: rem(200),
        marginRight: rem(80),
    },
    searchIcon: {
        width: rem(20),
        height: rem(20),
        cursor: 'pointer',
    },
    tableRow: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: rem(10),
        borderBottom: '1px solid #ccc',
    },
    status: {
        fontWeight: 'bold',
        minWidth: rem(100),
    },
    lateInfo: {
        color: '#F5B40E',
        fontFamily: fonts.fontLato,
        fontWeight: 500,
        fontSize: rem(14),
        marginLeft: rem(5),
    },
    paid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: rem(80),
        height: rem(28),
        borderRadius: rem(14),
        color: '#00B04E',
        backgroundColor: '#E6F8EE',
        padding: `0 ${rem(12)}`,
        position: 'relative',
        whiteSpace: 'nowrap',
        marginBottom: rem(10),
        marginTop: rem(20),
        '& h4': {
            margin: 0,
            padding: 0,
            fontSize: rem(12),
            fontWeight: 600,
            lineHeight: 1,
        },
    },
    statusPaid: {
        color: '#00B04E',
        backgroundColor: '#E6F8EE',
    },
    statusUnpaid: {
        color: '#FF4757',
        backgroundColor: '#FFE8EA',
    },
    statusPending: {
        color: '#FFA726',
        backgroundColor: '#FFF3E0',
    },
    statusCompleted: {
        color: '#2196F3',
        backgroundColor: '#E3F2FD',
    },
    tableBodyItem: {
        alignItems: 'center',
        minWidth: 0,
        '&:first-child': {
            flex: 2,
            justifyContent: 'flex-start',
        },
        '&:nth-child(2)': {
            flex: 2,
            justifyContent: 'center',
        },
        '&:nth-child(3)': {
            flex: 1.5,
            justifyContent: 'center',
        },
        '&:nth-child(4)': {
            flex: 1,
            justifyContent: 'center',
        },
        '&:last-child': {
            flex: 1,
            justifyContent: 'center',
        },
    },
    lockIcon: {
        width: rem(24),
        height: rem(24),
        marginLeft: rem(35),
    },
    moreCircle: {
        width: rem(24),
        height: rem(24),
        marginLeft: rem(35),
    },

    '@media (max-width: 1126px)': {
        tableBodyItem: {
            fontSize: rem(13.2),
            width: 'auto',
        },
    },
    '@media (max-width: 992px)': {
        tableHead: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'auto',
            gap: rem(12),
            padding: rem(20),
        },
        tableBody: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            height: 'auto',
            padding: rem(20),
            gap: rem(12),
        },
        tableBodyItem: {
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between',
            paddingBottom: rem(8),
            '& h2': {
                fontSize: rem(16),
            },
            '& p': {
                fontSize: rem(14),
            },
            '&:first-child, &:nth-child(2), &:nth-child(3), &:nth-child(4), &:last-child': {
                flex: 'initial',
            },
        },
        lockIcon: {
            marginLeft: 0,
        },
        moreCircle: {
            marginLeft: rem(10),
        },
        name: {
            flexDirection: 'row',
            flexWrap: 'wrap',
        },
        email: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginRight: 0,
        },
        mobilePhone: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            margin: 0,
        },
        invoice: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginRight: 0,
        },
    },
    '@media (max-width: 576px)': {
        title: {
            fontSize: rem(24),
            textAlign: 'center',
            marginTop: rem(20),
        },
        container: {
            padding: rem(20),
        },
        tableHead: {
            fontSize: rem(14),
        },
        searchIcon: {
            width: rem(16),
            height: rem(16),
        },
        paid: {
            fontSize: rem(10),
            padding: `0 ${rem(8)}`,
        },
        lateInfo: {
            fontSize: rem(12),
        },
    },
};

export const useCustomersStyles = createUseStyles(styles);
