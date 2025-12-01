import {useNavigate} from 'react-router-dom';
import {Routes} from 'router/routes';
import {useMutation} from 'react-query';
import {IForgotPasswordFormValues} from '../forgot-password';
import {forgotPasswordService} from './forgotPassword.service';


export  const useForgotPassword = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationFn: (credentials: IForgotPasswordFormValues) => {
            return forgotPasswordService(credentials);
        },
        onSuccess: () => {
            navigate(Routes.otp);
        }
    });
};