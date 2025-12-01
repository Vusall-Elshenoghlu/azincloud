import {Link} from 'react-router-dom';
import {Routes} from 'router/routes';
import useLocalization from '../../assets/lang';
import {useNotFoundStyles} from './not-found.style';
import NotFound from 'assets/images/statics/NotFound.png';

const NotFoundComponent = () => {
    const classes=useNotFoundStyles();
    const translate = useLocalization();
    return (
            <div className={classes.notFoundSelect}>
                    <div className={classes.notFoundContainer}>
                        <div className={classes.notFoundText}>
                            <img src={NotFound} alt='404' className={classes.notFoundImage} />
                            <p>{translate('not_found_text')}</p>
                            <Link to={Routes.default} className={classes.notFoundBtn}>
                                {translate('go_back')}
                            </Link>
                        </div>
                    </div>
            </div>
    );
};

export default NotFoundComponent;
