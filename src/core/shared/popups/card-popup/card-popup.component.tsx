import React from "react";
import {Button} from "antd";
import {useCardPopupStyles} from "./card-popup.style";
import useLocalization from "../../../../assets/lang";

const CardPopupComponent = ({onClose}: any) => {
    const classes = useCardPopupStyles();
    const translate = useLocalization();
    return (
        <div className={classes.popupSelect}>
            <div onClick={onClose} className={classes.closeIcon}>×</div>
            <p className={classes.popupTitle}>{translate("select_or_add_payment")}</p>

            <div className={classes.cardDetail}>
                <div className={classes.numberAndActive}>
                    <div className={classes.numAndMainCard}>
                        <input type="radio" className={classes.radioInput} checked />
                        <span>**** **** **** 3456</span>
                        <div className={classes.mainCard}>{translate("main")}</div>
                    </div>
                    <div className={classes.activeButton}>{translate("active")}</div>
                </div>

                <div className={classes.numberAndActive}>
                    <div className={classes.numAndMainCard}>
                        <input type="radio" className={classes.radioInput} />
                        <span>**** **** **** 2256</span>
                    </div>
                    <div className={classes.activeButton}>{translate("active")}</div>
                </div>

                <div className={classes.numberAndActive}>
                    <div className={classes.numAndMainCard}>
                        <input type="radio" className={classes.radioInput} />
                        <span>**** **** **** 2222</span>
                    </div>
                    <div className={classes.deactiveButton}>{translate("deactivate")}</div>
                </div>

                <div className={classes.addCard}>
                    <span>+</span> {translate("add_card")}
                </div>
            </div>

            <div className={classes.buttonContainer}>
                <Button onClick={onClose} className={classes.payBtn}><p>{translate("pay")}</p></Button>
                <Button onClick={onClose} className={classes.cancelBtn}><p>{translate("decline")}</p></Button>
            </div>
        </div>
    );
};

export default CardPopupComponent;