import {usePersonalInformationStyles} from './personal-information.style';
import {Col, Row} from 'antd';
import {EditIcon} from '../../assets/images/icons/crud';
import useLocalization from '../../assets/lang';

const PersonalInformationComponent = () => {
    const classes = usePersonalInformationStyles();
    const translate = useLocalization();

    const infos = [
        {label: `${translate('name')}, ${translate('surname')}`, value: 'Türkay Zərgərli'},
        {label: translate('registered_address'), value: '840 Adams Ave.Poughkeepsie, NY 12601'},
        {label: translate('country'), value: 'Amerika Birləşmiş Ştatları'},
        {label: translate('city'), value: 'New York'},
        {label: translate('company'), value: '#&Turka Ag Group MMC'},
        {label: translate('email'), value: 'zergerliturka@gmail.com'},
        {label: translate('mobile_number'), value: '055 000 00 00'},
    ];

    return (
        <div className={classes.container}>
            <h1>{translate('personal_information')}</h1>
            <div className={classes.personalInfoContainer}>
                <Row gutter={[40, 40]} className={classes.infoRow}>
                    {infos.map((info, index) => (
                        <Col xs={12} sm={8} md={6} key={index}>
                            <div className={classes.infoBox}>
                                <p className={classes.label}>{info.label}</p>
                                <h3 className={classes.value}>{info.value}</h3>
                            </div>
                        </Col>
                    ))}
                </Row>
            </div>

            <div className={classes.changePassword}>
                <div className={classes.textAndIcon}>
                    <h2>{translate('change_password')}</h2>
                    <div className={classes.editIcon}>
                        <EditIcon/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonalInformationComponent;