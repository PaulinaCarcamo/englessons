import '../styles/email.css';
import { images } from '../data/images';
import { Button, Col, Form, Row } from 'react-bootstrap';

const img = images[2].img;

const Email = () => {
    return (
        <div>
            {/* <div class="px-4 py-5 my-5 text-center">
                <img class="d-block mx-auto mb-4" src={img} alt="" height="57" />
                <h2>Subscribe To Newsletter For</h2>
                <h1>Getting Update</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text. Ever since the 1500s, when an unknown.</p>
   

                    <Form>
                        <Row>
                            <Col>
                                <Form.Control placeholder="City" />
                            </Col>
                            <Col>
                                <Button>Send</Button>
                            </Col>
                        </Row>
                    </Form>

                </div>

            </div> */}

            <div class="email">
                <div class="email__title">
                    {/* Squares Animation */}

                    <div class="px-4 py-5 my-5 text-center">
                        <img class="d-block mx-auto mb-4" src={img} alt="" height="57" />
                        <h2>Subscribe To Newsletter For</h2>
                        <h1>Getting Update</h1>
                        <div class="col-lg-6 mx-auto">
                            <p class="lead mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s standard dummy text. Ever since the 1500s, when an unknown.</p>


                            <Form>
                                <Row>
                                    <Col>
                                        <Form.Control placeholder="City" />
                                    </Col>
                                    <Col>
                                        <Button>Send</Button>
                                    </Col>
                                </Row>
                            </Form>

                        </div>

                    </div>
                </div>

                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
                <div class="cube"></div>
            </div>


        </div>
    )
}

export default Email;