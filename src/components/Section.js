import { Container, Col, Row, Image } from "react-bootstrap";
import { images } from "../data/images";
import '../styles/section.css'
import AnimatedNumber from "animated-number-react";

const img = images[1].img



const Section = () => {

    const formatValue = (value) => value.toFixed(0);

    return (
        <Container className="section-container">
            {/* <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row> */}
            <Row>
                <Col sm>
                    <Image src={img} height={450}></Image>
                </Col>
                <Col sm className="section-desc">
                    <Row>

                        <h4>Who we are</h4>
                        <h2>We Provide English Lessons That Helps You Succeed</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys standard dummy text. Vivamus ullam corper text of the printing and typesetting
                            Lorem Ipsum is simply dummy text of the printing and typesetting has been the industrys standard dummy text.</p>
                    </Row>

                    <Row className="animated-numbers">
                        <Col lg="3">
                            <span>
                                <AnimatedNumber
                                    value={500}
                                    formatValue={formatValue}
                                    duration={5000}
                                    className="animated-number"
                                />
                                <span className="increase-icon">+</span>
                                <p>Students taught</p>
                            </span>
                        </Col>
                        <Col lg="3">
                            <span>
                                <AnimatedNumber
                                    value={100}
                                    formatValue={formatValue}
                                    duration={5000}
                                    className="animated-number"
                                />
                                <span className="increase-icon">%</span>
                                <p>Professionalism</p>
                            </span>
                        </Col>
                    </Row>




                </Col>
                {/* <Col sm>sm=true</Col> */}
            </Row>
        </Container>
    )
}

export default Section;