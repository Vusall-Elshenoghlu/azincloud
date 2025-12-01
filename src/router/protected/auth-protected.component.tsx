import {Navigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {Routes} from '../routes';
import {IAuthProtectedRouteProps} from './auth-protected';
import {getToken} from '../../core/helpers/get-token';
import {useEffect} from 'react';
import {setUser} from '../../store/store.reducer';
import {message} from "antd";
const AuthProtectedComponent = ({children}: IAuthProtectedRouteProps) => {
    const dispatch = useDispatch();
    useEffect(() => {
        const token  = getToken();
        if (token){
            dispatch(setUser(token));
        }
    }, []);
    if (!getToken()) {
        message.error("please log in....");
        return <Navigate to={Routes.login} replace />;
    }
    return <>{children}</>;
};

export default AuthProtectedComponent;
