import React, { Component } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import ProductDetails from '../components/ProductDetails/ProductDetails'
import SuggestedProduct from '../components/ProductDetails/SuggestedProduct'
import axios from 'axios';
import AppURL from '../api/AppURL'
import SliderLoading from '../components/PlaceHolder/SliderLoading'

export class ProductDetailsPage extends Component {

  constructor({ match }) {
    super();
    this.state = {
      code: match.params.code,
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {
    window.scroll(0, 0);
    axios.get(AppURL.ProductDetail(this.state.code)).then(response => {
      console.log(response.data);
      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: ""
      });
    }).catch(error => {
    });
  }

  render() {

    if (this.state.mainDiv == "d-none") {

      return (
        <>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>

          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <SliderLoading isLoading={this.state.isLoading} />


          <div className="Desktop">
            <FooterDesktop />
          </div>

          <div className="Mobile">
            <FooterMobile />
          </div>

        </>
      )


    } else {


      return (
        <>
          <div className="Desktop">
            <NavMenuDesktop />
          </div>

          <div className="Mobile">
            <NavMenuMobile />
          </div>

          <ProductDetails data={this.state.ProductData} />


          <div className="Desktop">
            <FooterDesktop />
          </div>

          <div className="Mobile">
            <FooterMobile />
          </div>

        </>
      )


    }
  }
}

export default ProductDetailsPage
