import React, {useCallback, useMemo} from 'react';
import {Button, Card, Input, Form, FormRule} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import {Routes} from '../../router/routes';
import useLocalization from '../../assets/lang';
import useOtpStyles from './otp.style';
import {rem} from '../../assets/styles/abstracts/functions';
import {ArrowSmallLeft} from '../../assets/images/icons/arrows';
import underLine from '/src/assets/images/statics/Line21.png';
import photoLeft from '/src/assets/images/statics/cloudMask2.png';
import photoRight from '/src/assets/images/statics/cloudMask2.png';
import {useOtp} from "./actions/otp.mutation";
import {IRegisterFormValues} from "../register/register";
import {IOtpValues} from "./otp";

const OtpComponent =()=>{
const classes=useOtpStyles();
const translate = useLocalization();
const {mutate} = useOtp();
const navigate = useNavigate();
const resendFun=()=>{
    window.location.reload();
};

    const onChange = (text: any) => {
        console.log('onChange:', text);
    };
    const onInput = (value: any) => {
        console.log('onInput:', value);
    };

const sharedProps={
  onChange,
  onInput,
};
    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        otp: [{ required: true, message: translate('input_required') }]
    }), [translate]);

    const onSubmit=useCallback((values: IOtpValues) => {
        mutate(values);
        navigate(Routes.reset_password);
    }, []);

return(
    <div className={`${classes.page} w-100 d-flex justify-center align-center`}>
        <div className={classes.panel}>
            <Card className={classes.card}>
                <div className={classes.backAndIcon}>
                    <Link to={Routes.forgot_password}>
                        <div className={classes.icon}>
                            <div className={classes.arrow}><ArrowSmallLeft/></div>
                       </div>
                    </Link>
                    <h4 style={{marginTop:rem(5), color:'white'}}>{translate('back')}</h4>
                </div>
                <img className={classes.leftPhoto} src={photoLeft} alt='logo' />
                <img className={classes.rightPhoto} src={photoRight} alt='logo' />

                <div className={classes.title}>
                    <h2>{translate("get_code")}</h2>
                    <img className={classes.underLine} src={underLine} alt='line' />
                </div>

                 <Form
                     onFinish={onSubmit}
                 >
                     <div className={classes.sendOtp}>
                         <p>{translate("sent_otp")}</p>
                         <span>zergerliturkay@gmail.com</span>
                         <Form.Item rules={rules.otp} name={'otp'}>
                            <Input.OTP  size={'large'}  formatter={str => str.toUpperCase()}  />
                        </Form.Item>
                         <div className={classes.resendOtp}>
                             <p style={{cursor:'pointer'}} onClick={resendFun}>{translate("resend_otp")}</p>
                             <Button  className={classes.verifyBtn} htmlType='submit'>
                                 <h3>{translate("verify")}</h3>
                             </Button>
                         </div>
                     </div>
                 </Form>


            </Card>
        </div>
    </div>
 );
};
export default OtpComponent;
