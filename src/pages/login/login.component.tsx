import {Button,  Form, Input,} from 'antd';
import React, {useCallback, useMemo} from 'react';
import {FormRule} from 'antd';
import useLocalization from 'assets/lang';
import {useLogin} from './actions/login.mutation';
import {useLoginStyles} from './login.style';
import {ILoginFormValues} from './login';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import {Link} from 'react-router-dom';
import {Routes} from '../../router/routes';

const LoginComponent = () => {
    const translate = useLocalization();
    const {mutate, isLoading} = useLogin();
   const classes=useLoginStyles();



    const initialValues: ILoginFormValues = {
        email: '',
        password: '',
    };

    const rules: { [key: string]: FormRule[] } = useMemo(() => ({
        email: [
            {required: true, message: translate('input_required')},
            {
                pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: translate('email_invalid'),
            },
        ],
        password: [
            {required: true, message: translate('input_required')},
        ],
    }), [translate]);

    const onSubmit = useCallback((values: any) => {
        mutate(values);
        console.log(values);
    }, []);

    return (
                    <Form
                        initialValues={initialValues}
                            name='login'
                            onFinish={onSubmit}
                            layout='vertical'
                            >
                        <Form.Item name='email'>
                            <Input className={classes.formInputs} placeholder={translate('email')} required />
                        </Form.Item>

                        <Form.Item name='password' >
                            <Input.Password
                                className={classes.formInputs}
                                type='password'
                                placeholder={translate('password')}
                                iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}
                                required
                            />
                        </Form.Item>
                       <Link to={Routes.forgot_password}> <div className={`${classes.forgotPassword}`}>{translate('forgot_password')}</div></Link>

                        <div className={`${classes.loginAndRegister} d-flex`}>
                             <Button loading={isLoading} className={classes.signinBtn} htmlType='submit'>
                                 <p>{translate('login_button')}</p>
                             </Button>
                         </div>
                     </Form>

)
    ;
};

export default LoginComponent;
