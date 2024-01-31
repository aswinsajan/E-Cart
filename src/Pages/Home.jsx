import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWhishlist } from '../redux/slices/whishlistSlice'
import { addToCart } from '../redux/slices/cartSlice'


function Home() {
const data=useFetch("http://dummyjson.com/products")
//console.log(data);
const dispatch=useDispatch()
  return (
    <Row className='ms-5' style={{marginTop:'100px' }}>
     {
     data?.length>0.?data?.map((product,index)=>(
    <Col key={index} className='mb-5' sm={12} md={6} lg={4} xl={3}>
      <Card className='shadow rounded bg-dark' style={{ width: '18rem', height:'30rem'}}>
      <Card.Img height={"200px"} variant="top" src={product?.thumbnail} />
      <Card.Body>
        <Card.Title style={{color:'red'}}>{product?.title}</Card.Title>
        <Card.Text>
          <p>{product?.description.slice(0,55)}...</p>
          <h5>${product?.price}</h5>
        </Card.Text>
        <div className='d-flex justify-content-between'>
        <Button className='btn btn-light' onClick={()=>dispatch(addToWhishlist(product))}> <i class="fa-solid fa-heart fa-beat-fade text-danger fa-2x"></i></Button>
        <Button className='btn btn-light' onClick={()=>dispatch(addToCart(product))}> <i class="fa-solid fa-cart-shopping fa-beat-fade text-success fa-2x "></i></Button>
        </div>
      </Card.Body>
    </Card>
      </Col>
      )):<p className='text-danger fs-4 fw-bolder'>Nothing to display</p>
       }
    </Row>
  )
}

export default Home