import React from "react";
import "./paystyle.css";

function Paymentviewreport(){
     
    return (

           <div className="payReport">
             
             <div className="search_box-pay">
                  <input type="search" placeholder="Search By Bill ID" className="inputReportSearch-pay" />         
            </div>

           <div className="payment-buttonPosition">
                   <button type="button" className="ReportButton">
                        <span className="button-text">View Bill Payment</span>
                        <span className="button-icon" >
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton">
                        <span className="button-text">View Salary Payement</span>
                        <span className="button-icon">
                             <ion-icon name="arrow-forward"></ion-icon>
                         </span>
                   </button>

              
                   <button type="button" className="ReportButton">
                        <span className="button-text">View Report</span>
                        <span className="pay-button-icon">
                           <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                  </button>

       
            </div>            
         </div>
                    
               
         )
}
export default Paymentviewreport;