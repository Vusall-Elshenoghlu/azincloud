import {Button,  Checkbox, Col, Form, Input, Row, Select} from 'antd';
import { useRegisterStyles } from './register.style';
import React, { useCallback, useMemo } from 'react';
import useLocalization from 'assets/lang';
import { FormRule } from 'antd';
import { IRegisterFormValues } from './register';
import {useRegister} from './actions/register.mutation';
import {EyeInvisibleOutlined, EyeTwoTone} from '@ant-design/icons';
import {rem} from '../../assets/styles/abstracts/functions';
import recycleImg from '../../assets/images/statics/recycle.png';
import {Link, useNavigate} from 'react-router-dom';
import {Routes} from '../../router/routes';



const RegisterComponent = () => {
    const translate = useLocalization();
    const {mutate, isLoading} = useRegister();
    const classes = useRegisterStyles();
    const navigate = useNavigate();
    const initialValues: IRegisterFormValues = {
        email: '',
        password: '',
        username: '',
        contactNumber: ''
    };
    const [form] = Form.useForm();


    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        email: [
            { required: true, message: translate('input_required') },
            {
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: translate('email_invalid')
            }
        ],
        password: [{ required: true, message: translate('input_required') }],
        repeatPassword: [
            { required: true, message: translate('input_required') },
            ({ getFieldValue }) => ({
                validator(_, value) {
                    if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                    }
                    return Promise.reject(new Error('Passwords do not match'));
                }
            })
        ],
        username: [{ required: true, message: translate('input_required') }],
        contactNumber: [{ required: true, message: translate('input_required') }]
    }), [translate]);

    const onSubmit = useCallback((values: IRegisterFormValues) => {
        console.log('Form values:', values);
        mutate(values);
        navigate(Routes.otp);
    }, [mutate, navigate]);
    return (

                    <Form
                        form={form}
                        name="register-form"
                        layout="vertical"
                        onFinish={onSubmit}
                    >
                        <Row gutter={[16, 16]} className={classes.row}>
                            <Col md={6} xs={12} sm={12}>
                                <Form.Item name="Ad" rules={rules.username}>
                                    <Input className={classes.inputName} placeholder={translate("name")}/>
                                </Form.Item>
                            </Col>
                            <Col md={6} xs={12} sm={12}>
                                <Form.Item name="Soyad">
                                    <Input className={classes.inputName} placeholder={translate("surname")}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={[16, 16]} className={classes.row}>
                            <Col md={6} xs={12} sm={12}>
                                <Form.Item name="Ölkə" className={classes.inputCountry}>
                                    <Select
                                        className={`${classes.inputName}`}
                                        placeholder={translate("country")}
                                        options={[
                                            { value: 'az', label: 'Azərbaycan' },
                                            { value: 'tr', label: 'Türkiyə' },
                                            { value: 'us', label: 'Amerika' },
                                        ]}
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={6} xs={12} sm={12}>
                                <Form.Item name="Qeydiyyatda olduğunuz ünvan">
                                    <Input className={classes.inputName} placeholder={translate("registered_address")}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item name="Hal-hazırda yaşadğınız ünvan">
                            <Input className={classes.input} placeholder={"Hal-hazırda yaşadğınız ünvan"}/>
                        </Form.Item>
                        <Form.Item name="MobileNumber" rules={rules.contactNumber}>
                            <Input className={classes.input} placeholder={` +994 ${translate("mobile_number")}`}/>
                        </Form.Item>
                        <Form.Item name="email" rules={rules.email}>
                            <Input className={classes.input} placeholder={translate("email")}/>
                        </Form.Item>
                        <Row gutter={[16, 16]} className={classes.row}>
                            <Col md={6} xs={12}>
                                <Form.Item name="password" rules={rules.password}>
                                    <Input.Password
                                        className={classes.inputName}
                                        placeholder={translate("password")}
                                        iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                    />
                                </Form.Item>
                            </Col>
                            <Col md={6} xs={12}>
                                <Form.Item name="repeatPassword" rules={rules.repeatPassword}>
                                    <Input.Password
                                        className={classes.inputName}
                                        placeholder={translate("repeat")}
                                        iconRender={(visible) => visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <div className={classes.termsCheckBox}>
                           <Link to={Routes.terms}>
                               <Checkbox></Checkbox>
                           </Link>
                            <p>{translate("accept_contract")}</p>
                        </div>

                        <div className={classes.notRobot}>
                            <div>
                                <Checkbox  > {translate("not_robot")}</Checkbox>
                            </div>
                            <img style={{width:rem(66), height: rem(66)}} src={recycleImg} alt=""/>
                        </div>
                        <div className={`${classes.loginAndRegister} d-flex`}>

                             <Button
                                 className={classes.continueBtn}
                                 htmlType='submit'
                                 loading={isLoading}
                             >
                                 <p>{translate("continue")}</p>
                             </Button>
                          </div>
                     </Form>

    );
};

export default RegisterComponent;
