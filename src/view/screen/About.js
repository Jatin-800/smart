import '../style/style.css'
import {Description} from '../data/data.js'
import { Container,Row,Col } from 'react-bootstrap'
export default function About(){
  return(
      Description.map(function(d){
      return(
        <Container fluid>
          <Row>
            <Col>
            <div>
              <h1 className='sec3'>ABOUT US</h1>
              <div className='section'>
               <img src={d} alt='' className='sec2'/>
               <p className='sec1'>Today, we are proud to offer highly skilled repair services for all watch models. We combine our state of the art web platform with time-tested craftsmanship to provide a repair experience like no other.
               We have full access to every major watch manufacturer and parts supplier. We provide factory maintenance at a fraction of the turnaround time compared to local jewelers and even the factories. With three master watchmakers, two watch technicians, and a great customer service team, we are ready to exceed your expectations.</p>
            </div>
            </div>
            </Col>
          </Row>
      </Container>
     )
  
   })
  )}
  
   
  