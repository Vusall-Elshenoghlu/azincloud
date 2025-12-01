import {useServicesStyles} from './service.style';
import cardShadow from '/src/assets/images/statics/card-shadow.png';
import cardIcon1 from '/src/assets/images/statics/card-icon1.png';
import cardIcon2 from '/src/assets/images/statics/card-icon2.png';
import cardIcon3 from '/src/assets/images/statics/card-icon3.png';
import cardIcon4 from '/src/assets/images/statics/card-icon4.png';
import teamIcon from '/src/assets/images/statics/team.png';
import settingFile from '/src/assets/images/statics/setting-file.png';
import customersIcon from '/src/assets/images/statics/customers.png';
import govermentIcon from '/src/assets/images/statics/goverment.png';
import useLocalization from "../../../../assets/lang";

const ServicesComponent =()=>{
    const classes=useServicesStyles();
    const translate = useLocalization();
    const cardData=[
        {
            title: translate("aim"),
            text: translate("aim_text"),
            icon: <img className={classes.cardIcons} src={cardIcon1} alt='Card 1'/>,
            marginTop:0,
        },

        {
            title: translate("support"),
            text: <>
                <a href='mailto:info@cloud.az' style={{color:'#12475F', textDecoration:'underline' }}>info@cloud.az</a> {translate("support_text")}
            </>,
            icon: <img className={classes.cardIcons} src={cardIcon2} alt='Card 1'/>,
            marginTop:20,

        },
        {
            title: translate("market"),
            text: translate("market_text"),
            icon: <img className={classes.cardIcons} src={cardIcon3} alt='Card 1'/>,
            marginTop:40,

        },
        {
            title: translate("technology"),
            text: translate("technology_text"),
            icon: <img className={classes.cardIcons} src={cardIcon4} alt='Card 1'/>,
            marginTop:60,
        }
    ];
    const customers = [
        {
            icon: <img className={classes.customersIcon} src={teamIcon} alt='icon1' />,
            title: translate("service_our_team"),
            count: '+ 420',
        },
        {
            icon: <img className={classes.customersIcon} src={settingFile} alt='icon2' />,
            title: translate("service_our_projects"),
            count: '+ 130',
        },
        {
            icon: <img className={classes.customersIcon} src={customersIcon} alt='icon3' />,
            title: translate("service_private_customers"),
            count: '91',
        },
        {
            icon: <img className={classes.customersIcon} src={govermentIcon} alt='icon4' />,
            title: translate("service_government_customers"),
            count: '70',
        },
    ];

    return (
        <div className={classes.servicesSection}>
         <div className={'container'}>
             <h2 className={classes.title}>{translate("service_title")}</h2>
             <p className={classes.description}>{translate("service_description")}</p>
             <div className={classes.services}>
                 {
                     cardData.map((card, index)=>{
                         return (
                             <div className={classes.serviceContainer} key={index}>
                                 <div className={classes.serviceCard}
                                      style={{marginTop:card.marginTop}}>
                                     <div className='flex row gap-4'>
                                         {card.icon}
                                         <h3 className={classes.cardTitle}>{card.title}</h3>
                                     </div>
                                     <p className={classes.cardText}>{card.text}</p>
                                 </div>
                                 <img style={{marginTop:card.marginTop}} src={cardShadow} alt='cardShadow' />
                             </div>
                         );
                     })
                 }

             </div>
         </div>
            <div className={classes.customersSection}>
                <div className={classes.customersContainer}>
                    {customers.map((customer, index) => (
                        <div className={classes.customerCard} key={index}>
                            {customer.icon}
                            <p className={classes.customerTitle}>{customer.title}</p>
                            <p className={classes.customerCount}>{customer.count}</p>
                            <div className={classes.divider} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default ServicesComponent;