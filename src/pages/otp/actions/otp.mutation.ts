import {useMutation} from 'react-query';
import {otpService} from './otp.service';
import {useNavigate} from 'react-router-dom';
import {IOtpValues} from "../otp";
import {Routes} from "../../../router/routes";

export const useOtp=()=>{
    const navigate = useNavigate();

    return useMutation ({
        mutationFn:(credentials: IOtpValues)=>{
            return otpService(credentials);
        },
        onSuccess:()=>{
            navigate(Routes.login);
        }
    });
};