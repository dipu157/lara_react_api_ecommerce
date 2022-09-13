import React, { Component } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider1.jpg';
import Slider2 from '../../assets/images/slider2.jpg';
import Slider3 from '../../assets/images/slider3.jpg';

export class HomeSlider extends Component {
  render() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplayspeed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialslide:0
      };

    return (
      <div>

        <Slider {...settings}>
          <div>
            <img className='slider-img' src={Slider1} />
          </div>
          <div>
          <img className='slider-img' src={Slider2} />
          </div>
          <div>
          <img className='slider-img' src={Slider3} />
          </div>
        </Slider>

      </div>
    )
  }
}

export default HomeSlider
