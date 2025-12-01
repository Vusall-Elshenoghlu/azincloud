import {useAboutStyles} from "./about.style";
import cloudImage from "assets/images/statics/cloud.png";
import cloudMask   from "/src/assets/images/statics/cloudMask.png";
import useLocalization from "../../../assets/lang";
import {useNavigate} from "react-router-dom";
import {Routes} from "../../../router/routes";
const AboutComponent = () => {
    const classes = useAboutStyles();
    const translate = useLocalization();
    const navigate=useNavigate();

    return (
        <div className={classes.container}>
              <div className={classes.cloudContainer}>
                  <img src={cloudImage} className={classes.cloud} alt='cloud-image'/>
                  <img className={classes.cloudImgMask} src={cloudMask} alt='cloud-mask'/>
              </div>
            <div className={classes.about}>
                <h1 className={classes.aboutText}>{translate("about")}</h1>
                <h4 className={classes.content}>{translate("public_cloud_description")}</h4>
                <button onClick={()=>navigate(Routes.about)} className={classes.showMoreButton}>{translate("more")}</button>
            </div>
        </div>
    );
};
export default AboutComponent;