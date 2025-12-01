import { createUseStyles } from 'react-jss';
import { rem } from 'assets/styles/abstracts/functions';
import fonts from '../../assets/styles/abstracts/fonts';

const styles = {
    container: {
        width: '100%',
        height: 'auto',
        backgroundColor: '#FFFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        paddingTop: rem(100),
    },
    cards: {
        width: '100%',
        boxShadow: '4px 4px 4px 0px #12475F12',
        paddingTop: rem(24),
        boxSizing: 'border-box',
        zIndex: '1',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        gap: rem(32),
    },
    products: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        padding: rem(16),
        gap: rem(16),
        '& h1': {
            fontSize: rem(32),
            fontWeight: 'bold',
            color: '#12475F',
            marginRight: rem(240),
        }
    },
    buttons: {
        width: 'auto',
        display: 'flex',
        gap: rem(16),
        justifyContent: 'center',
        flexWrap: 'wrap',
    },
    changeBtn: {
        width: rem(200),
        height: rem(50),
        borderRadius: rem(50),
        backgroundColor: '#EAF5FC',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(8),
        cursor: 'pointer',
        border: 'none',
        flexShrink: 0,
    },
    nothingButton: {
        width: rem(200),
        height: rem(50),
        borderRadius: rem(50),
        backgroundColor: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(8),
        flexShrink: 0,
    },
    parag: {
        fontSize: rem(17),
        fontWeight: '700',
        fontFamily: fonts.fontLato,
        lineHeight: '122%',
        color: '#12475F',
        margin: 0,
        border: 'none',
        textAlign: 'center',
    },
    row: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: rem(24),
    },
    card: {
        width: '100%',
        maxWidth: rem(350),
        height: 'auto',
        borderRadius: rem(28),
        boxShadow: '4px 4px 4px 0px #12475F12',
        backgroundColor: 'white',
        marginBottom: rem(24),
    },
    imageContainer: {
        width: rem(72),
        height: rem(72),
        borderRadius: rem(50),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F4',
    },
    priceContainer: {
        width: rem(101),
        padding: rem(2),
        height: rem(56),
        borderRadius: rem(18),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F1F4',
        '& p': {
            fontSize: rem(15),
        }
    },
    subtit: {
        fontSize: rem(16),
        fontWeight: '200',
        textAlign: 'center',
    },
    moreAndLeft: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: rem(10),
        marginTop: rem(24),
        cursor: 'pointer',
    },
    rightArrow: {
        width: rem(20),
        height: rem(20),
        borderRadius: rem(16),
        backgroundColor: '#2BAAE2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        cursor: 'pointer',
    },

    '@media (max-width: 1024px)': {
        products: {
            flexDirection: 'column',
            alignItems: 'center',
        },
        card: {
            maxWidth: rem(360),
        },
    },
    '@media (max-width: 768px)': {
        products: {
            '& h1': {
                width: '100%',
                fontSize: rem(24),
            }
        },
        buttons: {
            marginRight: rem(250),
            width: '100%',
            display: 'flex',

        },
        changeBtn: {
            width: '47%',
            '& p': {
                fontSize: rem(13),
            }
        },
        nothingButton: {
            width: '47%',
            '& p': {
                fontSize: rem(13),
            }
        },
        row: {
            gap: rem(20),
        },
    },
    '@media (max-width: 480px)': {
        card: {
            width: '100%',
        },
        parag: {
            fontSize: rem(15),
        },
        subtit: {
            fontSize: rem(14),
        },
    },
};

export const useProductsPageStyles = createUseStyles(styles);
