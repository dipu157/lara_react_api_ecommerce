import React, { Component } from 'react'
import HomeSlider from './HomeSlider'
import { Col, Container, Row } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios';

export class HomeTopMobile extends Component {

  constructor() {
    super();
    this.state = {
      SliderData:[]
    }
  }

  componentDidMount() {
    axios.get(AppURL.AllSlider).then(response => {
      this.setState({SliderData:response.data});
    }).catch(error => {
    });
  }


  render() {
    return (
        <div>
        <Container className='p-0 m-0 overflow-hidden' fluid={true}>
            <Row className='p-0 m-0 overflow-hidden'>
                <Col lg={12} md={12} sm={12}>
                <HomeSlider data={this.state.SliderData} />
                </Col>
            </Row>
        </Container>
      </div>
    )
  }
}

export default HomeTopMobile