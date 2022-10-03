import axios from 'axios';
import React, { Component } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import AppURL from '../../../api/AppURL';

export class Purchase extends Component {

  constructor()
  {
    super();
    this.state={
      parchase_guide:""
    }
  }

  componentDidMount(){
    axios.get(AppURL.AllSiteInfo).then(response => {
      let StatusCode = response.status;
      if(StatusCode == 200){
        let JsonData = (response.data)[0]['parchase_guide'];
        this.setState({parchase_guide:JsonData});
      }
    }).catch(error => {

    }); 
  }

  render() {
    return (
      <>
       <Container>
            <Row className="p-2">
                <Col className="shadow-sm bg-white mt-2" lg={12} md={12} sm={12} xs={12}>

                <Form className='onboardForm'>
                  <h1 className='text-center'>Purchase Related Declaration</h1>
                    <h2 className='section-title'>Refund Policy</h2>
                    {this.state.parchase_guide}

                </Form>


                </Col>
            </Row>

            
        </Container>  
      </>
    )
  }
}

export default Purchase
