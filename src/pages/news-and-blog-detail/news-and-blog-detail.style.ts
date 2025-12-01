import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: rem(30),
        padding: rem(55),

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
    news: {
        width: "100%",
        height: "auto",
    },
    card: {
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        gap: rem(20),

        padding: rem(15),
        "& h1": {
            fontFamily: fonts.fontLato,
            fontWeight: "700",
            fontSize: rem(32),
            lineHeight: "160%",
            paragraphSpacing: rem(18),
            letterSpacing: "0%",
            color: "#12475F",
        },
    },
    date: {
        color: "#2BAAE2",
        fontSize: rem(16),
        fontWeight: "700",
    },
    cardImage: {
        borderRadius: rem(28)
    }
};
export const useNewsAndBlogDetailStyles = createUseStyles(styles);