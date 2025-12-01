import {createUseStyles} from "react-jss";
import {rem} from "../../../../assets/styles/abstracts/functions";
import fonts from "../../../../assets/styles/abstracts/fonts";

const styles = {
    popupSelect: {
        width: rem(881),
        height: "auto",
        minHeight: rem(528),
        backgroundColor: 'white',
        borderRadius: rem(41),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        padding: rem(40),
        maxWidth: '90vw',
        maxHeight: '90vh',
        overflow: 'auto',
        "@media (max-width: 1200px)": {
            width: rem(700),
            padding: rem(35),
            borderRadius: rem(35),
        },
        "@media (max-width: 992px)": {
            width: rem(600),
            padding: rem(30),
            borderRadius: rem(30),
            maxWidth: '85vw',
        },
        "@media (max-width: 768px)": {
            width: '90vw',
            minWidth: rem(300),
            padding: rem(25),
            borderRadius: rem(25),
            maxHeight: '85vh',
        },
        "@media (max-width: 576px)": {
            width: '95vw',
            padding: rem(20),
            borderRadius: rem(20),
            maxHeight: '90vh',
        },
        "@media (max-width: 480px)": {
            width: '98vw',
            padding: rem(15),
            borderRadius: rem(15),
        }
    },
    closeIcon: {
        position: 'absolute',
        top: rem(20),
        right: rem(20),
        fontSize: rem(24),
        cursor: 'pointer',
        zIndex: 10,
        padding: rem(5),
        borderRadius: '50%',
        transition: 'all 0.3s ease',
        "&:hover": {
            backgroundColor: '#f0f0f0',
            transform: 'scale(1.1)',
        },
        "@media (max-width: 768px)": {
            top: rem(15),
            right: rem(15),
            fontSize: rem(20),
        },
        "@media (max-width: 480px)": {
            top: rem(10),
            right: rem(10),
            fontSize: rem(18),
        }
    },
    popupTitle: {
        color: '#12475F',
        fontSize: rem(18),
        fontWeight: 700,
        marginBottom: rem(30),
        textAlign: 'center',
        "@media (max-width: 768px)": {
            fontSize: rem(16),
            marginBottom: rem(25),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(14),
            marginBottom: rem(20),
        }
    },
    cardDetail: {
        width: '100%',
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 8px 24px rgba(149, 157, 165, 0.2)',
        borderRadius: rem(28),
        padding: rem(25),
        display: 'flex',
        flexDirection: 'column',
        gap: rem(20),
        "@media (max-width: 768px)": {
            borderRadius: rem(20),
            padding: rem(20),
            gap: rem(15),
        },
        "@media (max-width: 480px)": {
            borderRadius: rem(15),
            padding: rem(15),
            gap: rem(12),
        }
    },
    numberAndActive: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid #B7B7B7',
        paddingBottom: rem(10),
        flexWrap: 'wrap',
        gap: rem(10),
        "@media (max-width: 576px)": {
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: rem(15),
        }
    },
    numAndMainCard: {
        display: 'flex',
        alignItems: 'center',
        gap: rem(20),
        flexWrap: 'wrap',
        "@media (max-width: 768px)": {
            gap: rem(15),
        },
        "@media (max-width: 576px)": {
            width: '100%',
            justifyContent: 'space-between',
        },
        "@media (max-width: 480px)": {
            gap: rem(10),
            flexDirection: 'column',
            alignItems: 'flex-start',
        }
    },
    radioInput: {
        width: rem(20),
        height: rem(20),
        borderRadius: '50%',
        flexShrink: 0,
        cursor: 'pointer',
        "@media (max-width: 768px)": {
            width: rem(18),
            height: rem(18),
        },
        "@media (max-width: 480px)": {
            width: rem(16),
            height: rem(16),
        }
    },
    cardNumber: {
        fontSize: rem(14),
        color: '#333',
        fontWeight: 500,
        "@media (max-width: 768px)": {
            fontSize: rem(13),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(12),
        }
    },
    mainCard: {
        backgroundColor: '#EAF7FD',
        color: '#2BAAE2',
        borderRadius: rem(14),
        padding: `${rem(5)} ${rem(15)}`,
        fontSize: rem(12),
        whiteSpace: 'nowrap',
        display: 'inline-block',
        "@media (max-width: 768px)": {
            fontSize: rem(11),
            padding: `${rem(4)} ${rem(12)}`,
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(10),
            padding: `${rem(3)} ${rem(10)}`,
            borderRadius: rem(10),
        }
    },
    activeButton: {
        backgroundColor: '#E6F8EE',
        color: '#00B04E',
        borderRadius: rem(14),
        padding: `${rem(5)} ${rem(15)}`,
        fontSize: rem(12),
        whiteSpace: 'nowrap',
        display: 'inline-block',
        "@media (max-width: 768px)": {
            fontSize: rem(11),
            padding: `${rem(4)} ${rem(12)}`,
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(10),
            padding: `${rem(3)} ${rem(10)}`,
            borderRadius: rem(10),
        }
    },
    deactiveButton: {
        backgroundColor: '#FFE8EA',
        color: '#FF0000',
        borderRadius: rem(14),
        padding: `${rem(5)} ${rem(15)}`,
        fontSize: rem(12),
        whiteSpace: 'nowrap',
        display: 'inline-block',
        "@media (max-width: 768px)": {
            fontSize: rem(11),
            padding: `${rem(4)} ${rem(12)}`,
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            fontSize: rem(10),
            padding: `${rem(3)} ${rem(10)}`,
            borderRadius: rem(10),
        }
    },
    addCard: {
        color: '#2BAAE2',
        display: 'flex',
        alignItems: 'center',
        gap: rem(10),
        marginTop: rem(10),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        "&:hover": {
            opacity: 0.8,
        },
        "@media (max-width: 480px)": {
            gap: rem(8),
            marginTop: rem(8),
        },
        '& span': {
            fontSize: rem(20),
            fontWeight: 'bold',
            "@media (max-width: 768px)": {
                fontSize: rem(18),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(16),
            }
        },
        '& p': {
            fontSize: rem(14),
            fontWeight: 600,
            "@media (max-width: 768px)": {
                fontSize: rem(13),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(12),
            }
        }
    },
    buttonContainer: {
        display: 'flex',
        gap: rem(20),
        marginTop: rem(40),
        width: '100%',
        justifyContent: 'center',
        "@media (max-width: 768px)": {
            gap: rem(15),
            marginTop: rem(30),
        },
        "@media (max-width: 576px)": {
            flexDirection: 'column',
            gap: rem(15),
            alignItems: 'center',
        },
        "@media (max-width: 480px)": {
            gap: rem(12),
            marginTop: rem(25),
        }
    },
    cancelBtn: {
        width: rem(202),
        borderRadius: rem(41),
        borderColor: '#12475F',
        borderWidth: '1px',
        backgroundColor: 'transparent',
        height: rem(54),
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "@media (max-width: 768px)": {
            width: rem(180),
            height: rem(48),
            borderRadius: rem(35),
        },
        "@media (max-width: 576px)": {
            width: '100%',
            maxWidth: rem(300),
        },
        "@media (max-width: 480px)": {
            height: rem(44),
            borderRadius: rem(30),
        },
        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'black',
            fontFamily: fonts.fontLato,
            color: '#12475F',
            margin: 0,
            "@media (max-width: 768px)": {
                fontSize: rem(16),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(14),
            }
        },
        '&:hover p': {
            color: 'white !important',
        },
        '&:hover': {
            backgroundColor: '#12475F !important',
            border: 'none',
        }
    },
    payBtn: {
        width: rem(202),
        borderRadius: rem(41),
        backgroundColor: '#2BAAE2',
        border: 'none',
        height: rem(54),
        color: 'white',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        "@media (max-width: 768px)": {
            width: rem(180),
            height: rem(48),
            borderRadius: rem(35),
        },
        "@media (max-width: 576px)": {
            width: '100%',
            maxWidth: rem(300),
        },
        "@media (max-width: 480px)": {
            height: rem(44),
            borderRadius: rem(30),
        },
        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'black',
            fontFamily: fonts.fontLato,
            color: 'white',
            margin: 0,
            "@media (max-width: 768px)": {
                fontSize: rem(16),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(14),
            }
        },
        '&:hover p': {
            color: '#2BAAE2',
        },
        '&:hover': {
            backgroundColor: 'white !important',
            color: '#2BAAE2',
            border: '1px solid #2BAAE2 !important',
        }
    },

    cardList: {
        width: '100%',
        maxHeight: rem(300),
        overflowY: 'auto',
        "@media (max-width: 768px)": {
            maxHeight: rem(250),
        },
        "@media (max-width: 480px)": {
            maxHeight: rem(200),
        }
    },

    loadingContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: rem(100),
        color: '#666',
        fontSize: rem(14),
    },

    errorMessage: {
        color: '#FF4757',
        fontSize: rem(14),
        textAlign: 'center',
        padding: rem(10),
        backgroundColor: '#FFE8EA',
        borderRadius: rem(8),
        margin: `${rem(10)} 0`,
        "@media (max-width: 480px)": {
            fontSize: rem(12),
            padding: rem(8),
        }
    }
};

export const useCardPopupStyles = createUseStyles(styles);