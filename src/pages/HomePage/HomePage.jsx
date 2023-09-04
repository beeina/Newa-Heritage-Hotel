import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function HomePage ()  {

   
    return (
        <Container>
           <Row>
                <Col xs={6} md={6}>
                    <Image src="design.jpg" thumbnail />
                </Col>
                <Col xs={6} md={6}>
                    <p className='p-text-color'>
                    Newa Heritage is a Newari heritage hotel in the midst of the heritage area of Kathmandu. Where you will  experience the best quality services and Newari culture. 
                    Cultural traditions of Kathmandu can be seen in the hotel through an array of handmade traditional statues, wood carvings on the foundation of traditional style. 
                    This is the perfect holiday destination to feel the warmth and long lasting happiness with the great hospitality services.
                    </p>
                    <p className='p-text-color'>
                    The hotel is built with the combination of traditional touch coloured in bright color. 
                    The hotel displays the traditional and ancient architects of the Newari culture. It features a beautiful well decorated garden. 
                    The guest can stroll around the hotel area during the night while enjoying the cool, clean, fresh and chilling night breeze. 
                    The hotel consists of well-furnished rooms with an attached bath and open terrace from where our guests can have the peculiar view of night life of the city. 
                    The hotel is so new and clean, rooms are spacious and everything is in a good condition.
                    </p>
                </Col>
               
            </Row>
            <Row>
                <Col xs={6} md={6}>&nbsp;</Col>
                <Col xs={6} md={6}>
                    <Image src="basantapur.jpg" thumbnail />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={6}>
                    <Image src="indra-jatra.jpg" thumbnail />
                </Col>
            </Row>
            <Row>
                <Col xs={6} md={6}>&nbsp;</Col>
                <Col xs={6} md={6}>
                    <Image src="newari_culture.jpg" thumbnail />
                </Col>
            </Row>
        </Container>
    );
}