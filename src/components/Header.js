import { Button, Container, Figure } from 'react-bootstrap';
import { Calendar2WeekFill, SendFill } from 'react-bootstrap-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { content, buttons } from '../data/header.js'
import Navbar from './Navbar.js';
import '../styles/header.css'

const Header = () => {
    return (
        <div className="header-container">
            <Navbar />

            {content.map((item) => (
                <div className="header-content">
                    <h1>{item.title}</h1>
                    <h1>{item.subtitle}</h1>

                    {buttons.slice(0, 1).map((item) => (
                        <Button href={item.contact}
                            className="btn btn-link text-decoration-none btn-light text-light 
                        border-0 rounded-3 mx-1 my-3 shadow-lg"
                        >
                            <div className="d-flex align-items-center">
                                <span className="me-1">{item.btn}</span>
                                <SendFill />
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
                       <Calendar2WeekFill/>
                            </div>
                        </Button>
                    ))}

                    <div>
                        <LazyLoadImage
                            alt="img"
                            effect="blur"
                            height={320}
                            src={item.img}
                        // placeholder={}
                        />
                        {/* <Image src={item.img} height={300} alt="img" /> */}
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