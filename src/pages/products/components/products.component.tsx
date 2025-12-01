import React, { useState } from "react";
import { useProductsStyles } from "./products.style";
import { useProductsQuery } from "../actions/products.queries";
import { LightToggle } from "assets/images/icons/light";
import { RocketIcon } from "assets/images/icons/rocket";
import { ArrowRightOutlined } from "@ant-design/icons";
import {  Spin } from "antd";
import useLocalization from "../../../assets/lang";
import { Link } from "react-router-dom";
import { IProducts } from "../products";
import {CPUSettingsIcon} from "../../../assets/images/icons/cpu-setting";

const ProductsComponent = () => {
    const classes = useProductsStyles();
    const [selectedTab, setSelectedTab] = useState("available");
    const { data: products = [], isLoading } = useProductsQuery();
    const translate = useLocalization();

    const filteredProducts = products.filter((item :IProducts) => item.type === selectedTab);
    const displayProducts = filteredProducts.slice(0, 3);

    return (
        <div className={classes.container}>
            <div className={classes.cards}>
                <div className={classes.tabsContainer}>
                    <button
                        onClick={() => setSelectedTab("available")}
                        className={selectedTab === "available" ? classes.activeTab : classes.inactiveTab}
                    >
                        <LightToggle />
                        <span className={classes.tabText}>{translate("available_products")}</span>
                    </button>
                    <button
                        onClick={() => setSelectedTab("upcoming")}
                        className={selectedTab === "upcoming" ? classes.activeTab : classes.inactiveTab}
                    >
                        <RocketIcon />
                        <span className={classes.tabText}>{translate("upcoming")}</span>
                    </button>
                </div>

                {isLoading ? (
                    <div className={classes.loadingContainer}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <div className={classes.productsGrid}>
                        {displayProducts.map((product :IProducts) => (
                            <div key={product.id} className={classes.productCard}>
                                <div className={classes.productIcon}>
                                    <CPUSettingsIcon/>
                                </div>
                                <h3 className={classes.productTitle}>{product.title}</h3>
                                <p className={classes.productSubtitle}>{product.subtitle}</p>
                                <div className={classes.productPrice}>
                                    <span>{product.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div className={classes.moreSection}>
                    <Link to="/products" className={classes.moreLink}>
                        <span className={classes.moreText}>{translate("more")}</span>
                        <div className={classes.moreArrow}>
                            <ArrowRightOutlined />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductsComponent;