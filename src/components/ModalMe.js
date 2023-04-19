import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Modal, Button, Image } from 'react-bootstrap';
import { modal } from '../data/navbar.js';

const ModalMe = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            {modal.slice(1, 2).map((item) => (
                <div>
                    <NavLink onClick={handleShow}
                        className="navlink text-capitalize text-light text-decoration-none">
                        {item.navlink}
                    </NavLink>

                    <Modal show={show} onHide={handleClose} centered>
                        <Modal.Header closeButton>
                            <Modal.Title>{item.title}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Image fluid src={item.url} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={handleClose} className="border-0">
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            ))}
        </div>
    );
}

export default ModalMe;