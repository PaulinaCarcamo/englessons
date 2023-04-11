import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { featured, cards } from '../data/featured.js';
import '../styles/featured.css'

const Featured = () => {
    return (
        <div id="featured">
            <Container className="text-sm-center mb-3">
                {featured.map((item) => (
                    <div>
                        <h4>{item.title}</h4>
                        <h2>{item.subtitle}</h2>
                    </div>
                ))}
            </Container>

            <div className="cards-container">
                <Container className="cards-wrapper mt-md-5">
                    <Row sm={1} md={2} lg={3} className="px-sm-5 gy-5">
                        {cards.map((item) => (
                            <Col sm>
                                <Card className="card border-2 rounded-4 py-2">
                                    <Card.Body className="card-body d-flex flex-column align-items-center">
                                        <Image src={item.img} height={80} className="mb-3"></Image>
                                        <Card.Title><h5>{item.title}</h5></Card.Title>
                                        <Card.Subtitle><h6>{item.subtitle}</h6></Card.Subtitle>
                                        <Card.Text><p>{item.paragraph}</p></Card.Text>
                                    </Card.Body>
                                    {/* <button className="card-button">Contact me!</button> */}
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Featured;