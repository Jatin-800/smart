import { useLocation,useNavigate } from "react-router-dom";
import { useState } from "react";
import { Container,Col,Row } from "react-bootstrap";
import axios from "axios";
import "../style/style.css"
function Details(){
    const nav=useNavigate()

    const loc=useLocation()
    const[product,setproduct] = useState(loc.state)
    const[prodata,setprodata] = useState(loc.state)
    console.log(product);
    async function detailsitem(product){

        console.log(product);
        let res = await axios.post("addtocart",product)
        console.log(res.data);
        
        
        }
        

    function productaddtocart(){
        alert('Addtocart')
    }
    function productbuynow(){
        alert('Buy Now')
    }
    return(
        <Container>
            <Row>
                <Col lg={6}>
                    <div className='w-75 p-3'>
                        <img src={product.Image}alt="" className="productimg"/>
                        </div>
                </Col>
                <Col lg={6}>
                    <div>
                        <p>{product.name}</p>
                        <p>{product.price}</p>
                    </div>
                    <div className="btn">
                    <button className="btn1" value={product} onClick={()=>productbuynow(product)}>Buy Now</button>
                    <button className="btn2" value={product} onClick={()=>detailsitem(product)}>Add to Cart</button>
                    </div>
                    
                </Col>

                
            </Row>
        </Container>
    )
}
export default Details;