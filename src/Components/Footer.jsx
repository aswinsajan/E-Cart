import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
      <>
    <div className='fixed' style={{color:'white'}} >
      <MDBFooter bgColor='dark'  className='text-center text-lg-start text-muted text-white'>
    <section className=''> <br />
      <MDBContainer className='text-center text-md-start mt-5'>
        <MDBRow className='mt-3'>
          <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
            <h6 className='text-uppercase fw-bold mb-4 text-light'>
              <MDBIcon color='light'  className='me-3' />
              <i class="fa-solid fa-truck-fast fa-bounce me-2"></i> E-Cart 
            </h6>
            <p style={{color:'white'}}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas non sint, cupiditate explicabo ullam quos consectetur nesciunt, ratione delectus illum error. Neque quaerat voluptatum fugit recusandae sint quas nulla in.
            </p>
          </MDBCol>

          <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4' style={{textDecoration:'none'}}>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Links</h6>
            <p style={{textDecoration:'none'}}> 
               <a className='text-reset' style={{textDecoration:'none',color:'white'}}>
                <Link to={'/'} style={{textDecoration:'none',color:'white'}} > Home </Link> 
               
              </a>
            </p>
            <p>
              <a  className='text-reset' style={{textDecoration:'none',color:'white'}}>
              <Link to={'/cart'}  style={{textDecoration:'none',color:'white'}}> Cart </Link>  
              </a>
            </p>
            <p>
              <a href='#!' className='text-reset' style={{textDecoration:'none',color:'white'}}>
              <Link to={"/whishlist"} style={{textDecoration:'none',color:'white'}}> WhishList </Link> 
              </a>
            </p>
          </MDBCol>

          <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-white'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Guides</h6>
              <p>
                {/* <Link style={{textDecoration:'none'}}> React</Link> */}
              <a href='#!' style={{textDecoration:'none',color:'white'}} className='text-reset'>
                React
              </a>
            </p>
            <p>
              <a href='#!' style={{textDecoration:'none',color:'white'}} className='text-reset'>
                React Bootstrap
              </a>
            </p>
            <p>
              <a href='#!' style={{textDecoration:'none',color:'white'}} className='text-reset'>
                Bootswatch
              </a>
            </p>
            
          </MDBCol>

          <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4 text-white'>
            <h6 className='text-uppercase fw-bold mb-4 text-white'>Contact Us</h6>
            <p>
              <MDBIcon color='light' icon='home' className='me-2' />
              New York, NY 10012, US
            </p>
            <p>
              <MDBIcon color='light' icon='envelope' className='me-3' />
              info@example.com
            </p>
            <p>
              <MDBIcon color='light' icon='phone' className='me-3' /> + 01 234 567 88
            </p>
            <p>
              <MDBIcon color='light' icon='print' className='me-3' /> + 01 234 567 89
            </p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>

    <div className='text-center p-4 text-black'  style={{ backgroundColor: 'dark', color:'white' }}>
      © 2023 Copyright:
      <a className='text-reset fw-bold'  style={{textDecoration:'none', color:'white'}} href='https://mdbootstrap.com/'>
        e-cart.Build with react
      </a>
    </div>
    </MDBFooter>
    </div>


      </>
  )
}

export default Footer