import {Card} from 'antd';
import React, {useState} from 'react';
import useLocalization from '../../assets/lang';
import LoginComponent from '../login/login.component';
import {useLoginRegister} from './login-register.style';
import underLine from '/src/assets/images/statics/Line21.png';
import RegisterComponent from '../register/register.component';
import photoLeft from '/src/assets/images/statics/cloudMask2.png';
import photoRight from '/src/assets/images/statics/cloudMask2.png';

const LoginRegisterComponent=()=>{
    const classes=useLoginRegister();
    const [authMode, setAuthMode]=useState('Sign in');
    const translate = useLocalization();


    return (
        <div className={`${classes.page} container w-100 d-flex justify-center align-center`}>
            <div className={classes.panel}>
                <Card className={classes.card}>
                    <img className={classes.leftPhoto} src={photoLeft} alt='logo' />
                    <img className={classes.rightPhoto} src={photoRight} alt='logo' />
                    <div className={classes.cardTitle}>
                        <h2 className={classes.title}
                          onClick={()=>setAuthMode('Sign in')}
                            style={{
                                cursor: 'pointer',
                                opacity: authMode === 'Sign in' ? '1' : '0.5',
                                transform: authMode === 'Sign in' ? 'translateY(20px)' : 'translateY(0px)',
                                transition: 'opacity 0.3s, transform 0.3s ease ',
                            }}
                        >{translate('login_button')}</h2>
                        <h2 className={classes.title}
                            onClick={()=>setAuthMode('Sign up')}
                            style={{
                                cursor: 'pointer',
                                opacity: authMode === 'Sign up' ? '1' : '0.5',
                                transition: 'opacity 0.3s, transform 0.3s ease',
                                transform: authMode === 'Sign up' ? 'translateY(20px)' : 'translateY(0px)',

                            }}
                        >{translate('register_button')}</h2>
                        <img className={classes.underLine} src={underLine} alt='line' />
                    </div>
                    {
                        authMode === 'Sign in' ? <LoginComponent/> : <RegisterComponent/>
                    }

                </Card>
            </div>
        </div>
    );
};

export default LoginRegisterComponent;