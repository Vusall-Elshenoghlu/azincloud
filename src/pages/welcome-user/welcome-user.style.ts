import {createUseStyles} from "react-jss";


const styles = {
    container: {
        fontStyle: "Poppins",
        height: "80vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "3vh",
        "& h2": {
            color: "#E48700",
            fontSize: "55px",
        },
        "& h1": {
            fontSize: "55px",
        },
        "& button": {
            backgroundColor: "#E48700",
            color: "white",
            width: "451px",
            height: "54px",
            borderRadius: "10px",
            border: "0px solid black",
            cursor: "pointer",
        }
    },
    "@media (max-width: 768px)": {
        container: {
            fontStyle: "Poppins",
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "3vh",
            "& h2": {
                color: "#E48700",
                fontSize: "33px",
            },
            "& h1": {
                fontSize: "33px",
            },
            "& button": {
                backgroundColor: "#E48700",
                color: "white",
                width: "250px",
                height: "34px",
                borderRadius: "10px",
                border: "0px solid black",
                cursor: "pointer",
            }
        }
    }

};

export const useWelcomeStyles = createUseStyles(styles);