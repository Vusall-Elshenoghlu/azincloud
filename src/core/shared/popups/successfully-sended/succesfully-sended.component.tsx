import {useSuccessfullySendedStyles} from './successfully-sended.style';
import checkMark from '/src/assets/images/statics/check-mark.png';
import {Button} from 'antd';
import React from 'react';
import useLocalization from '../../../../assets/lang';
const SuccessfullySendedComponent =({onClose}:any)=>{
    const classes=useSuccessfullySendedStyles();
    const translate = useLocalization();
    return (
        <div className={classes.card}>
            <div className={classes.popupSelect}>
                <div className={classes.popupContainer}>
                    <img className={classes.popupIcon} src={checkMark} alt='Check mark'/>
                    <p className={classes.popupTitle}>{translate('application_sent_successfully')}</p>

                        <Button onClick={onClose}  className={classes.closeBtn} htmlType='submit'>
                            <p>{translate('close')}</p>
                        </Button>
                </div>
            </div>
        </div>
    );
};
export default SuccessfullySendedComponent;