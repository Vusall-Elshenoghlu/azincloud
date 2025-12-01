import {Routes} from '../../router/routes';
import useLocalization from '../../assets/lang';
import React, {useCallback, useMemo} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useFpStyles} from './forgot-password.style';
import {Button, Form, Card, FormRule, Input} from 'antd';
import {IForgotPasswordFormValues} from './forgot-password';
import {rem} from '../../assets/styles/abstracts/functions';
import underLine from '/src/assets/images/statics/Line21.png';
import {ArrowSmallLeft} from '../../assets/images/icons/arrows';
import photoLeft from '/src/assets/images/statics/cloudMask2.png';
import photoRight from '/src/assets/images/statics/cloudMask2.png';
import {useForgotPassword} from './actions/forgotPassword.mutation';

const ForgotPasswordComponent=()=>{
    const {mutate}=useForgotPassword();
    const navigate = useNavigate();
    const classes=useFpStyles();
    const translate = useLocalization();

    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        email: [
            { required: true, message: translate('input_required') },
            {
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: translate('email_invalid')
            }
        ],
    }), [translate]);

    const onSubmit = useCallback((values: IForgotPasswordFormValues) => {
        mutate(values);
        navigate(Routes.otp);
    }, [mutate, navigate]);

    return (
        <div className={`${classes.page} w-100 d-flex justify-center align-center`}>
            <div className={classes.panel}>
                <Card className={classes.card}>
                    <div className={classes.backAndIcon}>
                        <Link to={Routes.login}>
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

                    <div className={classes.fpText}>
                        <p>{translate("enter_email")}</p>
                        <Form onFinish={onSubmit}>
                        <Form.Item name='email' rules={rules.email}>
                            <Input className={classes.emailInput}  placeholder={translate("email")} required />
                        </Form.Item>
                        <div className={classes.sendOtp}>
                               <Button className={classes.sendBtn} htmlType='submit'>
                                   <h3>{translate("send")}</h3>
                               </Button>
                        </div>
                        </Form>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default ForgotPasswordComponent;