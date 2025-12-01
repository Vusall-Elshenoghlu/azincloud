import { createUseStyles } from "react-jss";
import { rem } from "../../../../assets/styles/abstracts/functions";

export const useContactInfoMapStyles = createUseStyles(() => ({
    wrapper: {
        paddingTop: rem(150),
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: rem(20),
        padding: "70px 150px 100px 150px",
        backgroundColor: "#F5F9FC",

        "@media (max-width: 1200px)": {
            padding: "50px 80px",
        },
        "@media (max-width: 768px)": {
            flexDirection: "column",
            padding: "40px 30px",
        },
        "@media (max-width: 480px)": {
            padding: "30px 20px",
        },
    },

    infoSection: {
        flex: 1,
        minWidth: rem(250),
        fontSize: rem(20),
        lineHeight: 1.7,
        display: "flex",
        flexDirection: "column",
        gap: rem(10),
        padding: rem(15),

        "@media (max-width: 768px)": {
            fontSize: rem(18),
            padding: rem(10),
        },
    },

    social: {
        display: "flex",
        flexWrap: "wrap",
        gap: rem(10),
        marginTop: rem(10),
        fontSize: rem(20),
        color: "#555",
    },

    mapSection: {
        flex: 1,
        width: "auto",

        "@media (max-width: 768px)": {
            marginTop: rem(20),
            width: "auto",
            height: "auto",
        },
    },
    mapFrame:{
        width: rem(600),
        height: rem(450),
        '@media (max-width: 768px)': {
            width: "100%",

        }
    }
}));
