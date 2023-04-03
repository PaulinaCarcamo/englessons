import { Button, Container, Figure, Image } from 'react-bootstrap';
import { content, buttons } from '../data/header.js'
import TopNav from './TopNav.js';
import '../styles/header.css'

const Header = () => {
    return (
        <div className="header-container">
            <TopNav />

            {content.map((item) => (
                <div className="header-content">
                    <h1>{item.title}</h1>
                    <h1>{item.subtitle}</h1>

                    {buttons.map((item) => (
                        <Button className="btn btn-light text-light border-0 mx-1 my-3">
                            {item.btn}
                        </Button>
                    ))}
                    <div>
                        <Image src={item.img} height={300} />
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