import { useEffect, useState } from "react";
import { Pagination, Row } from "antd";
import { DownloadIcon } from "../../assets/images/icons/frame";
import { rem } from "../../assets/styles/abstracts/functions";
import cardIcon from "/src/assets/images/statics/card.png";
import CardPopupComponent from "../../core/shared/popups/card-popup/card-popup.component";
import useLocalization from "../../assets/lang";
import { usePaymentStyles } from "./payments.style";

export const mockServiceData = [
    {
        id: 1,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Paid',
        lateInfo: null,
    },
    {
        id: 2,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Unpaid',
        lateInfo: null,
    },
    {
        id: 3,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Pending',
        lateInfo: '2 day late',
    },
    {
        id: 4,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 5,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 6,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 7,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 8,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 9,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
    {
        id: 10,
        serviceName: 'Infrastructure as a Service,  Platform as a Service,  Software...',
        invoiceDate: '26.05.2023',
        status: 'Bitmiş',
        lateInfo: null,
    },
];

const PaymentsComponent = () => {
    const classes = usePaymentStyles();
    const translate = useLocalization();

    const [currentPage, setCurrentPage] = useState(1);
    const [showPopup, setShowPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const pageSize = 5;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const paginatedData = mockServiceData.slice(
        (currentPage - 1) * pageSize,
        currentPage * pageSize
    );

    const getStatusClassName = (status: string) => {
        if (status === "Paid") {
            return classes.paid;
        } else if (status === "Unpaid" || status === "Bitmiş") {
            return `${classes.paid} ${classes.unpaid}`;
        } else {
            return `${classes.paid} ${classes.pending}`;
        }
    };

    return (
        <div className={classes.container}>
            {showPopup && (
                <div className={classes.popupOverlay}>
                    <CardPopupComponent onClose={() => setShowPopup(false)} />
                </div>
            )}

            <h1>{translate("payments")}</h1>
            <br /><br />

            <div className={classes.cards}>
                <div className={classes.cardDetail}>
                    <h2>{translate("cards")}</h2>
                    <br />
                    <div className={classes.numberAndActive}>
                        <div className={classes.numAndMainCard}>
                            <h3>**** **** **** 3456</h3>
                            <div className={classes.mainCard}>
                                <h4>{translate("main")}</h4>
                            </div>
                        </div>
                        <div className={classes.activeButton}>
                            <h4>{translate("active")}</h4>
                        </div>
                    </div>
                </div>

                <div className={classes.addCard} onClick={() => setShowPopup(true)} style={{ cursor: "pointer" }}>
                    <div className={classes.plusDiv}>
                        <p>+</p>
                    </div>
                    <h2>{translate("add_card")}</h2>
                </div>
            </div>

            <br /><br />

            <div className={classes.servicesName}>
                <div className={classes.tableHead}>
                    <h2>{translate("service_name")}</h2>
                    <h2 className={classes.invoice}>{translate("invoice_date")}</h2>
                </div>

                <div className={classes.tableDown}>
                    <Row gutter={[0, 0]}>
                        {paginatedData.map((item, index) => (
                            <div
                                key={item.id}
                                className={classes.tableBody}
                                style={{
                                    position: "relative",
                                    backgroundColor: index % 2 === 0 ? "#FCFCFC" : "#FFFFFF"
                                }}
                            >
                                <div className={classes.nescafe}>
                                    <h2>{item.serviceName}</h2>
                                    <h2>{item.invoiceDate}</h2>

                                    <div className={classes.lastTwoDays}>
                                        <div className={getStatusClassName(item.status)}>
                                            <h4>{item.status}</h4>
                                        </div>

                                        {item.status === "Pending" && (
                                            <div className={classes.lateInfoText}>
                                                <h2>{item.lateInfo}</h2>
                                                <img
                                                    className={classes.cardIcon}
                                                    onClick={() => setShowPopup(true)}
                                                    src={cardIcon}
                                                    alt="card"
                                                    style={{ cursor: "pointer" }}
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <div className={classes.downloadIcon}>
                                    <DownloadIcon />
                                </div>
                            </div>
                        ))}
                    </Row>

                    <div className={classes.paginationContainer}>
                        <Pagination
                            current={currentPage}
                            pageSize={pageSize}
                            total={mockServiceData.length}
                            onChange={(page) => {
                                setCurrentPage(page);
                                setShowPopup(false);
                            }}
                            showSizeChanger={false}
                            responsive={true}
                            simple={isMobile}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentsComponent;
