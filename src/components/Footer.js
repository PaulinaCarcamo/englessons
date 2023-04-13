import { Container, Image } from "react-bootstrap";
import { content, icons } from "../data/footer.js";
import { Link } from "react-router-dom";
import "../styles/border.css";
import "../styles/footer.css";

const Footer = () => {
    return (
        <div id="email">
            <section>
                <div className="wave"></div>
            </section>

            <Container fluid className="footer pb-4">
                {icons.map((item) => (
                    <Link to={item.url}>
                        <Image className="icon mx-3 mb-4" height={30} src={item.icon} alt="icon" />
                    </Link>
                ))}

                {content.map((item) => (
                    <p className="copyright">&copy; {item}</p>
                ))}
            </Container>
        </div>
    );
}

export default Footer;