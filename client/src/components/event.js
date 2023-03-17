import Card from 'react-bootstrap/Card';
import Moment from "react-moment";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const EventCard = (props) =>{

    return(
    <div className='row'>
      <div className="col" size='md'>
    <Card style={{ width: '18rem' }}>
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Date: {!props.time ? "TBD" : <Moment format={"DD/MM/YYYY"}>{props.time}</Moment>}</Card.Subtitle>
      <Card.Text>
        {props.location}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
  </div>
  )}

export default EventCard;