import {createUseStyles} from 'react-jss';
import {rem} from '../../assets/styles/abstracts/functions';
import fonts from "../../assets/styles/abstracts/fonts";

const styles = {
    page: {
        minHeight: '100vh',
        display: 'flex',
        position: 'relative',
        overflow: 'hidden',
        flexDirection: 'column',
        alignItems: 'center',
    },
    panel: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        overflow: 'visible',
        padding: `${rem(60)} 0`,

        '@media (max-width: 768px)': {
            padding: `${rem(30)} ${rem(16)}`,
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

        '@media (max-width: 1024px)': {
            width: '90%',
            height: rem(720),
        },

        '@media (max-width: 768px)': {
            width: '100%',
            height: 'auto',
            marginTop: rem(30),
            marginBottom: rem(30),
            borderRadius: rem(16),
        },
    },
    rightPhoto: {
        width: '30%',
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'rotate(-180deg)',

        '@media (max-width: 1024px)': {
            width: '40%',
            right: '-15%',
            top: '45%',
        },

        '@media (max-width: 768px)': {
            display: 'none',
        },
    },

    leftPhoto: {
        width: '40%',
        position: 'absolute',
        left: '-10%',
        top: '-25%',

        '@media (max-width: 1024px)': {
            width: '50%',
            left: '-15%',
        },

        '@media (max-width: 768px)': {
            display: 'none',
        },
    },

    underLine: {
        position: 'absolute',
        top: '100%',
    },
    cardTitle: {
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        gap: rem(120),
        marginBottom: rem(40),
        paddingBottom: rem(20),
        marginTop: rem(114),

        '@media (max-width: 1024px)': {
            gap: rem(60),
        },

        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: rem(16),
            marginBottom: rem(20),
        },
    },
    title: {
        fontSize: rem(20),
        fontWeight: 400,
    },
    formInputs:{
        width: rem(536),
        height: rem(54),
        borderRadius:rem(41),
        '&::placeholder': {
            color:'#12475F',
        },
        '@media (max-width: 768px)': {
            width: '90%',
            marginLeft: rem(16),
        }
    },
    dateInput:{
        width: rem(353),
        height: rem(54),
        borderRadius:rem(41),
        '&::placeholder': {
            color:'#12475F',
        },
        '@media (max-width: 768px)': {
            width: rem(150),
        }
    },
    cvvInput:{
        width: rem(165),
        height: rem(54),
        borderRadius:rem(41),
        '&::placeholder': {
            color:'#12475F',
        },
        '@media (max-width: 768px)': {
            width: rem(80),
            marginLeft: rem(16),
        }
    },

    row: {
        display: 'flex',
        gap: rem(15),
        justifyContent: 'center',
        alignItems: 'center',
    },
     confrimBtn:{
         width: rem(257),
         backgroundColor:'#2BAAE2',
         color:'white',
         borderRadius:rem(41),
         border: 'none',
         height: rem(54),

         '& p':{
             fontSize:rem(18),
             fontWeight:900,
             fontStyle:'black',
             fontFamily:fonts.fontLato,
         }
     },
    cancelBtn:{
        width: rem(257),
        backgroundColor: 'transparent',
        height:rem(54),
        borderColor: 'white',
        borderRadius:rem(41),
        color:'white',
        '& p':{
            fontSize:rem(18),
            fontWeight:900,
            fontStyle:'black',
            fontFamily:fonts.fontLato,
        }
    }

};
export  const useCardDetailsStyles = createUseStyles(styles);