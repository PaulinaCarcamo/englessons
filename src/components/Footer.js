import { Col, Container, Figure, Image, Row, Stack } from "react-bootstrap";
import { content, icons } from "../data/footer.js";
import "../styles/border.css";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div>
            <section>
                <div className="wave"></div>
            </section>

            <Container fluid className="footer">
                <Row className="d-flex flex-column text-center g-3">
                    <Col>
                        <Image height={30} src="" />
                    </Col>

                    {content.map((item) => (
                        <Col>
                            <p>&copy; {item}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Footer;