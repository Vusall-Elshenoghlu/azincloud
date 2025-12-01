import {createUseStyles} from "react-jss";
import {rem} from "../../../assets/styles/abstracts/functions";

const styles = {
    container: {
        width: "100%",
        height: rem(695),
        display: "flex",
        backgroundColor: "#FFFF",
        padding: rem(80),
        flexDirection: "column",
        overflow: "hidden",
        alignItems: "center",

        "@media (max-width: 1200px)": {
            padding: rem(40),
            height: "auto",
        },

        "@media (max-width: 768px)": {
            padding: rem(20),
        },

        "@media (max-width: 480px)": {
            padding: rem(10),
        },
    },
    newsAndBlog: {
        width: "95%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: rem(15),
        marginBottom: rem(30),

        "& h1": {
            fontFamily: "Lato",
            fontSize: rem(32),
            color: "#12475F",
            fontWeight: "bold",
            margin: 0,

            "@media (max-width: 768px)": {
                fontSize: rem(24),
            },

            "@media (max-width: 480px)": {
                fontSize: rem(20),
            },
        },

        "& h2": {
            fontFamily: "Lato",
            color: "#2BAAE2",
            fontSize: rem(18),
            fontWeight: "bold",
            cursor: "pointer",
            margin: 0,

            "@media (max-width: 480px)": {
                fontSize: rem(16),
            },
        },

        // Mobil üçün flex-dirək və elementləri yığışdırırıq
        "@media (max-width: 768px)": {
            flexDirection: "column",
            alignItems: "flex-start",
            gap: rem(10),
            "& > *": {
                width: "100%",
                textAlign: "left",
            },
        },
    },
    arrows: {
        display: "flex",
        gap: rem(15),
        alignItems: "center",
        marginLeft: "60%",

        "& > div": {
            cursor: "pointer",
            padding: rem(8),
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.2s ease",
        },

        "@media (max-width: 768px)": {
            marginLeft: 0,
            justifyContent: "flex-start",
            gap: rem(10),
        },

        "@media (max-width: 480px)": {
            gap: rem(8),
            "& > div": {
                padding: rem(6),
            },
        },
    },
    swiperContainer: {
        width: "100%",
        height: "100%",

        "& .swiper-slide": {
            display: "flex",
            justifyContent: "center",
        },

        "@media (max-width: 768px)": {
            // Yüksəklik azaldılır
            height: rem(450),
        },

        "@media (max-width: 480px)": {
            height: rem(380),
        },
    },
    card: {
        width: rem(404),
        height: rem(380),
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
            marginTop: rem(20),
        },

        "@media (max-width: 1200px)": {
            width: rem(320),
            height: rem(320),
        },

        "@media (max-width: 768px)": {
            width: rem(280),
            height: rem(300),
            gap: rem(12),
            "& h4": {
                fontSize: rem(14),
            },
            "& p": {
                fontSize: rem(13),
            },
            "& .date": {
                fontSize: rem(11),
            },
        },

        "@media (max-width: 480px)": {
            width: "90vw",
            height: "auto",
            padding: rem(15),
            "& h4": {
                fontSize: rem(16),
            },
            "& p": {
                fontSize: rem(14),
            },
        },
    },
    cardImage: {
        width: "100%",
        height: rem(200),
        borderRadius: rem(21),
        objectFit: "cover",

        "@media (max-width: 768px)": {
            height: rem(150),
        },

        "@media (max-width: 480px)": {
            height: rem(140),
        },
    },
};

export const useNewsAndBlogStyles = createUseStyles(styles);