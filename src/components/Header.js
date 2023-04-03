import { Button, Container, Figure, Image } from 'react-bootstrap';

import { header } from '../data/header.js'
import '../styles/header.css'

const Header = () => {
    return (
        <div>
            {header.map((item) => (
                <div className="header-content">
                    <h1>{item.title}</h1>
                    <h1>{item.subtitle}</h1>
                    <Button className="btn-one mx-1">Send me an Email</Button>
                    <Button className="btn-two mx-1">Send me a Text</Button>
                    <div>
                        <Image src={item.img} height={400}></Image>
                    </div>
                </div>
            ))}

            <div className="fig-container">
                <Container className="figures">
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                    <Figure className="fig-item"></Figure>
                </Container>
            </div>
        </div>
    )
}

export default Header;