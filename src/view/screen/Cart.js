import axios from "axios"
import { useEffect, useState } from "react"
import { Container,Row,Col } from "react-bootstrap"
import { useLocation } from "react-router-dom"

export default function Cart(){
const loc= useLocation()
const[Product,setData] =useState('')
const[prodata,setprodata] =useState('')

useEffect(()=>{
    async function show(){
        let res = await axios.post('showtocart',{})
        console.log(res.data);
        setData(res.data)
    } 
    show()},[])

function removeitem(index){
    console.log(index);
    setData(prodata.map((d,index1)=>{
        return index!==index1&& d
    }))

}
console.log(prodata);

    return(
        <Container>

                <Row>
                   
                   <Col>
                   <Row>
                        {
                           prodata ? prodata.map((d,index)=>{
                            if(d!==false){
                                return(
                                    
                                   <div className="addtocartshow d-flex">
                                    <div className="addtocartshow-img">
                                    <img src={d.image} style={{width:'100%'}}/>
                                        
                                    </div>
                                    <div className="addtocartshow-text">
                                    <p>{d.name}</p>
                                    <p>{d.price}</p>

                                   

                                    </div>
                                    
                                    <div className="addtocartshow-text">
                                    <button onClick={()=>removeitem(index)}>Remove</button>

                                    </div>
                                    </div>
                                )}
                            }):null
                        }
                        </Row>
                   </Col>
                   <Col>
                        <div className="bg-primary">
                            <h1>Pay</h1>

                        </div>
                   </Col>
                   
                </Row>

        </Container>
    )
}