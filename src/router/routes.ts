export enum Routes {
    default = '/',
    auth = '/auth',
    home = '/',
    form = '/form',
    login = '/auth/login',
    register = '/register',
    welcome = '/welcome-user',
    about = '/about',
    contact = '/contact',
    products = '/products',
    news='/news',
    newsDetail='/news/:id',
    terms='/terms',
    faq='/faq',
    otp='/otp',
    search='/search',
    payments = '/payments',
    personal_info = '/personal-info',
    settings =  '/settings',
    forgot_password = '/forgot-password',
    reset_password = '/reset-password',
    card_details = '/card-details',
    customers = '/customers',
    add_cart = '/add-cart',
}


export const goTo = (route: string, param: string | number) => {
    return route + '/' + param;
};

export const goToWithQuery = (route: string, param: any) => {
    let path = route + '?';
    if (param)
        for (const key in param) {
            if (path.substr(path.length - 1) !== '?')
                path += '&';
            path += key + '=' + param[`${key}`];
        }
    return path;
};
