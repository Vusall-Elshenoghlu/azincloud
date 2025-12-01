import React from 'react';
import {useCardDetailsStyles} from './cardDetails.style';
import underLine from '/src/assets/images/statics/Line21.png';
import photoLeft from '/src/assets/images/statics/cloudMask2.png';
import photoRight from '/src/assets/images/statics/cloudMask2.png';
import {Button, Card, Col, Form, Input, Row, DatePicker} from 'antd';
import useLocalization from "../../assets/lang";

const CardDetailsComponent =()=>{
    const classes=useCardDetailsStyles();
    const translate = useLocalization();
    const {MonthPicker}=DatePicker;
    return (
        <div className={`${classes.page} w-100 d-flex justify-center align-center`}>
            <div className={classes.panel}>
                <Card className={classes.card}>
                    <img className={classes.leftPhoto} src={photoLeft} alt='logo' />
                    <img className={classes.rightPhoto} src={photoRight} alt='logo' />
                    <div className={classes.cardTitle}>
                        <h2 className={classes.title}>{translate("card_detail")}</h2>
                        <img className={classes.underLine} src={underLine} alt='line' />
                    </div>
                    <Form>
                        <Form.Item name='card owner name'>
                            <Input className={classes.formInputs} placeholder={translate("card_holder")} required />
                        </Form.Item>
                        <Form.Item name='card digits'>
                            <Input className={classes.formInputs} placeholder={translate("card_number")} required />
                        </Form.Item>
                        <Row className={classes.row}>
                            <Col>
                                <Form.Item name='month/year'>
                                    <MonthPicker className={classes.dateInput} placeholder={translate("month_year")} required/>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item name='CVV'>
                                    <Input className={classes.cvvInput} placeholder='CVV' required />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row className={classes.row}>
                            <Col>
                                <Form.Item name='Cancel'>
                                    <Button  className={classes.cancelBtn} htmlType='submit'>
                                        <p>{translate("cancel")}</p>
                                    </Button>
                                </Form.Item>
                             </Col>
                            <Col>
                                <Form.Item name='Confrim'>
                                    <Button  className={classes.confrimBtn} htmlType='submit'>
                                        <p>{translate("confirm")}</p>
                                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>

                </Card>
            </div>

        </div>
    );
};
export default CardDetailsComponent;