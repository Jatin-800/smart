import {Container,Row,Col ,Carousel,Card,ListGroup} from "react-bootstrap";
import { Banner,product,section } from "../data/data";
import { useNavigate } from "react-router-dom";
function Home() {
  const nav = useNavigate()
    return (
      <>
      <Container fluid>
        <Row>
          <Col>
           <Carousel slide={false}>
            {
              Banner.map(function(d){
                return(

                  <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={d}
                    alt="First slide"
                  />
                </Carousel.Item>
                  
                )
              })
    
}
    </Carousel>
          </Col>
        </Row>
        <Row>
        
          <h1 style={{fontsize:30,textAlign:'center',marginTop:150,fontWeight:'bold',textDecoration:'underline',color:'skyblue'}}>OUR PRODUCTS</h1>
          {
            product.map(function(d){
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
       {
              section.map(function(d){
                return(

                  <div className="sec4">
        <div className="sec4-div">
        <h2 style={{color:'white',marginTop:30}}>Special Offer</h2>
        <p style={{fontSize:55,color:'white',fontWeight:'bold',marginTop:50,marginLeft:20}}>Save upto 50% off</p> 
        <p style={{fontSize:65,color:'white',marginLeft:30}}>on your First order</p> 
        </div> 
        <div className="sec4-div">
        <img src={d} style={{width:450,height:350,marginTop:20}} />
        </div>
        </div>
        
              )
              })
              
              
    
}
       
      </>
    )
 
        }
  export default Home;       
