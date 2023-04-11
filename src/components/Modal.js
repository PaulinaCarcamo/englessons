import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../styles/modal.css'
import { Image } from 'react-bootstrap';

const ModalSm = () => {
    const [smShow, setSmShow] = useState(false);

    return (
        <div>
            <Button onClick={() => setSmShow(true)} className="modalbutton me-2">
                Small modal
            </Button>

            <Modal
                size="sm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
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
        </div>
    );
}

// render(<ModalSm />);
export default ModalSm;