import React, { Component } from 'react'
import Categories from '../components/home/Categories'
import Collections from '../components/home/Collections'
import FeaturedProduct from '../components/home/FeaturedProduct'
import NewArrival from '../components/home/NewArrival'

class HomePage extends Component {
  render() {
    return (
      <>
       <FeaturedProduct />
       <NewArrival />
       <Categories />
       <Collections />
      </>
    )
  }
}

export default HomePage