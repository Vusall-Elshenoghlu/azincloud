import {useExistsPopupStyles} from './card-exists-popup.style';
import cardError from '/src/assets/images/statics/card-error.png';
import {Button} from "antd";
import useLocalization from "../../../../assets/lang";
const CardExistsPopupComponent =({onClose}: any)=>{
    const classes =useExistsPopupStyles();
    const translate = useLocalization();
    return (
        <div className={classes.cardContainer}>
            <div className={classes.popupSelect}>
                <img className={classes.popupIcon} src={cardError} alt="error" />
                <p className={classes.popupText}>{translate("card_exist")}</p>
                <Button onClick={onClose} className={classes.popupBtn}>
                    <p>{translate("close")}</p>
                </Button>
            </div>
        </div>
    );
};
export default CardExistsPopupComponent;