import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Image } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Modal from 'react-bootstrap/Modal';
import { navlinks, logo } from '../data/navbar.js';
import '../styles/navbar.css'
import '../styles/modal.css'
// import Button from 'react-bootstrap/Button';

const Navbar = () => {

    const [smShow, setSmShow] = useState(false);

    return (
        <Row className="nav-container m-0 d-flex g-3 py-4 px-md-4 text-light">
            <Col sm className="nav-element d-flex justify-content-center justify-content-md-start">
                <h5 className="fw-semibold nav-link disabled fs-5">{logo}</h5>
            </Col>
            <Col sm className="nav-element d-flex justify-content-center">
                {navlinks.slice(0, 4).map((item) => (
                    <Link to={item} spy={true} smooth={true} duration={800}
                        className="navlink text-capitalize mx-3 text-light text-decoration-none">
                        {item}
                    </Link>
                ))}
            </Col>

            <Col sm className="nav-element d-flex justify-content-center justify-content-md-end">
                {navlinks.slice(4, 6).map((item) => (
                    <Link to={item} spy={true} smooth={true} duration={800}
                        onClick={() => setSmShow(true)}
                        className="navlink text-capitalize mx-3 text-light text-decoration-none">
                        {item}
                    </Link>
                ))}
            </Col>

            {/* <Button onClick={() => setSmShow(true)} className="modalbutton me-2">
                Small modal
            </Button> */}

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
                centered
                className="text-center"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-sm">
                        Coming soon...
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src="https://cdn-icons-png.flaticon.com/512/2010/2010957.png" height={70}></Image>
                </Modal.Body>
            </Modal>

        </Row>
    );
}

export default Navbar;