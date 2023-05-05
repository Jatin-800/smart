import {Container,Row,Col,Card,ListGroup} from "react-bootstrap";
import { prodata } from "../data/data";
import { useNavigate } from "react-router-dom";
function Product() {
  const nav = useNavigate()
  console.log(prodata);
    return (
      <>
      <Container fluid>
        <Row>
          {
           
             prodata.map(function(d){
              return(
                
              
                <Col className="m-5" md={3}>
                  
                <Card className="cur" onClick={()=>nav('/details',{state:d})}>
      <Card.Img  variant="top" src={d.Image}  />
      <Card.Body>
        {/* <Card.Title>Card Title</Card.Title> */}
        <Card.Text>
         {d.name}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{d.price}/-</ListGroup.Item>
        <ListGroup.Item style={{textDecoration:"line-through"}}>{d.mrp}</ListGroup.Item>
        {/* <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Details</Card.Link>
        <Card.Link href="#">Add to Cart</Card.Link>
      </Card.Body>
    </Card>
              </Col>
              )
              
          }
             )}
          </Row>
        
       </Container>
       </>
    )}
    export default Product;
    