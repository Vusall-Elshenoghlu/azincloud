import {createUseStyles} from "react-jss";
import {rem} from "../../../assets/styles/abstracts/functions";
import fonts from "../../../assets/styles/abstracts/fonts";
import {breakpoint} from "../../../assets/styles/abstracts/mixins";

const styles = {
    container: {
        width: "auto",
        height: rem(600),
        display: "flex",
        justifyContent: "center",
    },
    cloudContainer:{
        position: 'relative',

    },
    cloud: {
        width: rem(600),
        height: rem(396),
        marginTop: rem(50),
        paddingRight:  rem(80),
    },
    about: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginRight: rem(200),
    },
    aboutText: {
        fontFamily: fonts.fontLato,
        fontWeight: "700",
        fontStyle: "bold",
        fontSize: rem(32),
        lineHeight: "122%",
        color: "#12475F"
    },
    showMoreButton: {
        width: rem(192),
        height: rem(54),
        backgroundColor: "#2BAAE2",
        borderRadius: rem(41),
        marginTop: rem(20),
        fontFamily: fonts.fontLato,
        fontWeight: 900,
        fontSize: rem(18),
        fontStyle: "black",
        border: "none",
        color: "white",
        cursor: "pointer",
    },
    content: {
        fontFamily: fonts.fontLato,
        fontWeight: 400,
        fontStyle:  "Regular",
        fontSize: rem(16),
        color: '#12475F',
        lineHeight: "160%",
        width: rem(685),
        marginTop: rem(20),
    },
    cloudImgMask:{
        position: "absolute",
        width: rem(450),
        left:rem(-10),
        top:rem(50),
    },

    [breakpoint(1024)]: {
        container: {
            flexDirection: "column",
            alignItems: "center",
            padding: `${rem(30)} ${rem(40)}`,
            gap: rem(30),
        },
        about: {
            marginRight: 0,
            alignItems: "center",
            textAlign: "center",
        },
        aboutText: {
            fontSize: rem(28),
        },
        showMoreButton: {
            width: rem(160),
            height: rem(48),
            fontSize: rem(16),
            alignSelf: "center",
        },
        content: {
            fontSize: rem(15),
            width: "100%",
        },
        cloud: {
            width: "100%",
            height: "auto",
            marginTop: rem(30),
            paddingRight: 0,
        },
        cloudImgMask: {
            width: rem(350),
            left: rem(0),
            top: rem(40),
        },
    },

    [breakpoint(768)]: {
        container: {
            flexDirection: "column",
            padding: `${rem(20)} ${rem(20)}`,
            alignItems: "center",
            gap: rem(20),
        },
        cloud: {
            width: "100%",
            height: "auto",
            marginTop: rem(20),
            paddingRight: 0,
        },
        cloudImgMask: {
            width: rem(300),
            top: rem(30),
            left: "0",
        },
        about: {
            alignItems: "center",
            textAlign: "center",
            marginRight: 0,
        },
        aboutText: {
            fontSize: rem(24),
        },
        content: {
            fontSize: rem(14),
            width: "100%",
        },
        showMoreButton: {
            width: rem(140),
            height: rem(44),
            fontSize: rem(15),
            alignSelf: "center",
        },
    },

    [breakpoint(480)]: {
        aboutText: {
            fontSize: rem(22),
        },
        content: {
            fontSize: rem(13),
        },
        showMoreButton: {
            width: rem(130),
            height: rem(40),
            fontSize: rem(14),
        },
        cloudImgMask: {
            width: rem(250),
            top: rem(20),
        },
    },
};



export const useAboutStyles = createUseStyles(styles);