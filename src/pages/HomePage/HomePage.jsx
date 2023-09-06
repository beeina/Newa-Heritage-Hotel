import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


export default function HomePage ()  {

   
    return (
        <Container>
           <Row>
                <Col xs={6} md={6} className=' mt-3'>
                    <Image src="design.jpg" thumbnail />
                </Col>
                <Col xs={6} md={6}>
                    <p className='white-text-color mt-3'>
                    Newa Heritage is a Newari heritage hotel in the midst of the heritage area of Kathmandu, where you will  experience the best quality services and Newari culture. 
                    Cultural traditions of Kathmandu can be seen in the hotel through an array of handmade traditional statues, wood carvings on the foundation of traditional style. 
                    This is the perfect holiday destination to feel the warmth and long lasting happiness with the great hospitality services.
                    </p>
                    <p className='white-text-color'>
                    The hotel is built with the combination of traditional touch coloured in bright color. 
                    The hotel displays the traditional and ancient architects of the Newari culture. It features a beautiful well decorated garden. 
                    The guest can stroll around the hotel area during the night while enjoying the cool, clean, fresh and chilling night breeze. 
                    The hotel consists of well-furnished rooms with an attached bath and open terrace from where our guests can have the peculiar view of night life of the city. 
                    The hotel is so new and clean, rooms are spacious and everything is in a good condition.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={6}>
                <p className='white-text-color mt-3'>
                Basantapur Durbar Square, usually referred to as Kathmandu Durbar Square, which is a UNESCO World Heritage Site. 
                It contains a beautiful and eclectic mix of architecture. It showcases the skills of Newari artists and craftsmen over several centuries. 
                It's also where the Malla and Shah kings ruled the city from, in their grand palaces with hidden courtyards and temples.
                </p>
                <p className='white-text-color'>
                The architectural and creative prowess of the Newar community spanning many centuries is on display at this UNESCO World Heritage Site. 
                Many palaces, courtyards, and temples can be found in the Square, all of which have recently received substantial repairs. 
                The combination of hindu and Buddhist architecture as well as Nepal’s rich cultural heritage are on display for visitors. 
                </p>
                &nbsp;</Col>
                <Col xs={6} md={6} className=' mt-3'>
                    <Image src="basantapur.jpg" thumbnail />
                </Col>
            </Row>

            <Row>
                <Col xs={6} md={6} className=' mt-3'>
                    <Image src="indra-jatra.jpg" thumbnail />
                </Col>
                <Col xs={6} md={6}>
                <p className='white-text-color mt-3'>
                Indra Jatra festival is one of Nepal’s most famous world heritage monument zones, the Kathmandu Durbar Square that is situated in the center of the city. 
                It is a festival of the Newars, the original inhabitants of the Kathmandu valley. 
                Indra Jatra, also known as Yenya, is the largest street festival in Nepal. 
                Yenya Festival consists of two parts, namely Indra Jatra and Kumari Jatra. 
                The celebrations of Indra Jatra include the flagpole ceremony, blood sacrifice, displays of Bhairava's masks, etc. 
                During Kumari Jatra, the living goddess will take the chariot to march through the streets of Kathmandu. 
                </p>
                &nbsp;</Col>
            </Row>

            <Row>
                <Col xs={6} md={6}>
                <p className='white-text-color mt-3'>
                The Newars, an ethnic community with a rich heritage of customs and traditions, constitute nearly 50% of the population in the Kathmandu Valley. 
                The Newars have played a pivotal role in shaping the rich history, arts, architecture, culture, and commerce of Nepal. 
                Newari culture is characterized by unique rituals and customs observed from birth to death. 
                Festivals, marriage ceremonies, and funerals are all celebrated in a distinctive Newari manner, showcasing their rich cultural heritage.
                </p>
                &nbsp;</Col>
                <Col xs={6} md={6} className=' mt-3'>
                    <Image src="newari_culture.jpg" thumbnail />
                </Col>
            </Row>
        </Container>
    );
}