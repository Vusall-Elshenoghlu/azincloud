import {useAboutDetailStyles} from './about-detail.style';
import teamImage from 'assets/images/statics/team.png';
import machineImage from 'assets/images/statics/machine.png';
import {AimOutlined, EyeOutlined, FlagOutlined, StarOutlined} from '@ant-design/icons';
import useLocalization from '../../../../assets/lang';

const AboutDetailComponent = () => {
    const classes = useAboutDetailStyles();
    const translate = useLocalization();
    return (
            <div className={`container ${classes.container}`}>
                <div className={`text-center ${classes.aboutText}`}>{translate('about')}</div>
                <p className={`text-center ${classes.aboutContent}`}>{translate('about_description_first')} <br/>
                    <br/> {translate('about_description_second')} </p>
                <div className={`row ${classes.row}`}>
                    <div className={`col-lg-6 ${classes.textBlock}`}>
                        <h3><AimOutlined/> {translate('our_mission')}</h3>
                        <p>
                            {translate('mission')}
                        </p>

                        <h3><FlagOutlined/> {translate('our_target')}</h3>
                        <p>
                            {translate('target')}
                        </p>
                    </div>
                    <div className={`col-lg-6 ${classes.imageBlock}`}>
                        <img src={teamImage} alt='Team' className={classes.image}/>
                    </div>
                </div>

                <div className={`row ${classes.rowReverse}`}>
                    <div className={`col-lg-6 ${classes.imageBlock}`}>
                        <img src={machineImage} alt='Machine' className={`${classes.image} ${classes.machineImage}`}/>
                    </div>
                    <div className={`col-lg-6 ${classes.textBlock}`}>
                        <h3><EyeOutlined/> {translate('our_looking')}</h3>
                        <p>
                            {translate('looking_first')} <br/> {translate('looking_second')}
                            <br/> {translate('looking_third')}
                        </p>

                        <h3><StarOutlined/> {translate('our_values')}</h3>
                        <p>
                            {translate('values_first')} <br/> {translate('values_second')}
                        </p>
                    </div>
                </div>
        </div>
    );
};

export default AboutDetailComponent;
