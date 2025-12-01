import {Routes} from './routes';
import {createBrowserRouter} from 'react-router-dom';
import HomeComponent from 'pages/home/home.component';
import FormComponent from 'pages/form/form.component';
import FaqComponent from '../pages/faq/faq.component';
import OtpComponent from '../pages/otp/otp.component';
import NotFound from 'pages/not-found/not-found.component';
import TermsComponent from '../pages/terms/terms.component';
import PublicComponent from 'core/layouts/public/public.component';
import AboutPageComponent from '../pages/about/about-page.component';
import ContactPageComponent from '../pages/contact/contact-page.component';

import ProductsComponent from "../pages/products/components/products.component";
import SearchComponent from "../pages/search/search.component";
import NewsAndBlogDetailComponent from "../pages/news-and-blog-detail/news-and-blog-detail.component";
import PaymentsComponent from "../pages/payments/payments.component";
import PersonalInformationComponent from "../pages/personal-information/personal-information.component";
import PersonalSettingsComponent from "../pages/personal-settings/personal-settings.component";

import ProductsPageComponent from '../pages/products/productsPage.component';
import CardDetailsComponent from '../pages/card-details/cardDetails.component';
import WelcomeUserComponent from '../pages/welcome-user/welcome-user.component';
import LoginRegisterComponent from '../pages/login-register/login-register.component';
import ResetPasswordComponent from '../pages/reset-password/reset-password.component';
import ForgotPasswordComponent from '../pages/forget-password/forgot-password.component';
import NewsAndBlogPageComponent from '../pages/news-and-blog/news-and-blogPage.component';

import CustomersComponent from "../pages/customers/customers.component";
import AuthProtectedComponent from "./protected/auth-protected.component";
import AuthComponent from "../core/layouts/auth/auth.component";
import AddCartComponent from "../pages/add-cart/addCart.component";

const router = createBrowserRouter([
    {
        element: <PublicComponent/>,
        children: [
            {
                path: Routes.home,
                element: <HomeComponent/>,
            },
            {
                path: Routes.form,
                element: <FormComponent/>,
            },
            {
                path: Routes.welcome,
                element: <WelcomeUserComponent/>,
            },
            {
                path: Routes.about,
                element: <AboutPageComponent/>,
            },
            {
                path: Routes.contact,
                element: <ContactPageComponent/>,
            },
            {
                path: Routes.news,
                element: <NewsAndBlogPageComponent/>,
            },
            {
                path: Routes.newsDetail,
                element: <NewsAndBlogDetailComponent/>,
            },
            {
                path: Routes.products,
                element: <ProductsPageComponent/>,
            },
            {
                path: Routes.terms,
                element: <TermsComponent/>,
            },
            {
                path: Routes.faq,
                element: <FaqComponent/>,
            },
            {
                path: Routes.login,
                element: <LoginRegisterComponent/>,
            },
            {
                path: Routes.search,
                element: <SearchComponent/>,
            },
            {
                path: Routes.otp,
                element: <OtpComponent/>,
            },
            {
                path: Routes.forgot_password,
                element: <ForgotPasswordComponent/>,
            },
            {
                path:Routes.reset_password,
                element: <ResetPasswordComponent/>,
            },
            {
                path: '*',
                element: <NotFound/>,
            }
        ],

    },
    {
        element: (<AuthProtectedComponent><PublicComponent/></AuthProtectedComponent>),
        children: [
            {
                path: Routes.personal_info,
                element: <PersonalInformationComponent />
            },
            {
                path: Routes.settings,
                element: <PersonalSettingsComponent />
            },
            {
                path: Routes.payments,
                element: <PaymentsComponent />
            },
            {
                path: Routes.customers,
                element: <CustomersComponent />
            },
            {
                path:Routes.card_details,
                element: <CardDetailsComponent/>,
            },
            {
                path: Routes.settings,
                element: <PersonalSettingsComponent/>,
            },
            {
                path:Routes.add_cart,
                element: <AddCartComponent/>,
            },


        ]
    }


], {basename: '/',});

export default router;
