import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Container,Col,Row } from "react-bootstrap";
function Details(){
    const loc=useLocation()
    const[product,setproduct] = useState(loc.state)
    const[prodata,setprodata] = useState(loc.state)
    console.log(product);

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
                    <button value={product} onClick={()=>productbuynow(product)}>Buy Now</button>
                    <button value={product} onClick={()=>productaddtocart(product)}>Add to Cart</button>
                    </div>
                    
                </Col>

                
            </Row>
        </Container>
    )
}
export default Details;