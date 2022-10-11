import React, { Component } from 'react'
import {Col, Container, Row, Card, Modal, Button } from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import cogoToast from 'cogo-toast';

export class Favourite extends Component {

  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none",
      PageRefreshStatus:false,
    }
  }

  componentDidMount() {
    window.scroll(0,0)
    axios.get(AppURL.FavouriteList(this.props.user.email)).then(response => {
      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: " "
      });
    }).catch(error => {
    });
  }

  removeItem = (event) => {
    let product_code = event.target.getAttribute("data-code");
    let email = this.props.user.email;

    //console.log(event.target.getAttribute('code'));

    alert(event.target.getAttribute("data-code"));

    axios.get(AppURL.FavouriteRemove(product_code,email)).then(response =>{               
        cogoToast.success("Product Item Remove",{position:'top-right'});   
        this.setState({PageRefreshStatus:true})       

    }).catch(error=>{
         cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
    });

} // end Remove Item Mehtod 


PageRefresh =() => {
    if(this.state.PageRefreshStatus===true){
         let URL = window.location;
         return (
              <Redirect to={URL} />
         )
    }
}

  render() {

    if(!localStorage.getItem('token')){
      return <Redirect to="/login" />
 }

    const FavouriteList = this.state.ProductData;
    const MyView = FavouriteList.map((FPList, i) => {
      return <Col className='p-1' xl={3} lg={3} md={3} sm={6} xs={6}>
      <Card className="image-box card w-100">
      <img className='center w-75' src={FPList.image} />
        <Card.Body>    
          <p className='product-name-on-card' >{FPList.product_name}</p>
          <Button onClick={this.removeItem} data-code={FPList.product_code} className='btn btn-sm'><i className='fa fa-trash-alt'>Remove</i></Button>
        </Card.Body>
      </Card>
      </Col>
    });

    return (
      <div>
        <Container className="text-center">
            <div className='section-title text-center mb-55'>
                <h2>My Favourite Items</h2>
                <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
                {MyView}
            </Row>
        </Container>
        {this.PageRefresh()}
      </div>
    )
  }
}

export default Favourite
