import {useTermsStyles} from "./terms.style";
import {ArrowLeft, ArrowSmallLeft} from "../../assets/images/icons/arrows";
import {rem} from "../../assets/styles/abstracts/functions";
import {Checkbox} from "antd";
import useLocalization from "../../assets/lang";
import {useState} from "react";
import {Link, NavLink} from "react-router-dom";
import {Routes} from "../../router/routes";

const TermsComponent = () =>{
    const classes = useTermsStyles();
    const translate = useLocalization();
    const [checked, setChecked] = useState(false);
    function handleCheckboxChange(event: any){
        setChecked(event.target.checked);
    }

    console.log(checked);
    return (
        <div className={classes.container}>
            <div className={classes.backAndIcon}>
                <Link to={Routes.default}>
                    <div className={classes.icon}>
                        <div className={classes.arrow}><ArrowSmallLeft/></div>
                    </div>
                </Link>
                <h4 style={{marginTop:rem(10), color:"#2BAAE2"}}>{translate("back")}</h4>
            </div>
            <h1>{translate("contract_terms")}</h1>
            <div className={classes.terms}>
                <h1>{translate("ai_maturity")}</h1> <br/>
                <p>{translate("first_long_term")}</p> <br/>
                <h1>{translate("ai_usage")}</h1> <br/>
                <p>{translate("second_long_term")}</p>
                    <br/>
                <Checkbox onClick={handleCheckboxChange} style={{border:"blue"}}><h3>{translate("accept_contract")}</h3></Checkbox><br/> <br/>
                <div className={classes.line}></div><br/><br/>

                <div className={classes.buttons}>
                    <button className={classes.declineBtn}>{translate("decline")}</button>
                    <Link to={Routes.login}>
                        <button className={`${classes.continueBtn} ${checked ? classes.checkedContinueBtn : ""}`}>{translate("continue")}</button>
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default TermsComponent;