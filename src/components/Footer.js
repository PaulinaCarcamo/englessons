import { Col, Container, Figure, Image, Row, Stack } from "react-bootstrap";
import { content, icons } from "../data/footer.js";
import "../styles/border.css";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div id="contact">
            <section>
                <div className="wave"></div>
            </section>

            <Container fluid className="footer pb-4">
                {icons.map((item) => (
                    <Image className="icon mx-3 mb-4" height={30} src={item} alt="icon" />
                ))}

                {content.map((item) => (
                    <p className="copyright">&copy; {item}</p>
                ))}
            </Container>
        </div>
    );
}

export default Footer;