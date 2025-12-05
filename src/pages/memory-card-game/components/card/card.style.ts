import {createUseStyles} from "react-jss";

const styles = {
    card: {
        width: "100%",
        aspectRatio: "1 / 1",
        perspective: "1000px",
        cursor: "pointer",
        userSelect: "none"
    },
    inner: {
        position: "relative",
        width: "100%",
        height: "100%",
        transformStyle: "preserve-3d",
        transition: "transform 0.6s ease"
    },
    flipped: {
        transform: "rotateY(180deg)"
    },
    front: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        backfaceVisibility: "hidden",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #dee2e6",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        backgroundColor: "#fff",
        zIndex: 2,
        "& img": {
            width: "90%",
            height: "90%",
            objectFit: "contain",
            borderRadius: "8px"
        }
    },
    back: {
        position: "absolute",
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        backfaceVisibility: "hidden",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "2px solid #dee2e6",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        background: "linear-gradient(135deg, #007bff, #00c6ff)",
        color: "white",
        fontSize: "3rem",
        fontWeight: "bold",
        transform: "rotateY(180deg)",
        zIndex: 1
    },
    backText: {
        userSelect: "none",
        pointerEvents: "none"
    }
};

export const useCardStyles = createUseStyles(styles);