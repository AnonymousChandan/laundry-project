import React from 'react'
import Navbar from '../navbar/navbar'
import MainOrdersContainer from './mainOrdersContainer'
import Sidebar from '../sidebar/sidebar'
import SmallFooter from '../Footer/smallFooter'
import './orders.css'

const Orders = (props) => {

  const handleReload = () => {
    window.location.reload(false); 
    handleReload();
  }

  // window.location.reload(false); 
  
  return (
    <>
        <Navbar mainData={props.mainData}/>
    <div className="center-container">
       <Sidebar/>
       <MainOrdersContainer mainData={props.mainData}/>
    </div>
    <SmallFooter/>
    </>
  )
}

export default Orders