import { Button, Form, Stack } from 'react-bootstrap';

import { contact } from '../data/contact';
import '../styles/contact.css';

const Contact = () => {
    return (
        <div className="contact-section">
            {contact.map((item) => (

                <div class="text-center py-5 my-2">
                    {/* <img class="d-block mx-auto" src={img} alt="" height="57" /> */}
                    <h2>{item.title}</h2>
                    <h1>{item.subtitle}</h1>
                    <div class="col-lg-6 mx-auto">
                        <p class="lead mb-4">{item.paragraph}</p>

                        <Stack direction="horizontal" gap={3} className="form-items">
                            <Form.Control className="me-auto" placeholder="Add your email here..." />
                            <Button variant="secondary">Submit</Button>
                            <div className="vr" />
                            <Button variant="outline-danger">Home</Button>
                        </Stack>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Contact;