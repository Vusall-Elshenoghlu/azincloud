import {useConfrimDeleteStyles} from './confrim-delete-popup.style';
import exclamation from '/src/assets/images/statics/exclamation-icon.png';
import {Button, Row} from 'antd';
import useLocalization from "../../../../assets/lang";

const ConfrimDeleteComponent=({onClose}: any)=>{
    const classes =useConfrimDeleteStyles();
    const translate = useLocalization();
 return (
     <div className={classes.cardContainer}>
         <div className={classes.popupSelect}>
             <img className={classes.popupIcon} src={exclamation} alt='error-icon' />
             <p className={classes.popupText}>{translate("sure_delete")}</p>
            <Row className={classes.row}>
                <Button onClick={onClose} className={classes.deleteBtn}>
                    <p>{translate("delete")}</p>
                </Button>
                <Button onClick={onClose} className={classes.cancelBtn}>
                    <p>{translate("decline")}</p>
                </Button>
            </Row>
         </div>
     </div>
 );
};
export  default ConfrimDeleteComponent;