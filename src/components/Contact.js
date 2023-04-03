import { Button, Col, Container, Form, Row, Stack } from 'react-bootstrap';
import { contact, buttons } from '../data/contact.js';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className="contact-container">
            <Container className="py-5 mb-2">
                <Row className="justify-content-md-center py-sm-5">
                    <Col lg={6} className="text-center">
                        {contact.map((item) => (
                            <Stack>
                                <h3>{item.title}</h3>
                                <h2>{item.subtitle}</h2>
                                <h5>{item.paragraph}</h5>
                            </Stack>
                        ))}

                        <Stack direction="horizontal" gap={2}>
                            <Form.Control placeholder="Add your message here..." className="border-2" />
                            {buttons.map((item) => (
                                <Button className="btn btn-light text-light border-0 mx-1 my-3">
                                    {item.btn}
                                </Button>
                            ))}
                        </Stack>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;