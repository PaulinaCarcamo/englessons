import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';

import { featured, cards } from '../data/featured';
import '../styles/featured.css'

const Featured = () => {
    return (

            <div className="cards-container">
                {featured.map((item) => (
                    <div>
                        <h4>{item.title}</h4>
                        <h2>{item.subtitle}</h2>
                    </div>
                ))}
                <Container className="cards-wrapper mt-5">
                    <Row sm={1} md={2} lg={3} className="cards-row gy-5">
                        {cards.map((item) => (
                            <Col sm>
                                <Card className="card ">
                                    <Card.Body className="card-body">
                                        <Image src={item.img} className="card-image"></Image>
                                        <Card.Title><h5>{item.title}</h5></Card.Title>
                                        <Card.Subtitle><h6>{item.subtitle}</h6></Card.Subtitle>
                                        <Card.Text><p>{item.paragraph}</p></Card.Text>
                                    </Card.Body>
                                    <button className="card-button">More info</button>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>


    )
}

export default Featured;