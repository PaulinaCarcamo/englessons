import { Button, Container, Figure, Image } from 'react-bootstrap';
import { content, buttons } from '../data/header.js'
import Navbar from './Navbar.js';
import '../styles/header.css'
import { Envelope, Whatsapp } from 'react-bootstrap-icons';

const Header = () => {
    return (
        <div className="header-container">
            <Navbar />

            {content.map((item) => (
                <div className="header-content">
                    <h1>{item.title}</h1>
                    <h1>{item.subtitle}</h1>

                    {/* {buttons.map((item) => (
                        <Button href={item.contact}
                        className="btn btn-link text-decoration-none btn-light text-light 
                        border-0 rounded-3 mx-1 my-3 shadow-lg"
                        >
                            {item.btn}
                        </Button>
                    ))} */}

                    {buttons.slice(0, 1).map((item) => (
                        <Button href={item.contact}
                            className="btn btn-link text-decoration-none btn-light text-light 
                        border-0 rounded-3 mx-1 my-3 shadow-lg"
                        >
                            <div className="d-flex align-items-center">
                                <span className="me-1">{item.btn}</span>
                                <Envelope />
                            </div>
                        </Button>
                    ))}

                    {buttons.slice(1, 2).map((item) => (
                        <Button href={item.contact}
                            className="btn btn-link text-decoration-none btn-light text-light 
                        border-0 rounded-3 mx-1 my-3 shadow-lg"
                        >
                            <div className="d-flex align-items-center">

                                <span className="me-1">{item.btn}</span>
                                <Whatsapp />
                            </div>
                        </Button>
                    ))}

                    <div>
                        <Image src={item.img} height={300} alt="img" />
                    </div>
                </div>
            ))}

            <Container className="figures">
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
                <Figure className="fig-item" />
            </Container>
        </div>
    );
}

export default Header;