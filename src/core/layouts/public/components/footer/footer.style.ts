import { createUseStyles } from 'react-jss';
import { rem } from '../../../../../assets/styles/abstracts/functions';
import fonts from '../../../../../assets/styles/abstracts/fonts';

const styles = {
    footerSection: {
        width: '100%',
        backgroundColor: '#f0f1f4',
        display: 'flex',
        flexDirection: 'column',
    },
    footerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: `${rem(30)} ${rem(100)}`,
        marginTop: rem(20),
        flexWrap: 'wrap',
        gap: rem(30),

        '@media (max-width: 1200px)': {
            padding: `${rem(30)} ${rem(60)}`,
        },
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'center',
            padding: `${rem(30)} ${rem(20)}`,
            height: "auto !important",
            gap: rem(20),
        },
    },
    inputContainer: {
        width: rem(458),
        marginTop: rem(30),

        '@media (max-width: 768px)': {
            width: '100%',
        },

        '& p': {

            color: '#12475F',
            fontSize: rem(16),
            fontWeight: 600,
            fontFamily: fonts.fontLato,
            marginBottom: rem(25),
        },
    },
    inputGroup: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: rem(30),
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        height: rem(50),
        position: 'relative',
        width: '100%',
        maxWidth: rem(458),

        '@media (max-width: 768px)': {
            maxWidth: '100%',
            height: rem(50),
        },
    },

    input: {
        padding: `0 ${rem(20)}`,
        flex: 1,
        border: 'none',
        outline: 'none',
        fontFamily: fonts.fontLato,
        fontSize: rem(14),
        backgroundColor: 'white',
        borderRadius: rem(30),
        height: '100%',
        position: 'relative',
        zIndex: 2,

        '@media (max-width: 768px)': {
            borderRadius: rem(30),
        },

        '&::placeholder': {
            color: '#12475F',
        },
    },

    subscrBtn: {
        padding: `0 ${rem(40)}`,
        backgroundColor: '#2BAAE2',
        color: 'white',
        border: 'none',
        fontFamily: fonts.fontLato,
        fontWeight: 600,
        cursor: 'pointer',
        fontSize: rem(14),
        whiteSpace: 'nowrap',
        borderRadius: rem(30),
        height: rem(50),
        marginLeft: rem(-12), // inputla azca üst-üstə keçməsi üçün
        zIndex: 3, // inputun üstündə görünsün
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',

        minWidth: rem(130),

        '@media (max-width: 768px)': {
            minWidth: rem(130),
            height: rem(50),
            marginLeft: rem(-12),
            borderRadius: rem(30),
        },

        '&:hover': {
            backgroundColor: '#1F8BC4',
        },
    },
    contactsContainer: {
        width: '25%',
        display: 'flex',
        gap: rem(15),
        flexDirection: 'column',

        '@media (max-width: 768px)': {
            width: '100%',
        },
    },
    contactItem: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),

        '& p': {
            fontFamily: fonts.fontLato,
            fontSize: rem(16),
            margin: 0,
            color: '#12475F',
            lineHeight: 1.4,
        }
    },
    contactIcon: {
        color: '#12475F',
        fontSize: rem(22),
        flexShrink: 0,
    },
    mediaIconsContainer: {
        color: '#12475F',
        fontSize: rem(25),
        width: '17%',
        display: 'flex',
        flexDirection: 'column',
        gap: rem(15),

        '@media (max-width: 768px)': {
            width: '100%',
            alignItems: 'center',
        },

        '& a': {
            fontFamily: fonts.fontLato,
            fontSize: rem(16),
            margin: 0,
            cursor: 'pointer',
            transition: 'color 0.3s ease',

            '&:hover': {
                color: '#2BAAE2',
            },
        }
    },
    divider: {
        width: '1px',
        height: rem(120),
        backgroundColor: '#D2D7DF',
        margin: `0 ${rem(10)}`,
        alignSelf: 'stretch',

        '@media (max-width: 768px)': {
            display: 'none',
        },
    },
    socialMediaIcons: {
        display: 'flex',
        gap: rem(15),
        marginTop: rem(10),
        fontSize: rem(25),
        alignItems: 'center',

        '@media (max-width: 768px)': {
            justifyContent: 'center',
        },

        '& a': {
            color: '#12475F',
            transition: 'color 0.3s ease, transform 0.2s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '&:hover': {
                color: '#2BAAE2',
                transform: 'translateY(-2px)',
            },
        },
    },
    bottomBar: {
        backgroundColor: '#e1e6ed',
        padding: rem(15),
        textAlign: 'center',
        fontSize: rem(14),
        fontFamily: fonts.fontLato,
        color: '#12475F',

        '& a': {
            color: '#2BAAE2',
            textDecoration: 'none',

            '&:hover': {
                textDecoration: 'underline',
            },
        }
    },

};

export const useFooterStyles = createUseStyles(styles);