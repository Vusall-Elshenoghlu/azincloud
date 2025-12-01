import colors from 'assets/styles/abstracts/color';
import {rem} from 'assets/styles/abstracts/functions';
import {createUseStyles} from 'react-jss';
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',

    },
    wrapper: {
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    title: {
        fontSize: rem(20),
        fontWeight: 700,
        fontFamily: fonts.fontLato,
        marginTop: rem(50),
        fontStyle: 'bold',
    },
    subtitle: {
        fontSize: rem(16),
    },
    panel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'visible',
        padding: `${rem(60)} 0`,
    },
    or: {color: colors.authSubtitleText,},
    invalidField: {border: '1px solid ' + colors.validationErrorColor,},
    leftPage: {
        width: '50%',
        minHeight: '100vh',
        backgroundColor: "#ECBC76"
    },

    loginAndRegister: {
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    formRow: {
        display: "flex",
        gap: rem(10),
        '& .ant-form-item': {
            flex: 1,
        }
    },
    rightPhoto: {
        width: '35%',
        position: 'absolute',
        left: '60%',
        bottom: '10%',

    },
    leftPhoto: {
        width: '20%',
        position: 'absolute',
        left: '10%',
        bottom: '50%',
    },
    "@media (max-width: 768px)": {
        panel: {
            width: '90%',
            maxWidth: rem(350),
            padding: rem(20),
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 2,
            borderRadius: rem(40),
        },
        rightPage: {
            display: 'none',
        },
        rightPhoto: {
            display: 'none',
        },
    },
    card: {
        width: rem(1216),
        height: rem(855),
        backgroundImage: 'linear-gradient(to right, #1559A4, #2D99DC)',
        color: 'white',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: rem(28),
        position: 'relative',
        marginTop: rem(60),
        marginBottom: rem(60),
    },
    cardTitle: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(120),
        marginBottom: rem(40),
        paddingBottom: rem(20),
    },
    underLine: {
        position: 'absolute',
        top: '100%',
    },
    continueBtn: {
        width: rem(536),
        backgroundColor: '#2BAAE2',
        color: 'white',
        borderRadius: rem(41),
        border: 'none',
        marginTop: rem(20),
        textAlign: 'center',

        '& p': {
            fontSize: rem(18),
            fontWeight: 900,
            fontStyle: 'black',
            fontFamily: fonts.fontLato,
        },
        "@media (max-width: 768px)": {
            width: rem(300),
            marginLeft: rem(120),
        }
    },
    row: {
        display: "flex",
        width: rem(536),
        gap: rem(150),
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    },
    inputName: {
        width: rem(257),
        height: rem(54),
        borderRadius: rem(41),
        border: "none",
        right: rem(60),
        '&::placeholder': {
            color: '#12475F'
        },
        '&.ant-select': {
            width: rem(260),
            "@media  (max-width: 768px)": {
                width: rem(290),
                marginBottom: rem(-30),
            }
        },
        '& .ant-select-selector': {
            height: rem(54),
            borderRadius: rem(41),
            alignItems: 'center',
        },
        '& .ant-select-selection-placeholder': {
            color: '#12475F',
            opacity: 1,
        },
        "@media (max-width: 768px)": {
            width: rem(300),
            marginLeft: rem(45),
        }
    },
    inputCountry: {

    },
    input: {
        width: "100%",
        height: rem(54),
        borderRadius: rem(41),
        '&::placeholder': {
            color: '#12475F'
        },
        "@media (max-width: 768px)": {
            width: rem(300),
            marginLeft: rem(120),
        }
    },
    inputText: {
        height: rem(266),
    },
    notRobot: {
        width: "100%",
        height: rem(83),
        borderRadius: rem(41),
        backgroundColor: "#F5F5F5",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: rem(20),
        marginTop: rem(20),
        "@media (max-width: 768px)": {
            width: rem(300),
            marginLeft: rem(120),
        }
    },
    termsCheckBox: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'left',
        gap: rem(20),
        color: 'white',
        marginTop: rem(20),
        '& .ant-checkbox-inner': {
            backgroundColor: 'transparent',
            borderColor: 'white',
        },
        '& p': {
            fontSize: rem(14),
            fontWeight: 700,
            fontStyle: 'bold',
            fontFamily: fonts.fontLato,
            lineHeight: '160%',
        },
        "@media (max-width: 768px)": {
            width: "auto",
            marginLeft: rem(120),
            "& p": {
                fontSize: rem(12),
            }
        }
    }

};

export const useRegisterStyles = createUseStyles(styles);
