import {usePersonalSettingsStyles} from './personal-setting.style';
import {Checkbox, Col, Input, Row} from 'antd';
import {DeleteIcon} from '../../assets/images/icons/crud';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';
import useLocalization from '../../assets/lang';



const PersonalSettingsComponent = () => {
    const classes = usePersonalSettingsStyles();
    const translate = useLocalization();
    const infos = [
        {label: `${translate('name')}, ${translate('surname')}`, value: 'Türkay Zərgərli'},
        {label: translate('registered_address'), value: '840 Adams Ave.Poughkeepsie, NY 12601'},
        {label: translate('country'), value: 'Amerika Birləşmiş Ştatları'},
        {label: translate('city'), value: 'New York'},
        {label: translate('company'), value: '#&Turka Ag Group MMC'},
        {label: translate('email'), value: 'zergerliturka@gmail.com'},
        {label: translate('mobile_number'), value: '055 000 00 00'},

    ];
    return (
        <div className={classes.container}>
            <h1>{translate('settings')}</h1>
            <div className={classes.personalInfoContainer}>
               <Row gutter={[40, 40]}>
                   {infos.map((info, index) => (
                       <Col xs={12} sm={8} md={6} key={index}>
                           <div  className={`${classes.infoBox} ${info.label === translate('email') ? classes.emailBox : ''}`}>
                               <p>{info.label}</p>
                               <h3>{info.value}</h3>
                           </div>
                       </Col>
                   ))}
               </Row>
            </div>

            <div className={classes.emailContainer}>
                <div className={classes.emailDiv}>
                    <h3>{translate('email')}</h3>
                    <div className={classes.emailInput}>
                        <Checkbox className={classes.customCheckbox}>zergerliturkay@gmail.com</Checkbox>
                        <DeleteIcon/>
                    </div>
                    <div className={classes.line}></div>
                    <div className={`${classes.emailInput} ${classes.newEmail}`}>
                        <Checkbox className={classes.customCheckbox}>turkay876@gmail.com</Checkbox>
                        <div className={classes.mainEmailBtn}>
                            <h1>{translate('main_email')}</h1>
                        </div>
                    </div>
                </div>
                <div className={classes.addCard}>
                    <div className={classes.plusDiv}>
                        <p>+</p>
                    </div>
                    <h2>{translate('add_email')}</h2>
                </div>
            </div>

            <div className={classes.changePasswordContainer}>
                <h2>{translate('change_password')}</h2>
                <div className={classes.inputContainer}>
                    <div className={classes.changePasswordDiv}>
                        <Input.Password
                            className={classes.changePasswordInput}
                            type='password'
                            bordered={false}
                            placeholder={translate('current_password')}
                            iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                        />
                    </div>
                    <div className={classes.newPasswordInputs}>
                        <div className={`${classes.changePasswordDiv} ${classes.newPasswordDiv}`}>
                            <Input.Password
                                className={`${classes.changePasswordInput} ${classes.newPasswordInputs}`}
                                bordered={false}
                                type='password'
                                placeholder={translate('new_password')}
                                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                            />
                        </div>
                        <div className={`${classes.changePasswordDiv} ${classes.newPasswordDiv}`}>
                            <Input.Password
                                className={`${classes.changePasswordInput} ${classes.newPasswordInputs}`}
                                bordered={false}
                                type='password'
                                placeholder={translate('repeat_password')}
                                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                            />
                        </div>
                    </div>
                    <br/>
                </div>
                <div className={classes.line}></div>
                <br/><br/>
                <div className={classes.buttons}>
                    <button className={classes.declineBtn}>{translate('decline')}</button>
                    <Link to={Routes.login}>
                        <button
                            className={`${classes.continueBtn}`}>{translate('continue')}</button>
                    </Link>
                </div>
            </div>

        </div>
    );
};
export default PersonalSettingsComponent;