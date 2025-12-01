import HeaderComponent from './components/header/header.component';
import {usePublicLayoutStyles} from './public.style';
import {Outlet} from 'react-router-dom';
import FooterComponent from './components/footer/footer.component';
import ScrollToTop from '../../shared/scroll-to-top/scroll-to-top.component';

const PublicComponent = () => {
    const classes = usePublicLayoutStyles();


    return (
        <div className={classes.public}>
            <HeaderComponent/>
            <ScrollToTop/>
            <div>
                <Outlet/>
            </div>
                <FooterComponent/>
        </div>
    );
};


export default PublicComponent;

