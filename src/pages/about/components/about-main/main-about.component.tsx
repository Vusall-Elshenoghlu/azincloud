import cloudImage from 'assets/images/statics/cloud.png';
import {useAboutStyles} from './main-about.style';
import AboutDetailComponent from '../about-detail/about-detail.component';
import useLocalization from '../../../../assets/lang';

const MainAboutComponent = () => {
    const classes = useAboutStyles();
    const translate = useLocalization();
    return (
        <>
            <div className={classes.container}>
                <img src={cloudImage} className={classes.cloud} alt='Cloud'/>
                <div className={classes.about}>
                    <h1 className={classes.aboutText}>{translate('about')}</h1>
                    <h4 className={classes.content}>
                        {translate('public_cloud_description')}
                    </h4>

                </div>
            </div>

        </>
    );
};

export default MainAboutComponent;
