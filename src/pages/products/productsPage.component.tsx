import {LightToggle} from 'assets/images/icons/light';
import {RocketIcon} from 'assets/images/icons/rocket';
import {ArrowRightOutlined} from '@ant-design/icons';
import {Card, Col, Row, Spin} from 'antd';
import {useState} from 'react';
import {rem} from 'assets/styles/abstracts/functions';
import {useProductsPageStyles} from './ProductsPage.style';
import {useProductsQuery} from './actions/products.queries';
import useLocalization from '../../assets/lang';
import {IProducts} from './products';
import {CPUSettingsIcon} from '../../assets/images/icons/cpu-setting';

const ProductsPageComponent = () => {
    const classes = useProductsPageStyles();
    const [selectedTab, setSelectedTab] = useState<'available' | 'upcoming'>('available');

    const {data: products = [], isLoading} = useProductsQuery();
    const translate = useLocalization();
    console.log(products);
    console.log('Hello wprld');
    const filteredProducts = products.filter((item: IProducts) => item.type === selectedTab);

    return (
            <div className={classes.container}>
                <div className={classes.products}>
                    <h1>{translate('products')}</h1>
                    <div className={`text-center ${classes.buttons}`}>

                        <button
                            onClick={() => setSelectedTab('available')}
                            className={`${selectedTab === 'available' ? classes.changeBtn : classes.nothingButton}`}
                        >
                            <LightToggle/>
                            <p className={classes.parag}>{translate('available_products')}</p>
                        </button>
                        <button
                            onClick={() => setSelectedTab('upcoming')}
                            className={`${selectedTab === 'upcoming' ? classes.changeBtn : classes.nothingButton}`}
                        >
                            <RocketIcon/>
                            <p className={classes.parag}>{translate('upcoming')}</p>
                        </button>
                    </div>
                </div>
                <div className={classes.cards}>
                    {isLoading ? (
                        <Spin size='large' style={{marginTop: rem(50)}}/>
                    ) : (
                        <Row className={`text-center ${classes.row}`} wrap>
                            {filteredProducts.map((product: IProducts) => (
                                <Col xs={24} sm={12} md={8} lg={6} key={product.id}>
                                    <Card className={classes.card}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                gap: rem(15),
                                            }}
                                        >
                                            <div className={`text-center ${classes.imageContainer}`}>
                                                <CPUSettingsIcon/>
                                            </div>
                                            <div>
                                                <h1 className={classes.parag}>{product.title}</h1>
                                            </div>
                                            <div>
                                                <h1 className={`${classes.parag} ${classes.subtit}`}>{product.subtitle}</h1>
                                            </div>
                                            <div className={`text-center ${classes.priceContainer}`}>
                                                <p className={classes.parag}>{product.price}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}


                </div>
        </div>
    );
};

export default ProductsPageComponent;