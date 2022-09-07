import React, { Component } from 'react'
import Slider from "react-slick";
import { Card, Container, Row } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export class NewArrival extends Component {

    constructor(props){
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

  render() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialslide:0
      };
    return (
      <div>
        <Container className="text-center">
            <div className='section-title text-center mb-55'>
                <h2>New Arrival &nbsp;
                <a className='btn btn-sm ml-2 site-btn' onClick={this.previous}><i className='fa fa-angle-left'></i></a>
                &nbsp;
                <a className='btn btn-sm ml-2 site-btn' onClick={this.next}><i className='fa fa-angle-right'></i></a> 

                </h2>
                
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
            <Slider ref={c=>(this.slider=c)} {...settings}>
          <div>
            <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/frozen-fish?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D81235&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
            </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/meat?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D117424&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-vegetables?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D23773&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
          </div>
          <div>
          <Card className="image-box card w-100">
                <img className='center w-75' src='https://chaldn.com/_mpimage/fresh-fruits?src=https%3A%2F%2Feggyolk.chaldal.com%2Fapi%2FPicture%2FRaw%3FpictureId%3D61651&q=low&v=1&m=400&webp=1' />
                  <Card.Body>    
                    <p className='product-name-on-card' >This is Test Product</p>
                    <p className='product-price-on-card' >Price: 250 BDT</p>
                  </Card.Body>
                </Card>
          </div>
        </Slider>
            </Row>
        </Container>        
      </div>
    )
  }
}

export default NewArrival
