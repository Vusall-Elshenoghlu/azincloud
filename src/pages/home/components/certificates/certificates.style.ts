import {createUseStyles} from 'react-jss';
import { rem } from '../../../../assets/styles/abstracts/functions';
import fonts from "../../../../assets/styles/abstracts/fonts";

const styles = {
    sertificatesSection:{
        width:'100%',
        height:rem(307),
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#f5f9fc',
    },
    sertificatesContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: rem(1200),
    },
    slidesContainer:{
        display: 'flex',
        padding:`${rem(20)} ${rem(15)}`,
        justifyContent:'center',
        alignItems: 'center',
        '& img':{
            width: rem(100),
            height: rem(100),
            objectFit: 'contain',
            cursor:'pointer',
            transition:'0.2s ease-in-out',
            '&:hover': {
                scale:(1.1),
            }
        }
    },
    title:{
        fontFamily:fonts.fontLato,
        fontSize: rem(32),
        fontWeight: rem(700),
        fontStyle: 'bold',
        color:'#12475F',
        marginBottom:rem(40),
        textAlign:'center',
    }

};

export const useCertificatesStyles=createUseStyles(styles);