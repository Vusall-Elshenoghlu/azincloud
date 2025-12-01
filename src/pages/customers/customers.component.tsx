import { useCustomersStyles } from './customers.style';
import searchIcon from '/src/assets/images/statics/search-normal.png';
import lockIcon from '/src/assets/images/statics/lock.png';
import moreCircle from '/src/assets/images/statics/more-circle.png';
import { useMemo, useState } from "react";
import dayjs from "dayjs";
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import SearchPopupComponent from "../../core/shared/popups/search-popup/search-popup.component";
import SearchByDateComponent from "../../core/shared/popups/search-by-date/search-by-date.component";
import { Pagination } from 'antd';
import useLocalization from "../../assets/lang";
import {IValues} from "./customers";

dayjs.extend(isSameOrAfter);
dayjs.extend(isSameOrBefore);

export const customersMockData = [
    {
        id: 1,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Paid',
    },
    {
        id: 2,
        name: 'Seyid Ahmedov',
        mail: 'seyid.ahmedov@gmail.com',
        phone: '+994 055 312 44 90',
        invoiceDate: '26.05.2023',
        status: 'Unpaid',
    },
    {
        id: 3,
        name: 'Leyla Sevdiyeva',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Pending',
        lateInfo: '2 day late',
    },
    {
        id: 4,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Completed',
    },
    {
        id: 5,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '24.05.2020',
        status: 'Completed',
    },
    {
        id: 6,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '29.05.2025',
        status: 'Completed',
    },
    {
        id: 7,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Completed',
    },
    {
        id: 8,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Completed',
    },
    {
        id: 9,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Completed',
    },
    {
        id: 10,
        name: 'Mehman Hüseynov',
        mail: 'ayaz.abdullayev@gmail.com',
        phone: '+994 055 654 76 98',
        invoiceDate: '26.05.2023',
        status: 'Completed',
    },
];

