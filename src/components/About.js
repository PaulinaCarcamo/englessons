import * as React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import AnimatedNumber from 'animated-number-react';
import { about, numbers } from '../data/about.js';
import '../styles/about.css'
import AOS from 'aos';

const About = () => {

    React.useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);

    const formatValue = (value) => value.toFixed(0);
    const img = about[0].img;

    return (
        <div id="about">
            <Container>
                <Row sm={1} md={1} lg={2} className="d-flex align-items-center">
                    <Col sm className="d-none d-sm-block text-center">
                        <Image src={img} height={350} alt="img" />
                        {/* className="image" src={item.img} height={300} alt="img" */}
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