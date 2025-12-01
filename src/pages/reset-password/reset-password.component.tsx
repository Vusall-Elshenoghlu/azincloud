import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import useLocalization from '../../assets/lang';
import {Button, Card, Input, message} from 'antd';
import {useRpStyles} from './reset-password.style';
import {rem} from '../../assets/styles/abstracts/functions';
import underLine from '/src/assets/images/statics/Line21.png';
import {ArrowSmallLeft} from '../../assets/images/icons/arrows';
import photoLeft from '/src/assets/images/statics/cloudMask2.png';
import photoRight from '/src/assets/images/statics/cloudMask2.png';
import PasswordChangePopupComponent from '../../core/shared/popups/password-change/password-change-popup.component';


const ResetPasswordComponent=()=>{
    const classes=useRpStyles();
    const translate = useLocalization();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [popup, setPopup]=useState(false);

   const handleVerify=()=>{

       if(!password.trim() || !confirmPassword.trim()){
           message.error('Please fill in both password fields');
           return;
       }
       if(password.trim() !== confirmPassword.trim()){
           message.error('Passwords do not match');
           return;
       }
       setPopup(true);
   };


    return(
       <div className={classes.container}>
           <div className={classes.popupClass}>
               {popup && <div className={classes.popupOverlay}>
                   <PasswordChangePopupComponent onClose={()=>setPopup(false)}/>
               </div>}
           </div>
           <div className={`${classes.page} w-100 d-flex justify-center align-center`}>
               <div className={classes.panel}>
                   <Card className={classes.card}>
                       <div className={classes.backAndIcon}>
                           <Link to={Routes.otp}>
                               <div className={classes.icon}>
                                   <div className={classes.arrow}><ArrowSmallLeft/></div>
                               </div>
                           </Link>
                           <h4 style={{marginTop:rem(5), color:'white'}}>{translate('back')}</h4>
                       </div>
                       <img className={classes.leftPhoto} src={photoLeft} alt='logo' />
                       <img className={classes.rightPhoto} src={photoRight} alt='logo' />

                       <div className={classes.title}>
                           <h2>New password</h2>
                           <img className={classes.underLine} src={underLine} alt='line' />
                       </div>

                       <div className={classes.rpText}>

                           <Input onChange={(e)=> setPassword( e.target.value)} className={classes.rpInputs} placeholder='Password' required />
                           <Input onChange={(e)=> setConfirmPassword( e.target.value)} className={classes.rpInputs} placeholder='Confrim Password' required />
                           <div className={classes.verifyOtp}>
                               <Button onClick={handleVerify} className={classes.verifyBtn} htmlType='submit'>
                                   <h3>Verify</h3>
                               </Button>
                           </div>
                       </div>
                   </Card>
               </div>
           </div>

       </div>
    );
};
export default ResetPasswordComponent;