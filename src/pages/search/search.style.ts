import {createUseStyles} from "react-jss";
import {rem} from "../../assets/styles/abstracts/functions";
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: rem(20),
        " & h1": {
            fontFamily: fonts.fontLato,
            fontSize: rem(32),
            lineHeight: "122%",
            fontWeight: "700",
            paragraphSpacing: rem(18),
            color: "#12475F",
            "@media (max-width: 768px)": {
                fontSize: rem(24),
            }

        }
    },
    searchContainer: {
        width: "100%",
        height: rem(968),
        borderRadius: rem(28),
        backgroundColor: "#FFF",
        padding: rem(20),
        "& p": {
            fontFamily: fonts.fontLato,
            fontWeight: 400,
            fontStyle: 'normal', // "Regular" əvəzinə "normal" olmalıdır
            fontSize: '16px',
            lineHeight: '122%',
            letterSpacing: '0px',
            verticalAlign: 'middle',
            color: "#12475F"
        }
    },
    line: {
        height: rem(0),
        width: "100%",
        border: "1px solid gray"
    },
    results: {
        marginTop: rem(20),
        display: "flex",
        flexDirection: "column",
        gap: rem(20),
        "& h4": {
            fontFamily: fonts.fontLato,
            fontWeight: "800",
            fontStyle: "ExtraBold",
            fontSize: rem(16),
            lineHeight: "122%",
            paragraphSpacing: rem(18),
            letterSpacing: "0%",
            color: "#12475F"
        },
        "& p":{
            fontFamily: fonts.fontLato,
            fontStyle: 'normal',
            fontSize: '16px',
            lineHeight: '122%',
            letterSpacing: '0%',
            verticalAlign: 'middle',
            color: "#4D7587"
        }
    }
};
export const useSearchStyles = createUseStyles(styles);