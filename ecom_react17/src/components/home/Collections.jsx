import React, { Component } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios';
import { Link } from 'react-router-dom'
import CollectionLoading from '../PlaceHolder/CollectionLoading';

export class Collections extends Component {

  constructor() {
    super();
    this.state = {
      ProductData: [],
      isLoading: "",
      mainDiv: "d-none"
    }
  }

  componentDidMount() {

    axios.get(AppURL.ProductListByRemark("Collection")).then(response => {
      this.setState({
        ProductData: response.data, isLoading: "d-none",
        mainDiv: " "
      });
    }
    ).catch(error => {
    });
  }


  render() {

    const CollectionList = this.state.ProductData;
    const MyView = CollectionList.map((FPList, i) => {
      return <Col className='p-1' key={1} xl={3} lg={3} md={3} sm={6} xs={6}>
        <Link className="text-link" to={"/productdetails/" + FPList.id} >
        <Card className="image-box card w-100">
          <img className='center w-75' src={FPList.image} />
          <Card.Body>
            <p className='product-name-on-card' >{FPList.title}</p>
            <p className='product-price-on-card' >Price: {FPList.price} BDT</p>
          </Card.Body>
        </Card>
        </Link>
      </Col>
    });


    return (
      <div>
        <CollectionLoading isLoading={this.state.isLoading} />
        <div className={this.state.mainDiv}>
          <Container className="text-center">
            <div className='section-title text-center mb-55'>
              <h2>Collections</h2>
              <p>Some of our Exclusive Collection</p>
            </div>
            <Row>
              {MyView}

            </Row>
          </Container>
        </div>
      </div>
    )
  }
}

export default Collections