const CustomersComponent = () => {
    const classes = useCustomersStyles();
    const [showNamePopup, setShowNamePopup] = useState(false);
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const [showPhonePopup, setShowPhonePopup] = useState(false);
    const [showInvoiceDatePopup, setShowInvoiceDatePopup] = useState(false);

    const [nameFilter, setNameFilter] = useState('');
    const [emailFilter, setEmailFilter] = useState('');
    const [phoneFilter, setPhoneFilter] = useState('');
    const [invoiceDateFilter, setInvoiceDateFilter] = useState({ date1: null, date2: null });

    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const translate = useLocalization();

    const filteredCustomers = useMemo(() => {
        return customersMockData.filter(customer => {
            const nameMatch = !nameFilter || customer.name.toLowerCase().includes(nameFilter.toLowerCase());
            const emailMatch = !emailFilter || customer.mail.toLowerCase().includes(emailFilter.toLowerCase());
            const phoneMatch = !phoneFilter || customer.phone.includes(phoneFilter);

            let invoiceDateMatch = true;
            if (invoiceDateFilter.date1 && invoiceDateFilter.date2) {
                const customerDate = dayjs(customer.invoiceDate, "DD.MM.YYYY");
                const startDate = dayjs(invoiceDateFilter.date1);
                const endDate = dayjs(invoiceDateFilter.date2);
                invoiceDateMatch = customerDate.isSameOrAfter(startDate, "day") && customerDate.isSameOrBefore(endDate, "day");
            }

            return nameMatch && emailMatch && phoneMatch && invoiceDateMatch;
        });
    }, [nameFilter, emailFilter, phoneFilter, invoiceDateFilter]);

    const paginatedData = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredCustomers.slice(startIndex, endIndex);
    }, [filteredCustomers, currentPage, pageSize]);

    const handleNameSearch = (searchValue: IValues) => {
        setNameFilter(searchValue.value);
        setShowNamePopup(false);
        setCurrentPage(1);
    };

    const handleNameReset = () => {
        setNameFilter('');
        setShowNamePopup(false);
        setCurrentPage(1);
    };

    const handleEmailSearch = (searchValue: IValues) => {
        setEmailFilter(searchValue.value);
        setShowEmailPopup(false);
        setCurrentPage(1);
    };

    const handleEmailReset = () => {
        setEmailFilter('');
        setShowEmailPopup(false);
        setCurrentPage(1);
    };

    const handlePhoneSearch = (searchValue: IValues) => {
        setPhoneFilter(searchValue.value);
        setShowPhonePopup(false);
        setCurrentPage(1);
    };

    const handlePhoneReset = () => {
        setPhoneFilter('');
        setShowPhonePopup(false);
        setCurrentPage(1);
    };

    const handleInvoiceDateSearch = (date1: any, date2:any) => {
        setInvoiceDateFilter({ date1, date2 });
        setShowInvoiceDatePopup(false);
        setCurrentPage(1);
    };

    const handleInvoiceDateReset = () => {
        setInvoiceDateFilter({ date1: null, date2: null });
        setShowInvoiceDatePopup(false);
        setCurrentPage(1);
    };

    const getStatusClass = (status: any) => {
        const baseClass = classes.paid;
        switch (status.toLowerCase()) {
            case 'paid':
                return `${baseClass} ${classes.statusPaid}`;
            case 'unpaid':
                return `${baseClass} ${classes.statusUnpaid}`;
            case 'pending':
                return `${baseClass} ${classes.statusPending}`;
            case 'completed':
                return `${baseClass} ${classes.statusCompleted}`;
            default:
                return baseClass;
        }
    };

    const handlePageChange = (page: any, size: any) => {
        setCurrentPage(page);
        if (size !== pageSize) {
            setPageSize(size);
        }
    };

    const handleShowSizeChange = (current: any, size: any) => {
        setCurrentPage(1);
        setPageSize(size);
    };

    return (
        <div className={classes.page}>
            <div className={classes.container}>
                <h2 className={classes.title}>{translate("customers")}</h2>
                <div className={classes.tableContainer}>
                    <div className={classes.tableHead}>
                        <div className={classes.name}>
                            <p>{translate("name")},{translate("surname")}</p>
                            <img
                                onClick={() => setShowNamePopup(prev => !prev)}
                                src={searchIcon}
                                className={classes.searchIcon}
                                alt={'search-icon'}
                            />
                            {showNamePopup && (
                                <SearchPopupComponent
                                    onSearch={handleNameSearch}
                                    onReset={handleNameReset}
                                />
                            )}
                        </div>
                        <div className={classes.email}>
                            <p>{translate("email")}</p>
                            <img
                                onClick={() => setShowEmailPopup(prev => !prev)}
                                src={searchIcon}
                                className={classes.searchIcon}
                                alt={'search-icon'}
                            />
                            {showEmailPopup && (
                                <SearchPopupComponent
                                    onSearch={handleEmailSearch}
                                    onReset={handleEmailReset}
                                />
                            )}
                        </div>
                        <div className={classes.mobilePhone}>
                            <p>{translate("mobile_number")}</p>
                            <img
                                onClick={() => setShowPhonePopup(prev => !prev)}
                                src={searchIcon}
                                className={classes.searchIcon}
                                alt={'search-icon'}
                            />
                            {showPhonePopup && (
                                <SearchPopupComponent
                                    onSearch={handlePhoneSearch}
                                    onReset={handlePhoneReset}
                                />
                            )}
                        </div>
                        <div className={classes.invoice}>
                            <p>{translate("last_invoice_date")}</p>
                            <img
                                onClick={() => setShowInvoiceDatePopup(prev => !prev)}
                                src={searchIcon}
                                className={classes.searchIcon}
                                alt={'search-icon'}
                            />
                            {showInvoiceDatePopup && (
                                <SearchByDateComponent
                                    onSearch={handleInvoiceDateSearch}
                                    onReset={handleInvoiceDateReset}
                                />
                            )}
                        </div>
                    </div>
                    {paginatedData.map(({ id, name, mail, phone, invoiceDate, status, lateInfo }) => (
                        <div key={id} className={classes.tableBody}>
                            <div className={classes.tableBodyItem}>
                                <h2>{name}</h2>
                            </div>
                            <div className={classes.tableBodyItem}>
                                <p>{mail}</p>
                            </div>
                            <div className={classes.tableBodyItem}>
                                <p>{phone}</p>
                            </div>
                            <div className={classes.tableBodyItem}>
                                <p>{invoiceDate}</p>
                            </div>
                            <div className={classes.tableBodyItem}>
                                <div className={getStatusClass(status)}>
                                    <h4>{status}</h4>
                                </div>
                                {lateInfo && <span className={classes.lateInfo}>{lateInfo}</span>}
                            </div>
                            <img src={lockIcon} className={classes.lockIcon} alt={'lockIcon'} />
                            <img src={moreCircle} className={classes.moreCircle} alt={'moreCircleIcon'} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination
                current={currentPage}
                pageSize={pageSize}
                total={filteredCustomers.length}
                onChange={handlePageChange}
                onShowSizeChange={handleShowSizeChange}
            />
        </div>
    );
};

export default CustomersComponent;
