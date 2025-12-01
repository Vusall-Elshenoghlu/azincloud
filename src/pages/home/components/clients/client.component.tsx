import { useClientStyles } from './client.style';
import azercell from '/src/assets/images/statics/azercell.png';
import aztv from '/src/assets/images/statics/aztv.png';
import company3 from '/src/assets/images/statics/company-3.png';
import company4 from '/src/assets/images/statics/company-4.png';
import temizSeher from '/src/assets/images/statics/temiz-seher.png';
import mida from '/src/assets/images/statics/mida.png';
import useLocalization from "../../../../assets/lang";

const ClientComponent=()=>{
    const classes = useClientStyles();
    const translate = useLocalization();
    return (
        <div className={classes.clientSection}>
            <h2 className={classes.title}>{translate("clients")}</h2>
            <div className={classes.clientGrid}>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={azercell}
                        alt='Azercell'
                        className={classes.clientLogo}
                    />
                </div>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={aztv}
                        alt='AzTV'
                        className={classes.clientLogo}
                    />
                </div>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={company3}
                        alt='Elektron Hökumətin İnkişafı Mərkəzi'
                        className={classes.clientLogo}
                    />
                </div>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={company4}
                        alt='AZE'
                        className={classes.clientLogo}
                    />
                </div>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={mida}
                        alt='AZE'
                        className={classes.clientLogo}
                    />
                </div>
                <div className={classes.clientLogoContainer}>
                    <img
                        src={temizSeher}
                        alt='Tamiz Şəhər'
                        className={classes.clientLogo}
                    />
                </div>
            </div>
        </div>
    );
};

export default ClientComponent;