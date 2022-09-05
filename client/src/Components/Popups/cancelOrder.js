import React from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './cancelOrder.css';
import './summaryStyles.css'
import ProgressBar from 'react-bootstrap/ProgressBar';


const CancelOrder = (props) => {

  


  const userMainData = props.mainData

  console.log(props.orderdata.orderId)
  // console.log(userMainData)
  // console.log(props.orderdata)

    // console.log(props.maincanceldata.orderId)

    const ProductDetailsArr =  props.orderdata.orderDetails

  //  console.log(ProductDetailsArr)
    if (ProductDetailsArr === undefined) {
      ProductDetailsArr = [
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



    const handleOrderPost = () => {
  
        const authorization = localStorage.getItem("authorization")
    fetch(`https://laundry-backend-nodejs.herokuapp.com/order/cancel/${props.orderdata.orderId}`, {
      method: "DELETE",
      headers: {
        authorization: authorization,
        "Content-Type": "application/json"
      }
    }).then((data) => { data.json() }).then((res) => {
      console.log(res)
    }).catch((err) => {
      console.log(err)
    })
    // window.location.reload(false); 
    }

    const handleNavigateToOrderPage = () => {
      const myOrderReload = setTimeout(myReloadFun, 2000)
      function myReloadFun() {
        window.location.reload(false); 
        console.log("entered in timeout")
      }
        console.log("entered in Navigate")
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
                            <span>{props.orderdata.storeLocation}</span>
                          </div>
                          <div className="modal-summary-internal-div">
                          <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Address</span>
                            <span>{props.orderdata.storeAddress}</span>
                          </div>
                          <div className="modal-summary-internal-div">
                          <span style={{fontSize:"16px", fontWeight:"bold"}}>Store Phone</span>
                            <span>{props.orderdata.storePhoneNumber}</span>
                          </div>
                      </div>
                      <div className="order-summary-status">
                      <ProgressBar style={{width: "400px", marginLeft: "40px", marginTop: "20px"}} animated now={35} />
                      <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "10px", display: "block", marginLeft: "40px"}}>{props.orderdata.orderTime}</span>
                      </div>
                      <div className="order-summary-details">
                        <span  style={{fontSize:"16px", fontWeight:"bold", marginTop: "30px" , marginLeft : "10px", display: "block"}}>
                          Order Details :  {props.orderdata.orderId}
                        </span>
                        <div>
                        <table className="order-view-table">
                            <tbody>
                            {
                     ProductDetailsArr.map((item)=>{
                        if(item.value.quantity>0){
                            return(
                            <>
                            <tr className="cancel-order-tr">
                          <th scope="row">{item.name}</th>
                          <td>{[
                            item.value.wash ? "Washing" : "",
                            item.value.iron ? "Ironing" : "",
                            item.value.towel ? "DryWash" : "",
                            item.value.bleach ? "Bleach" : "",
                          ]
                            .filter((x) => x.length > 0)
                            .join(",")}</td>
                          <td style={{textAlign: "right", paddingRight: "40px", fontWeight: "bold", color: "#5861AE", fontSize: "18px"}}>{item.value.washprice} {item.value.price}</td>
                      </tr>
                      </>
                            )
                          }
                        }
                     )}
                            </tbody>
                            
                        </table>
                        <div className="order-view-charges-div">
                        <div style={{fontWeight: 'bold', fontSize: '15px', marginRight: "180px", marginBottom: "10px"}} className="order-view-subTotal">Sub Total: {props.orderdata.subTotal}</div>
                        <div style={{fontWeight: 'bold', fontSize: '15px', marginRight: "180px"}} className="order-view-pickupCharges">Pickup Charges: 50</div>
                        <div  className="order-view-total"><span style={{marginRight : "35px"}}>Total: {props.orderdata.TotalAmount}</span></div>
                        </div>
                         </div>
                      </div>
                     <div className="order-summary-address-con">
                      <span style={{fontSize:"16px", fontWeight:"bold", marginLeft:"20px", marginTop:"10px", display: 'block'}}>Address</span>
                      <div className="Address-div">
                          <div>{props.orderdata.userAddress}</div>
                      </div>
                     </div>
                     <div className="order-summary-bottom-div" style={{}}>
                       <Button onClick={handleOrderPost} style={{backgroundColor: "#F41313", color: "#FFFF", fontSize:"16px", fontWeight:"semi-bold", width: "150px", height : "42px", border: "none", borderRadius:"4px", marginLeft: "auto", display: "block", marginRight: "40px"}} className="cancel-Order-btn"><div onClick={handleNavigateToOrderPage}>Cancel order</div></Button>
                     </div>
                    </div>
                </Modal.Body>
                </div>
                </div>
              </Modal>
        </>
    )
}

export default CancelOrder