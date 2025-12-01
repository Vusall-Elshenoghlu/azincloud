import {useStore} from '../../store/store.config';
import {useWelcomeStyles} from "./welcome-user.style";
import {Modal} from "antd";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../router/routes";
import {successToast} from "../../core/shared/toast/toast";
import useLocalization from "../../assets/lang";
const WelcomeUserComponent: React.FC = () => {

    const user = useStore('user');
    const {container} = useWelcomeStyles();
    const navigate = useNavigate();
    const translate = useLocalization();
    const handleLogout = () => {
        Modal.confirm({
            title: translate("modalTitle"),
            content: translate("modalReturn"),
            okText: translate("modalOkText"),
            cancelText: translate("modalCancelText"),
            onOk: () => {

                console.log('User logged out');
                localStorage.removeItem('Architecture (Mode: Default)-token');
                successToast("Logged Out!");
                navigate(Routes.login);

            },
        });
    };
    return (
        <div className={`${container}`}>
            <h1 className={`text-center`}>salam</h1>
            <h2 className={`text-center`}>{user}</h2>
            <button onClick={handleLogout} className={`text-center`}>{translate("logout")}</button>
        </div>
    );
};
export default WelcomeUserComponent;