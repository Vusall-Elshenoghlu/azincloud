import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";

const styles = {
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",

        gap: rem(30),
        padding: rem(55),
        "& h1": {
            fontSize: rem(32),
            fontStyle: "bold",
            color:"#12475F",
            fontWeight: "bold",
            textTransform: "capitalize",

        },
        "& p": {
            fontSize: rem(14),
        },
        "& h3": {
            fontSize: rem(16),
            color:"#12475F"
        }
    },

    terms: {
        width: "95%",
        height: "auto",
        padding: rem(25),
        color:"#12475F",
        borderRadius: rem(28),
        display: "flex",
        flexDirection: "column",

        lineHeight:rem(26),
        letterSpacing: "0.3%",
        background: "white",
        "& h1": {
            fontSize: rem(18),
        }
    },
    backAndIcon: {
        display: "flex",
        gap: rem(5),
    },
    icon: {
        width: rem(36),
        height: rem(36),
        backgroundColor: "#2BAAE2",
        borderRadius: "50%",
        position: "relative",
        cursor: "pointer",
    },
    arrow: {
        position: "absolute",
        left: "20%",
        top: "20%"
    },
    line: {
        width: "auto",
        height: "0",
        border:"0.5px solid gray",
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
        },
        "@media (max-width: 768px)": {
            width: "100%",
        }
    },
    continueBtn: {
        backgroundColor: "#95D4F0",
        color: "#ACDDF3",
        cursor: "not-allowed",
        width: rem(257),
        height: rem(54),
        borderRadius: rem(41),
        border: "1px solid #12475F",
        fontSize: rem(18),
        fontWeight: "900",
        "@media (max-width: 768px)": {
            width: rem(200),
        }
    },
    checkedContinueBtn: {
        backgroundColor: "#2BAAE2",
        color: "white",
        cursor: "pointer",
        "@media (max-width: 768px)": {
            width: rem(200),
        }
    }

};
export const useTermsStyles = createUseStyles(styles);