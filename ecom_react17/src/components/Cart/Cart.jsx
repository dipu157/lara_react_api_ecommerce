import React, { Component } from 'react'
import {Button, Col, Container, Navbar, Row } from 'react-bootstrap';

export class Cart extends Component {
    render() {
        return (
            <>
            <Container fluid={true}>

<div className="section-title text-center mb-55"><h2>Product Cart List</h2>
</div>
    <Row>
        <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
            
        </Col>

        <Col className="p-1" lg={5} md={5} sm={12} xs={12} >
            <div className="card p-2">
                <div className="card-body">
                    <div className="container-fluid ">
                        <div className="row">
                            <div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
                                <h5 className="Product-Name text-danger">Total Due: 245 $</h5>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Choose City</label>
                                <select  className="form-control">
                                    <option value="">Choose</option>
                                    <option value="Dhaka">Assam</option>
                                    <option value="Dhaka">Bihar </option>
                                    <option value="Dhaka">Goa </option>
                                    <option value="Dhaka">Gujarat </option>
                                    <option value="Dhaka">Himachal Pradesh </option>
                                    <option value="Dhaka">Punjab  </option>
                                </select>
                            </div>
                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Choose Payment Method</label>
                                <select  className="form-control">
                                    <option value="">Choose</option>
                                    <option value="Cash On Delivery">Cash On Delivery</option>
                                    <option value="Cash On Delivery">Stripe</option>
                                </select>
                            </div>
                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Your Name</label>
                                <input  className="form-control" type="text" placeholder="" />
                            </div>

                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <label className="form-label">Delivery Address</label>
                                <textarea  rows={2} className="form-control" type="text" placeholder="" />
                            </div>
                            <div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
                                <button  className="btn  site-btn">  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Col>

    </Row>

</Container>

            </>
        )
    }
}

export default Cart