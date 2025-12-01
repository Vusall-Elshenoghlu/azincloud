import {usePasswordChangeStyle} from './password-change-popup.style';
import checkMark from '/src/assets/images/statics/check-mark.png';
import {Button} from 'antd';
import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../../../router/routes';
import useLocalization from '../../../../assets/lang';
const PasswordChangePopupComponent =({onClose}:any)=>{
    const classes=usePasswordChangeStyle();
    const translate = useLocalization();
    return (
        <div className={classes.card}>
            <div className={classes.popupSelect}>
                <div className={classes.popupContainer}>
                    <img className={classes.popupIcon} src={checkMark} alt='Check mark'/>
                    <p className={classes.popupTitle}>{translate('password_changed_succeccfully')}</p>
                   <Link to={Routes.login}>
                       <Button className={classes.loginBtn} htmlType='submit'>
                           <p>{translate('login_button')}</p>
                       </Button>
                   </Link>
                </div>
            </div>
        </div>
    );
};
export default PasswordChangePopupComponent;