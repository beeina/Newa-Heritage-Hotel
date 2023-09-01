import { Col } from 'react-bootstrap';



export default function ConfirmationPage ()  {
    let params = window.location.search;
    const id = params.split('=')[1];
   
    return (
        <div className="form-container">
            <Col md={{span: 8, offset: 2}}>
                <span>Your booking is confirmed and confirmation number is <strong>{id}</strong></span>
            
            </Col>
        </div>
    );
}