import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";
import colors from "../../assets/styles/abstracts/color";
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {

    container: {
        width: "100%",
        paddingTop: rem(100),
        padding: "5%",
        "& h1": {
            fontSize: rem(32),
            fontStyle: "bold",
            color: "#12475F",
            fontWeight: "bold",
            textTransform: "capitalize",
        margin: `${rem(60)} 0`,
        },
    },
    personalInfoContainer: {
        display: "flex",
        gap: rem(40),
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop: rem(70),
        width: "100%",
        height: "auto",
        backgroundImage: colors.navBarBgColor,
        borderRadius: rem(28),
        padding: `${rem(40)} ${rem(50)} ${rem(60)}`,
    },

    infoBox: {
        display: "flex",
        flexDirection: "column",
        width: rem(270),
        height: rem(43),
        gap: rem(10),
        "& p": {
            fontSize: rem(16),
            fontWeight: "400",
            color: "white",
            opacity: "0,5",
            lineHeight: "100%",
            letterSpacing: "0%"
        },
        "& h3": {
            fontFamily: fonts.fontLato,
            fontWeight: 800,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '100%',
            letterSpacing: '0%',
            color: 'white',
        }
    },
    emailBox: {
       marginRight: "27%",
    },
    emailContainer: {
        width: "100%",
        height: rem(265),
        boxShadow: "0px 4px 16px 0px rgba(18, 71, 95, 0.07)",
        borderRadius: rem(28),
        backgroundColor: "white",
        marginTop: rem(20),
        padding: rem(25),
    },
    emailDiv: {
        width: "100%",
        height: rem(171),
        boxShadow: "0px 4px 16px 0px rgba(18, 71, 95, 0.07)",
        borderRadius: rem(28),
        padding: rem(25),
        display: "flex",
        flexDirection: "column",
        gap: rem(15),
        "& h3": {
            color: "#2BAAE2",
            fontWeight: "700"
        }

    },
    emailInput: {
        display: "flex",
        justifyContent: "space-between",
    },
    customCheckbox: {
        borderRadius: "50%"
    },
    line: {
        height: "0",
        width: "100%",
        border: "1px solid #B7B7B7",
    },
    newEmail: {
        display: "flex",
        justifyContent: "flex-start",
        gap: rem(15),
    },
    mainEmailBtn: {
        width: rem(89),
        height: rem(28),
        borderRadius: rem(14),
        backgroundColor: "#ABD8FD",
        position: "relative",
        "& h1": {
            position: 'absolute',
            top: 8,
            left: 15,
            fontSize: rem(12),
            color: "#2BAAE2",
            fontWeight: "700",
        }
    },
    addCard: {
        marginTop: rem(15),
        display: "flex",
        gap: rem(10),
        "& h2": {
            color:"rgba(18, 71, 95, 1)",
            marginTop: rem(5),
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
        "& p": {
            fontSize: rem(18),
            color: "white"
        },
    },
    changePasswordContainer: {
        marginTop: rem(25),
        width: "100%",
        height: rem(428),
        backgroundColor: "#FFF",
        boxShadow: "0px 4px 16px 0px rgba(18, 71, 95, 0.07)",
        borderRadius: rem(28),
        padding: rem(25),
        "& h2": {
            fontSize: rem(18),
            fontWeight: "700",
            lineHeight: "122%",
            color:"#12475F"
        },
        "@media (max-width: 768px)": {
            display: "flex",
            flexDirection: "column",
        }
    },
    inputContainer: {
        width: "50%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: rem(20),
        padding: rem(10),
        marginTop: rem(20),
        "@media (max-width: 768px)": {
            width: "100%",
        }
    },
    changePasswordDiv: {
        width: "100%",
        height: rem(54),
        backgroundColor: "#F3F6F7",
        borderRadius: rem(41),
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    changePasswordInput: {
        height: "60%",
        width: "95%",
        backgroundColor: "#F3F6F7",

    },
    newPasswordDiv: {
        width: "49%",
    },
    newPasswordInputs: {
        display: "flex",
        gap: rem(15),
        border: "none"
    },
    buttons: {
        width: "100%",
        height: rem(54),
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: rem(22),
        "@media (max-width: 768px)": {
            width: "auto",
            height: "auto",
            display: "flex",
            flexDirection: "column",
        }
    },

    declineBtn: {
        width: rem(257),
        height: rem(54),
        borderRadius: rem(41),
        border: "1px solid #12475F",
        backgroundColor: "white",
        color: "#12475F",
        fontSize: rem(18),
        fontWeight: "900",
        cursor:  "pointer",
        "&:hover": {
            backgroundColor: "#2BAAE2",
            color: 'white',
            transition: "background 0.5s ease-out",
        }
    },
    continueBtn: {
        backgroundColor: "#2BAAE2",
        color: 'white',
        cursor: "pointer",
        width: rem(257),
        height: rem(54),
        borderRadius: rem(41),
        border: "1px solid #12475F",
        fontSize: rem(18),
        fontWeight: "900",
        "&:hover": {
            backgroundColor: "#2BAAF4",
        }
    },
};

export const usePersonalSettingsStyles = createUseStyles(styles);