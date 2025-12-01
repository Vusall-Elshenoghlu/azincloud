import { createUseStyles } from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";

const styles = {
    container: {
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFF",
        paddingTop: rem(80),
        flexDirection: "column",
        overflow: "hidden",
    },
    wrapper: {
        width: "90%",
    },
    newsAndBlog: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: rem(16),
        gap: rem(16),
        "& h1": {
            fontSize: rem(32),
            fontWeight: "bold",
            color: "#12475F",
            marginRight: rem(240),
            "@media (max-width: 768px)": {
                width: "auto",
                fontSize: rem(20),
                backgroundColor: "yellow",
            }
        }
    },
    newsAndBlogContainer: {
        display: "flex",
        position: "relative",
        "@media (max-width: 768px)": {
            marginLeft: rem(90),
        }
    },
    searchIcon: {
        position: "absolute",
        left: "3%",
        top: "25%",
        zIndex: "10",
    },
    search: {
        width: rem(508),
        height: rem(54),
        borderRadius: rem(41),
        border: "1px solid gray",
        marginRight: rem(40),
        "@media (max-width: 768px)": {
            width: rem(200),
        }
    },
    searchInput: {
        width: rem(400),
        height: rem(24),
        position: "absolute",
        left: "10%",
        top: "25%",
        border: "none",
        "@media (max-width: 768px)": {
            width: "auto",
        }
    },
    card: {
        width: rem(404),
        height: rem(415),
        backgroundColor: "#F5F9FC",
        borderRadius: rem(28),
        display: "flex",
        flexDirection: "column",
        gap: rem(15),
        "& h4": {
            color: "#12475F",
            fontSize: rem(16),
            fontWeight: "bold",
            margin: 0,
            lineHeight: 1.4,
        },
        "& p": {
            color: "#12475F",
            fontSize: rem(14),
            fontWeight: "normal",
            margin: 0,
            lineHeight: 1.5,
            flex: 1,
        },
        "& .date": {
            color: "#999",
            fontSize: rem(12),
            marginTop: "auto",
        },
        "@media (max-width: 768px)": {
            width: rem(300),
        }
    },
    cardImage: {
        width: rem(364),
        height: rem(246),
        borderRadius: rem(21),
        objectFit: "cover",
    },
    date: {
        marginTop: "7%",
        color:"#608494"
    },
    pagination: {
        textAlign: "center",
        marginTop: "40px",
        marginLeft: "30%",
        marginBottom:rem(30),
        "@media (max-width: 768px)": {
            width: rem(300),
            marginTop: rem(15),
            marginBottom: rem(15),
            marginLeft: rem(40),

        }
    }
};

export const UseNewsAndBlogPageStyles = createUseStyles(styles);