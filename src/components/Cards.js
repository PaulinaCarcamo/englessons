import { Card, Col, Container, Image, Row } from "react-bootstrap";
import '../styles/cards.css'
import { images } from "../data/images";

const img = images[2].img

const Cards = () => {
    return (
        <div >

            <Container className="cards-container">
                {/* <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
            </Row> */}
                <Row md={3}>

                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                {/* <Card.Img src={img}></Card.Img> */}
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>

                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>



                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>

                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>

                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>

                    <Col sm>
                        <Card class="card">
                            <Card.Body class="card-details">
                                <Image src={img} className="card-image"></Image>
                                <Card.Title class="text-title">Card title</Card.Title>
                                <Card.Subtitle class="text-body">Here are the details of the card</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                            </Card.Body>
                            <button class="card-button">More info</button>
                        </Card>

                    </Col>


                    {/* <Col sm>
                        <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default Cards;