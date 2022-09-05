import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './summaryStyles.css'
import ProgressBar from 'react-bootstrap/ProgressBar';

const Summary = (props) => {


  const [orderStatus, SetOrderStatus] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => SetOrderStatus(orderStatus => {
      const newValue = orderStatus + 1;
      if (newValue === 100) {
        clearInterval(interval)
      }
      return newValue
    }), 8000);
  }, []);


  


  


  // console.log(props.orderData.orderDetails)

   let orderData = props.orderData
   let UserProductDetails = props.orderData.orderDetails

  //  console.log(props.orderData.orderDetails)

  if (UserProductDetails === undefined) {
    UserProductDetails = [
      {
          "name": "Shirts",
          "value": {
              "quantity": "5",
              "wash": true,
              "iron": false,
              "towel": false,
              "bleach": true,
              "price": 150
          }
      },
      {
          "name": "T Shirts",
          "value": {
              "quantity": null,
              "wash": false,
              "iron": false,
              "towel": false,
              "bleach": false,
              "price": 0
          }
      },
      {
          "name": "Trousers",
          "value": {
              "quantity": null,
              "wash": false,
              "iron": false,
              "towel": false,
              "bleach": false,
              "price": 0
          }
      },
      {
          "name": "Jeans",
          "value": {
              "quantity": null,
              "wash": false,
              "iron": false,
              "towel": false,
              "bleach": false,
              "price": 0
          }
      },
      {
          "name": "Boxers",
          "value": {
              "quantity": "5",
              "wash": true,
              "iron": false,
              "towel": false,
              "bleach": true,
              "price": 150
          }
      },
      {
          "name": "Joggers",
          "value": {
              "quantity": null,
              "wash": false,
              "iron": false,
              "towel": false,
              "bleach": false,
              "price": 0
          }
      },
      {
          "name": "Other",
          "value": {
              "quantity": "5",
              "wash": false,
              "iron": true,
              "towel": true,
              "bleach": false,
              "price": 125
          }
      }
  ]
  }
 



  return (

    <>
    <Modal
      {...props}
      // aria-labelledby="contained-modal-title-vcenter"
        aria-labelledby="example-custom-modal-styling-title"
        className="custom-modal"
    >
      <div className="modal-container">
      <Modal.Header  className="modal-title-summary" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
            <div className="modal-title-div">
            <span className="modal-summary-span span-text">Summary</span>
            <Button onClick={props.onHide}><span class="material-symbols-outlined summary-span-icon">close</span></Button>
            </div>
          
          
        </Modal.Title>
      </Modal.Header>
      <div className="summary-container">
      <Modal.Body>
          <div>
            <div className="modal-summary-location">
                <div className="modal-summary-internal-div">
                  <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Location</span>
                  <span>{orderData.storeLocation}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Address</span>
                  <span>{orderData.storeAddress}</span>
                </div>
                <div className="modal-summary-internal-div">
                <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Phone</span>
                  <span>{orderData.storePhoneNumber}</span>
                </div>
            </div>
            <div className="order-summary-status">
            <ProgressBar style={{width: "400px", marginLeft: "40px", marginTop: "20px"}} animated now={orderStatus} />
            <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "10px", display: "block", marginLeft: "40px"}}>{orderData.orderTime}</span>
            </div>
            <div className="order-summary-details">
              <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "30px" , marginLeft : "10px", display: "block"}}>
                Order Details :  {orderData.orderId}
              </span>
              <div>
              <table className="order-view-table">
                  <tbody>
                      {
                     UserProductDetails.map((item)=>{
                        if(item.value.quantity>0){
                            return(
                            <>
                            <tr className="order-tr">
                          <th scope="row">{item.name}</th>
                          <td>{[
                            item.value.wash ? "Washing" : "",
                            item.value.iron ? "Ironing" : "",
                            item.value.towel ? "DryWash" : "",
                            item.value.bleach ? "Bleach" : "",
                          ]
                            .filter((x) => x.length > 0)
                            .join(",")}</td>
                          <td style={{color: "#5861AE", fontWeight: "700", fontSize:"20px", textAlign: "right", paddingRight: '20px'}}>{item.value.washprice}{item.value.price}</td>
                      </tr>
                      </>
                            )
                          }
                        }
                     )}
                  </tbody>
                  
              </table>
              <div className="order-view-charges-div">
              <div style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '10px'}} className="order-view-subTotal">Sub Total: <span >{orderData.subTotal}</span></div>
              <div style={{fontWeight: 'bold', fontSize: '16px'}} className="order-view-pickupCharges">Pickup Charges: {orderData.pickupCharges}</div>
              <div  className="order-view-total"><span style={{marginRight : "30px"}}>Total: {orderData.TotalAmount}</span></div>
              </div>
               </div>
            </div>
           <div className="order-summary-address-con">
            <span style={{fontSize:"16px", fontWeight:"bold", marginLeft:"20px", marginTop:"10px", display: 'block'}}>Address</span>
            <div className="Address-div">
                <div>{orderData.userAddress}</div>
            </div>
           </div>
           <div className="order-summary-bottom-div">
             
           </div>
          </div>
      </Modal.Body>
      </div>
      </div>
    </Modal>
    </>
  )
}

export default Summary

