import { Container, Col, Row, Image } from 'react-bootstrap';
import AnimatedNumber from 'animated-number-react';

import { about, numbers } from '../data/about';
import '../styles/about.css'

const About = () => {

    const formatValue = (value) => value.toFixed(0);
    const img = about[0].img;

    return (
        <Container>
            <Row
                sm={1} md={2}
                className="section-wrapper">
                <Col sm className="d-none d-sm-block">
                    {/* <Image src={img} height={500}></Image> */}
                    <Image src={img}
                        max-height={500}
                        fluid
                    ></Image>
                </Col>

                <Col sm>
                    {about.map((item) => (
                        <Row>
                            <h4>{item.title}</h4>
                            <h2>{item.subtitle}</h2>
                            <p>{item.paragraph}</p>
                        </Row>
                    ))}

                    {numbers.map((item) => (
                        <Col className="animated-numbers">
                            <span>
                                <AnimatedNumber
                                    value={item.value}
                                    formatValue={formatValue}
                                    duration={4000}
                                    className="animated-number"
                                />
                                <span className="increase-icon">{item.symbol}</span>
                            </span>
                            <p>{item.concept}</p>
                        </Col>
                    ))}
                </Col>
            </Row>
        </Container>
    );
}

export default About;