import React, { Component } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProduct from './SuggestedProduct';
import ReviewList from './ReviewList';

export class ProductDetails extends Component {

     constructor() {
          super();
          this.state = {
               previewImg: "0",
               isSize: null,
               isColor: null,
               color: "",
               size: "",
               quantity: "",
               productCode: null,
               addToCart: "Add To Cart",
               PageRefreshStatus: false,
               addToFav: "Favourite",
               OrderNow: "Order Now",
               PageRedirectStauts: false
          }
     }

     imgOnClick = (event) => {
          let imgSrc = event.target.getAttribute('src');
          // let previewImg = document.getElementById("previewImg");
          // ReactDOM.findDOMNode(previewImg).setAttribute('src', imgSrc);
           this.setState({previewImg:imgSrc})
     }

     PriceOption(price, special_price) {
          if (special_price == null) {
               return (
                    <p className="product-price-on-card"> Price : {price}$ </p>
               )
          } else {

               return (
                    <p className="product-price-on-card">
                         Price : <strike className="text-secondary">{price}$ </strike> {special_price}$
                    </p>
               )

          }
     }

     render() {

          let MyList = this.props.data;

          let title = MyList['productList'][0]['title'];
          const price = MyList['productList'][0]['price'];
          const special_price = MyList['productList'][0]['special_price'];
          let brand = MyList['productList'][0]['brand'];
          let category = MyList['productList'][0]['category'];
          let subcategory = MyList['productList'][0]['subcategory'];
          let image = MyList['productList'][0]['image'];
          let product_code = MyList['productList'][0]['product_code'];
          let remark = MyList['productList'][0]['remark'];
          let star = MyList['productList'][0]['star'];

          if(this.state.previewImg === "0"){
               this.setState({previewImg:image})
          }

          let color = MyList['productDetails'][0]['color'];
          let size = MyList['productDetails'][0]['size'];
          let product_id = MyList['productDetails'][0]['product_id'];
          const short_description = MyList['productDetails'][0]['short_description'];
          const long_description = MyList['productDetails'][0]['long_description'];
          const Product1 = MyList['productDetails'][0]['image_one'];
          const Product2 = MyList['productDetails'][0]['image_two'];
          const Product3 = MyList['productDetails'][0]['image_three'];
          const Product4 = MyList['productDetails'][0]['image_four'];

          var colorDiv = "d-none";
          if (color != null) {
               let ColorArray = color.split(',');
               var ColorOption = ColorArray.map((ColorList, i) => {
                    return <option value={ColorList}> {ColorList} </option>
               })
               colorDiv = ""
          }
          else {
               colorDiv = "d-none"
          }

          var SizeDiv = "d-none";
          if (size != "na") {
               let SizeArray = size.split(',');
               var SizeOption = SizeArray.map((SizeList, i) => {
                    return <option value={SizeList}> {SizeList} </option>
               })
               SizeDiv = ""
          }
          else {
               SizeDiv = "d-none"
          }


          return (
               <>
          <Container className="BetweenTwoSection">
               <Row className="p-2">
                    <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                         <Row>
                              <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                   
                    <InnerImageZoom zoomScale={1.8} zoomType={"hover"} src={this.state.previewImg} zoomSrc={this.state.previewImg} />
                    <Container className="my-3">
                         <Row>
                              <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                   <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={Product1} />
                              </Col>
                              <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                   <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={Product2} />
                              </Col>
                              <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                   <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={Product3} />
                              </Col>
                              <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                   <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={Product4} />
                              </Col>
                         </Row>
                    </Container>
                              </Col>
                    <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                         <h5 className="Product-Name">{title}</h5>
                         <h6 className="section-sub-title">{short_description}</h6>
                         <div className="input-group">
                              {this.PriceOption(price,special_price)}
                         </div>

                         <h6 className="mt-2">Category : <b>{category}</b>  </h6>

                         <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                         <h6 className="mt-2">Brand : <b>{brand}</b></h6>

                         <h6 className="mt-2">Product Code : <b>{product_code}</b></h6>


                         <div className={colorDiv}>
                              <h6 className="mt-2">Choose Color</h6>
                              <select className="form-control form-select">
                                   <option>Choose Color</option>
                                   {ColorOption}
                              </select>
                         </div>

                         <div className={SizeDiv}>
                              <h6 className="mt-2"> Choose Size  </h6>
                              <select onChange={this.sizeOnChange} className="form-control form-select">
                                   <option>Choose Size</option>
                                   {SizeOption}
                              </select>
                         </div>


                         <h6 className="mt-2">Quantity</h6>
                         <input className="form-control text-center w-50" type="number" />

                         <div className="input-group mt-3">
                              <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                              <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                              <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                         </div>
                    </Col>
                         </Row>

                         <Row>
                              <Col className="" md={6} lg={6} sm={12} xs={12}>
                                   <h6 className="mt-2">DETAILS</h6>
                                   <p>{long_description}</p>
                              </Col>

                              <Col className="" md={6} lg={6} sm={12} xs={12}>
                                   <ReviewList code={product_id} />
                              </Col>
                              
                         </Row>

                    </Col>
               </Row>
          </Container>

          <SuggestedProduct subcategory={subcategory} />
               </>
          )
     }
}

export default ProductDetails
