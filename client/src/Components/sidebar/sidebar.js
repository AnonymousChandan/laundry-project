import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar-section">
        <div className="sidebar-icons-div">
        <div className="sidebar-icons">
          <img src="./Assets/home-run.svg" alt=""/>
         </div>
         <div className="sidebar-icons">
          <img src="./Assets/more.svg" alt=""/>
         </div>
         <div className="sidebar-icons sidebar-list">
          <img src="./Assets/list.svg" alt=""/>
         </div>
        </div>  
      </div>
    </>
  )
}

export default Sidebar