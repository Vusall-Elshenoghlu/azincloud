import {API} from 'core/configs/api.config';
import axiosInstance from 'core/configs/axios.config';
import {IForgotPasswordFormValues} from '../forgot-password';


export const forgotPasswordService = async (credentials: IForgotPasswordFormValues) => {
    const res= await axiosInstance.post(API.register, credentials);
    return res.data;
};