import React from 'react'
import Navbar from '../navbar/navbar'
import Sidebar from '../sidebar/sidebar'
import SmallFooter from '../Footer/smallFooter'
import ProductsContainer from './productsContainer'
const Products = (props) => {
  return (
 <>
      <Navbar mainData={props.mainData}/>
    <div className="main-center-container">
       <Sidebar/>
       <ProductsContainer mainData={props.mainData}/>
    </div>
    <SmallFooter/>
 </>
  )
}

export default Products
