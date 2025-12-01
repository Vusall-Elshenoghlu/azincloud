import { createUseStyles } from "react-jss";
import { rem } from "../../assets/styles/abstracts/functions";

const styles = {
    container: {
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "15vh 5vw",
        backgroundColor: "#F5F9FC",
    },
    faqAndSearch: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: rem(30),
        "& h1": {
            fontSize: rem(32),
            color: "#12475F",
            fontWeight: "bold",
        },
    },
    faqContainer: {
        display: "flex",
        position: "relative",
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
        position: "relative"
    },
    searchInput: {
        width: "100%",
        height: "100%",
        paddingLeft: rem(40),
        border: "none",
        outline: "none",
        backgroundColor: "transparent"
    },
    contentsAndQuestions: {
        width: "100%",
        display: "flex",
        flexDirection: "row",
        gap: rem(55),
        flexWrap: "wrap",
    },
    contents: {
        display: "flex",
        flexDirection: "column",
        gap: rem(15),
        minWidth: rem(250),
        "& h2": {
            fontSize: rem(20),
            color: "#12475F",
            fontWeight: "bold",
        },
        "& h4": {
            fontSize: rem(14),
            lineHeight: rem(24),
            cursor: "pointer",
            margin: 0
        }
    },
    lineHorizantal: {
        width: rem(1),
        backgroundColor: "gray",
        opacity: 0.2
    },
    questionsContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: rem(20),
        maxWidth: "100%",
    },
    questionDiv: {
        width: "100%",
        maxWidth: rem(866),
        backgroundColor: "white",
        borderRadius: rem(28),
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: rem(30),
        transition: "all 0.3s ease-in-out",
        boxSizing: "border-box",
        flexWrap: "wrap",
    },
    answerDiv: {
        composes: "$questionDiv",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    questionParag: {
        fontSize: rem(16),
        fontWeight: 600,
        color: "#12475F",
        margin: 0
    },
    answerText: {
        fontSize: rem(14),
        color: "#444",
        marginTop: rem(10),
        lineHeight: rem(22)
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
        position: "absolute",
        left: "90%"
    },
    "@media (max-width: 768px)": {
        faqAndSearch: {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: rem(20),
        },
        search: {
            width: "100%",
            marginRight: 0
        },
        contentsAndQuestions: {
            flexDirection: "column",
            gap: rem(30),
        },
        lineHorizantal: {
            display: "none"
        },
        questionsContainer: {
            maxWidth: "100%",
        },
        questionDiv: {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: rem(10),
        },
        answerDiv: {
            alignItems: "flex-start",
        },
        plusDiv: {
            marginLeft: 0,
            alignSelf: "flex-end",
            position: "absolute",
            left: "88%",
        },
    }

};

export const useFaqStyles = createUseStyles(styles);
