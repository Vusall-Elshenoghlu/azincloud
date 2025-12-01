import {useAddCartStyles} from "./addCart.style";
import exclamation from "/src/assets/images/statics/exclamation-icon.png";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../router/routes";

const AddCartComponent=()=>{
    const navigate = useNavigate();
    const  handleAdd=()=>{
        navigate(Routes.card_details);
    };
    const classes=useAddCartStyles();
    return (
        <div className={classes.container}>
            <div className={classes.addCartContainer}>
                    <img src={exclamation} alt="Exclamation icon"/>
                   <div className={classes.titleContainer}>
                       <h2 className={classes.title}>Hörmətli,  Turkay Zargarli</h2>
                       <p className={classes.description}>
                           <a href={'#'}>zergerliturka@gmail.com</a>e-maili ilə etdiyiniz qeydiyyatınızı tamamlamaq üçün zəhmət olmasa ödəniş məlumatlarını daxil edəsiniz.
                       </p>
                       <button onClick={handleAdd} className={classes.addCartBtn}>Add card</button>
                   </div>
            </div>
        </div>
    );
};
export default AddCartComponent;