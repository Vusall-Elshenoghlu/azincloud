import React, {useState} from 'react';
import {IWriteUsValues} from './write-us';
import {useWriteUsStyles} from './write-us.style';
import useLocalization from '../../../../assets/lang';
import recycleImg from 'assets/images/statics/recycle.png';
import bigLetter from 'assets/images/statics/bigLetter.png';
import {Checkbox, Col, Form, Input, message, Row} from 'antd';
import smallLetter from 'assets/images/statics/smallLetter.png';
import {rem} from '../../../../assets/styles/abstracts/functions';
import SuccesfullySendedComponent from '../../../../core/shared/popups/successfully-sended/succesfully-sended.component';

const WriteUsComponent = () => {
    const classes = useWriteUsStyles();
    const translate = useLocalization();
    const [form] = Form.useForm();
    const [showPopup, setShowPopup] = useState(false);

    const initialValues = {
        name: '',
        surname: '',
        email: '',
        MobileNumber: '',
        subject: '',
        text: '',
    };

    const onFinish = (values: IWriteUsValues) => {
        form.resetFields();
        setShowPopup(true);
    };


    const onFinishFailed = (errorInfo: any) => {
        message.error('Form submission failed:', errorInfo);
    };


    return (
        <div className={classes.wrapper}>
            {showPopup && <div className={classes.popupOverlay}>
                <SuccesfullySendedComponent onClose={()=>setShowPopup(false)}/>
            </div>}
            <div className={classes.formWrapper}>
                <div className={classes.form}>
                    <h1>{translate('write_us') || 'Write Us'}</h1>
                    <br/><br/>
                    <Form
                        form={form}
                        name='writeUs'
                        initialValues={initialValues}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        layout='vertical'
                    >
                        <Row gutter={[16, 16]} className={classes.row}>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item
                                    name='name'
                                    rules={[
                                        {required: true, message: translate('name') || 'Please enter your name'},
                                        {
                                            min: 2,
                                            message: translate('max_characters') || 'Name must be at least 2 characters'
                                        }
                                    ]}
                                >
                                    <Input className={classes.inputName} placeholder={translate('name')}/>
                                </Form.Item>
                            </Col>
                            <Col xs={24} sm={12} md={6}>
                                <Form.Item
                                    name='surname'
                                    rules={[
                                        {
                                            required: true,
                                            message: translate('surname')
                                        },
                                        {
                                            min: 2,
                                            message: 'Surname must be at least 2 characters'
                                        }
                                    ]}
                                >
                                    <Input className={classes.inputName} placeholder={translate('surname')}/>
                                </Form.Item>
                            </Col>
                        </Row>

                        <Form.Item
                            name='email'
                            rules={[
                                {required: true, message: 'Please enter your email'},
                                {
                                    type: 'email',
                                    message: 'Please enter a valid email'
                                }
                            ]}
                        >
                            <Input className={classes.input} placeholder={translate('email')}/>
                        </Form.Item>

                        <Form.Item
                            name='MobileNumber'
                            rules={[
                                {required: true, message: translate('enter_email')}, {
                                    pattern: /^[0-9]{7,15}$/,
                                    message: translate('mobile_number')
                                }
                            ]}
                        >
                            <Input className={classes.input} placeholder={translate('mobile_number')}/>
                        </Form.Item>

                        <Form.Item
                            name='subject'
                            rules={[{
                                required: true,
                                message: 'Please select a subject'
                            }]}
                        >
                            <Input className={classes.input} placeholder={translate('select_subject')}/>
                        </Form.Item>

                        <Form.Item
                            name='text'
                            rules={[
                                {required: true, message: 'Please enter text'},
                                {
                                    max: 1000,
                                    message: 'Maximum 1000 characters allowed'
                                }
                            ]}
                        >
                            <Input.TextArea
                                className={`${classes.input} ${classes.inputText}`}
                                placeholder={translate('text')}
                                maxLength={282}

                                rows={8}
                            />
                        </Form.Item>

                        <Form.Item
                            name='notRobot'
                            valuePropName='checked'
                            // rules={[
                            //     {
                            //         validator: (_, value) =>
                            //             value ? Promise.resolve() : Promise.reject(new Error(translate('please_confirm_not_robot') || 'Please confirm you are not a robot'))
                            //     }
                            // ]}
                        >
                        </Form.Item>
                        <div className={classes.notRobot}>
                            <Checkbox>{translate('not_robot')}</Checkbox>
                            <img style={{width: rem(66), height: rem(66)}} src={recycleImg} alt='Recycle'/>
                        </div>


                        <Form.Item>
                            <button className={classes.submitButton} type='submit'>
                                {translate('send')}
                            </button>
                        </Form.Item>
                    </Form>
                </div>
                <div className={classes.letterImg}>
                    <div className={classes.layout}>
                        <img src={smallLetter} className={classes.smallLet} alt='Small letter'/>
                        <img src={bigLetter} className={classes.bigLet} alt='Big letter'/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WriteUsComponent;
