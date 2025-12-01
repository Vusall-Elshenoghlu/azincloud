import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";

const styles = {
    container: {
        width: "100%",
        paddingTop: rem(130),
        padding: `0 ${rem(60)}`,
        "@media (max-width: 1024px)": {
            padding: `0 ${rem(40)}`,
            paddingTop: rem(40),
        },
        "@media (max-width: 768px)": {
            padding: `0 ${rem(20)}`,
            paddingTop: rem(30),
        },
        "@media (max-width: 480px)": {
            padding: `0 ${rem(15)}`,
            paddingTop: rem(20),
        },
        "& h1": {
            fontSize: rem(32),
            fontStyle: "bold",
            color: "#12475F",
            fontWeight: "bold",
            textTransform: "capitalize",
            "@media (max-width: 768px)": {
                fontSize: rem(28),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(24),
            },
        },
    },
    cards: {
        width: "100%",
        height: "auto",
        minHeight: rem(265),
        borderRadius: rem(28),
        backgroundColor: "white",
        padding: rem(25),
        marginTop: rem(30),
        "@media (max-width: 768px)": {
            borderRadius: rem(20),
            padding: rem(20),
        },
        "@media (max-width: 480px)": {
            borderRadius: rem(15),
            padding: rem(15),
        },
    },
    cardDetail: {
        width: "100%",
        height: "auto",
        minHeight: rem(125),
        borderRadius: rem(28),
        backgroundColor: "#FFFFFF",
        boxShadow: "0px 4px 16px 0px #12475F12",
        padding: rem(25),
        "@media (max-width: 768px)": {
            borderRadius: rem(20),
            padding: rem(20),
        },
        "@media (max-width: 480px)": {
            borderRadius: rem(15),
            padding: rem(15),
        },
        "& h2": {
            fontFamily: 'Lato',
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '18px',
            lineHeight: '122%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: "#2BAAE2",
            "@media (max-width: 768px)": {
                fontSize: '16px',
            },
            "@media (max-width: 480px)": {
                fontSize: '14px',
            },
        }
    },
    addCard: {
        marginTop: rem(15),
        display: "flex",
        gap: rem(10),
        alignItems: "center",
        "@media (max-width: 480px)": {
            gap: rem(8),
        },
        "& h2": {
            color:"rgba(18, 71, 95, 1)",
            marginTop: rem(5),
            "@media (max-width: 768px)": {
                fontSize: rem(14),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(12),
                marginTop: rem(2),
            },
        }
    },
    plusDiv: {
        width: rem(24),
        height: rem(24),
        backgroundColor: "#2BAAE2",
        borderRadius: "50%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        marginLeft: rem(15),
        flexShrink: 0,
        "@media (max-width: 768px)": {
            width: rem(20),
            height: rem(20),
            marginLeft: rem(10),
        },
        "@media (max-width: 480px)": {
            width: rem(18),
            height: rem(18),
            marginLeft: rem(5),
        },
        "& p": {
            fontSize: rem(18),
            color: "white",
            "@media (max-width: 768px)": {
                fontSize: rem(16),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(14),
            },
        },
    },
    numberAndActive: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: rem(10),
        "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: rem(15),
        },
    },
    numAndMainCard: {
        display: "flex",
        gap: rem(20),
        alignItems: "center",
        flexWrap: "wrap",
        "@media (max-width: 768px)": {
            gap: rem(15),
        },
        "@media (max-width: 480px)": {
            gap: rem(10),
            flexDirection: "column",
            alignItems: "flex-start",
        },
        "& h3": {
            fontSize: rem(14),
            marginTop: rem(8),
            "@media (max-width: 768px)": {
                fontSize: rem(12),
                marginTop: rem(5),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(11),
                marginTop: rem(3),
            },
        },
        height: "auto",
    },
    mainCard: {
        width: rem(89),
        height: rem(28),
        borderRadius: rem(14),
        color: "#2BAAE2",
        backgroundColor: "#EAF7FD",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 768px)": {
            width: rem(70),
            height: rem(24),
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            width: rem(60),
            height: rem(20),
            borderRadius: rem(10),
        },
        "& h4": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: rem(12),
            "@media (max-width: 768px)": {
                fontSize: rem(10),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(9),
            },
        }
    },
    activeButton: {
        width: rem(89),
        height: rem(28),
        transform: 'rotate(0deg)',
        borderRadius: rem(14),
        color: "#00B04E",
        backgroundColor: "#E6F8EE",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 768px)": {
            width: rem(70),
            height: rem(24),
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            width: rem(60),
            height: rem(20),
            borderRadius: rem(10),
        },
        "& h4": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: rem(12),
            width: "auto",
            "@media (max-width: 768px)": {
                fontSize: rem(10),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(9),
            },
        }
    },
    servicesName: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        marginTop: rem(55),
        "@media (max-width: 768px)": {
            marginTop: rem(40),
        },
        "@media (max-width: 480px)": {
            marginTop: rem(30),
        },
    },
    tableHead: {
        width: "100%",
        height: rem(95),
        backgroundImage: colors.navBarBgColor,
        borderRadius: rem(28),
        display: "flex",
        justifyContent: "space-between",
        padding: rem(35),
        paddingTop: rem(15),
        alignItems: "center",
        color: "white",
        fontSize: rem(16),
        fontWeight: "800",
        position: "absolute",
        top: -65,
        "@media (max-width: 768px)": {
            height: rem(80),
            borderRadius: rem(20),
            fontSize: rem(14),
            top: -55,
            paddingLeft: rem(15),
            paddingRight: rem(15),
        },
        "@media (max-width: 480px)": {
            height: rem(70),
            borderRadius: rem(15),
            fontSize: rem(12),
            top: -45,
            paddingLeft: rem(10),
            paddingRight: rem(10),
            justifyContent: "space-between",
        },
        "& h2": {
            "@media (max-width: 768px)": {
                fontSize: rem(14),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(12),
            },
        }
    },
    invoice: {
      marginRight: rem(700),
        "@media (max-width: 768px)": {
          marginLeft: rem(100),
        }
    },
    tableDown: {
        display: "flex",
        flexDirection: "column",
        zIndex: "3",
    },
    tableBody:{
        width: "100%",
        height: "auto",
        minHeight: rem(110),
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: rem(25),
        "@media (max-width: 768px)": {
            padding: rem(15),
            flexDirection: "column",
            alignItems: "flex-start",
            gap: rem(15),
        },
        "@media (max-width: 480px)": {
            padding: rem(10),
            gap: rem(10),
        },
    },
    lastTwoDays: {
        display: "flex",
        gap: rem(20),
        alignItems: "center",
        "@media (max-width: 768px)": {
            gap: rem(10),
        },
        "@media (max-width: 480px)": {
            gap: rem(8),
            flexWrap: "wrap",
        },
        "& h2": {
            marginTop: rem(5),
            color: "#F5B40E !important",
            "@media (max-width: 768px)": {
                marginTop: rem(3),
                fontSize: rem(12),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(10),
                marginTop: rem(2),
            },
        }
    },
    nescafe: {
        display: "flex",
        gap: rem(300),
        alignItems: "center",
        width: "100%",
        "@media (max-width: 1200px)": {
            gap: rem(100),
        },
        "@media (max-width: 768px)": {
            flexDirection: "column",
            gap: rem(15),
            alignItems: "flex-start",
            width: "100%",
        },
        "@media (max-width: 480px)": {
            gap: rem(10),
        },
        "& h2": {
            color:"rgba(18, 71, 95, 1)",
            fontSize: rem(16),
            fontWeight: "500",
            "@media (max-width: 768px)": {
                fontSize: rem(14),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(12),
            },
        },
    },
    paid: {
        width: rem(89),
        height: rem(28),
        transform: 'rotate(0deg)',
        borderRadius: rem(14),
        fontWeight: "700",
        color: "#00B04E",
        backgroundColor: "#E6F8EE",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "@media (max-width: 768px)": {
            width: rem(70),
            height: rem(24),
            borderRadius: rem(12),
        },
        "@media (max-width: 480px)": {
            width: rem(60),
            height: rem(20),
            borderRadius: rem(10),
        },
        "& h4": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: rem(12),
            width: "auto",
            "@media (max-width: 768px)": {
                fontSize: rem(10),
            },
            "@media (max-width: 480px)": {
                fontSize: rem(9),
            },
        }
    },
    unpaid: {
        color:"rgba(239, 98, 108, 1)",
        backgroundColor: "#FEF0F1",
        "& h4": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },
    pending: {
        color: "rgba(245, 180, 14, 1)",
        backgroundColor: "#FBF5E4",
        position: "relative",
        "& h4": {
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
        }
    },
    downloadIcon: {
        cursor: "pointer",
        flexShrink: 0,
        "@media (max-width: 768px)": {
            alignSelf: "flex-end",
        },
        "& svg": {
            "@media (max-width: 768px)": {
                width: rem(20),
                height: rem(20),
            },
            "@media (max-width: 480px)": {
                width: rem(18),
                height: rem(18),
            },
        }
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
        "@media (max-width: 768px)": {
            alignItems: 'center',
            padding: rem(20),
        },
    },

    '@keyframes fadeIn': {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
    },
    lateInfoText: {
        display: "flex",
        gap: rem(10),
        alignItems: "center",
        "@media (max-width: 480px)": {
            gap: rem(8),
        },
    },
    cardIcon:{
        marginRight: rem(10),
        width: rem(20),
        height: rem(20),
        "@media (max-width: 768px)": {
            width: rem(18),
            height: rem(18),
            marginRight: rem(8),
        },
        "@media (max-width: 480px)": {
            width: rem(16),
            height: rem(16),
            marginRight: rem(5),
        },
    },
    paginationContainer: {
        textAlign: "center",
        marginTop: rem(40),
        marginBottom: rem(30),
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        "@media (max-width: 768px)": {
            marginTop: rem(30),
            marginBottom: rem(20),
            marginLeft: 0,
        },
        "@media (max-width: 480px)": {
            marginTop: rem(20),
            marginBottom: rem(15),
        },
        "& .ant-pagination": {
            "@media (max-width: 768px)": {
                "& .ant-pagination-item": {
                    minWidth: rem(32),
                    height: rem(32),
                },
                "& .ant-pagination-prev, & .ant-pagination-next": {
                    minWidth: rem(32),
                    height: rem(32),
                },
            },
            "@media (max-width: 480px)": {
                "& .ant-pagination-item": {
                    minWidth: rem(28),
                    height: rem(28),
                    fontSize: rem(12),
                },
                "& .ant-pagination-prev, & .ant-pagination-next": {
                    minWidth: rem(28),
                    height: rem(28),
                },
            },
        }
    },


};

export const usePaymentStyles = createUseStyles(styles);