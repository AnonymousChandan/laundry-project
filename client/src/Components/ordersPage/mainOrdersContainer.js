import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./mainOrdersContainer.css";
import CancelPopup from '../Popups/cancelPopup';
import Summary from '../Popups/Summary';

const MainOrdersContainer = (props) => {

  // console.log(props)

 
  

  const navigate = useNavigate();

  const token = localStorage.getItem("authorization");

  const [orderHistory, setOrderHistory] = useState([]);

  const [filteredSearch, setFilteredSearch] = useState("");

  const [modalShow, setModalShow] = useState(false);

  const [summaryModal, setSummaryModal] = useState(false);

  const [viewOrderData, setViewOrderData] = useState([]);

  const [cancelOrderData, setCancelOrderData] = useState([]);



  if (token === null) {
    localStorage.setItem("authorization", "")
  } else if (token.length > 0) {
    
  }
  // console.log(token)


  useEffect(() => {
    fetch("http://localhost:3001/order", {
      headers: {
        authorization: token,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(...data.orders)
        setOrderHistory(data.orders);
      });
  }, [token]);


  const handleFilter = (e) => {
    setFilteredSearch(e.target.value)
  }

  const handleNavigate=()=>{
    navigate("/products")
  }

  const handleOrderView = (item) => {
    
    setViewOrderData(item)
    
  }

  const handleOrderCancel = (item) => {
    // console.log("entered in handle")
    setCancelOrderData(item)
  }


  // console.log(cancelOrderData)

  return (
    <>
      <div className="ordersContainer">
        <header className="ordersHeader">
          <div className="orders-count-div">
            <span>Orders | {orderHistory.length}</span>
          </div>
          {
            (orderHistory.length !== 0 && (
              <div className="order-create-btn">
                <button className="create-order-btn" onClick={handleNavigate}>Create</button>
              </div>
            )) 
          }
          <div className="orders-search-div">
              <div className="orders-search-main-div">
              <img
                className="search-icon"
                src="./Assets/search.svg"
                alt="search icon"
              ></img>
              <input onChange={handleFilter} type="text" className="ordersSearch"></input>
            </div>
            
          </div>
        </header>
        {orderHistory.length ? (
          <table className="table table-hover">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Order Id</th>
                <th scope="col">Order Date & Time</th>
                <th scope="col">Store Location</th>
                <th scope="col">City</th>
                <th scope="col">Store Phone</th>
                <th scope="col">Total Items</th>
                <th scope="col">Price</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
                <th scope="col">View</th>
              </tr>
            </thead>
            {orderHistory.filter((item)=>{
              if(filteredSearch==""){
                return item
              }else if(item.orderId.includes(filteredSearch)){
                return item
              }
            }).map((item, key) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row">{item.orderId}</th>
                    <td>{item.orderTime}</td>
                    <td>{item.storeLocation}</td>
                    <td>{item.storeAddress}</td>
                    <td>{item.storePhoneNumber}</td>
                    <td>{item.orderDetails.length}</td>
                    <td>{item.TotalAmount}</td>
                    <td>{item.status}</td>
                    <td>
                      <button onClick={() => setModalShow(true)} class="order-history-cancel"><div onClick={() => handleOrderCancel(item)}>Cancel Order</div></button>
                      <CancelPopup mainData={props.mainData} show={modalShow} cancelOrderData={cancelOrderData} onHide={() => setModalShow(false)} />
                    </td>
                    <td>
                      <button onClick={() => setSummaryModal(true)}  className="order-view-btn">
                        <svg onClick={() => handleOrderView(item)}xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                        </svg>
                      </button>
                      <Summary mainUserData={props.mainData} show={summaryModal} orderData={viewOrderData} onHide={() => setSummaryModal(false)} />
                      {/* <SummaryPopup  show={summaryModal} onHide={() => setSummaryModal(false)} /> */}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        ) : (
          <div className="noOrders-div">
            <span className="noOrder-span">No Orders available</span>
            <button onClick={handleNavigate} className="create-order-btn" >Create</button>
          </div>
        )}
      </div>
    </>
  );
};

export default MainOrdersContainer;
