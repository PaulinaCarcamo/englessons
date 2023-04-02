
import { Button, Container, Figure, Image } from 'react-bootstrap';
import '../styles/hero.css'
import { images } from '../data/images';

const img = images[0].img

const Hero = () => {
    return (
        <div>
            <div className="hero-content">
                <h1>Mr. Avila's</h1>
                <h1>English Lessons</h1>
                <Button size="lg" className="btn-one">This button</Button>
                {' '}
                <Button size="lg" className="btn-two">This button</Button>
                <div>
                    <Image src={img} height={400}></Image>
                </div>
            </div>

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

export default Hero;