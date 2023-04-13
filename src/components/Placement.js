import { Button, Col, Container, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { placement, buttons } from '../data/placement.js';
import '../styles/placement.css';

const Placement = () => {
    return (
        <div id="placement" className="placement-container">
            <Container className="py-5 mb-2">
                <Row className="justify-content-md-center py-sm-5">
                    <Col lg={8} className="text-center">
                        {placement.map((item) => (
                            <Stack className="stack" gap={1}>
                                <h4>{item.title}</h4>
                                <h2>{item.subtitle}</h2>
                                <h5>{item.paragraph}</h5>
                            </Stack>
                        ))}

                        {buttons.map((item) => (
                            <Link to={item.url}>
                                <Button className="btn btn-light text-light border-0 mt-3">{item.btn}</Button>
                            </Link>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Placement;