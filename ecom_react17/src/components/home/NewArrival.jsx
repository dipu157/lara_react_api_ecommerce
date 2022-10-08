import React, { Component } from 'react'
import Slider from "react-slick";
import { Card, Container, Row, Col } from 'react-bootstrap'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom'
import NewArrivalLoading from '../PlaceHolder/NewArrivalLoading';

export class NewArrival extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none"
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  componentDidMount() {

    axios.get(AppURL.ProductListByRemark("New")).then(response => {
      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: " "
      });
    }
    ).catch(error => {
    });
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
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
      initialslide: 0
    };

    const NewList = this.state.ProductData;
    const MyView = NewList.map((FPList, i) => {
      return <div>
        <Link className="text-link" to={"/productdetails/" + FPList.id} >
        <Card className="image-box card w-100">
          <img className='center w-75' src={FPList.image} />
          <Card.Body>
            <p className='product-name-on-card' >{FPList.title}</p>
            <p className='product-price-on-card' >Price: {FPList.price} BDT</p>
          </Card.Body>
        </Card>
        </Link>
      </div>
    });

    return (
      <div>
        <NewArrivalLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
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
              <Slider ref={c => (this.slider = c)} {...settings}>
                {MyView}
              </Slider>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default NewArrival
