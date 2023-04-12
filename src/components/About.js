import * as React from 'react';
import AnimatedNumber from 'animated-number-react';
import { Container, Col, Row } from 'react-bootstrap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { about, numbers } from '../data/about.js';
import '../styles/about.css'

const About = () => {

    const formatValue = (value) => value.toFixed(0);
    const img = about[0].img;

    return (
        <div id="about">
            <Container>
                <Row sm={1} md={1} lg={2} className="d-flex align-items-center">
                    <Col sm className="d-none d-sm-block text-center">
                        {/* <Image src={img} height={350} alt="img" /> */}
                        <LazyLoadImage
                            alt="img"
                            effect="blur"
                            height={320}
                            src={img}
                        // placeholder={}
                        />
                    </Col>

                    <Col sm className="my-5 py-md-5">
                        {about.map((item) => (
                            <Row >
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
                                    <span className="symbol-icon">{item.symbol}</span>
                                </span>
                                <p>{item.concept}</p>
                            </Col>

                        ))}
                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default About;