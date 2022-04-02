import React from "react";
import "./custstyle.css";
import logo from "../../assets/logo.png";
import { Button, Container, Grid } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";


function Viewreport() {
     
    return (

        <div>
        <div className="custReport">
             <img src={logo} alt="" className='logos-cus' />
                        <div class="search_box-cus">
                           <input type="search" placeholder="Search Customer Id" className="inputReportSearch-cus" />
                            
                        </div>
                <div className="buttonPosition-cus">
                   <button type="button" className="ReportButton-cus">
                        <span className="button-text-cus">View Customer Details</span>
                        <span className="button-icon-cus">
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton-cus">
                   <span className="button-text-cus">View Sales Details</span>
                   <span className="button-icon-cus">
                       <ion-icon name="arrow-forward"></ion-icon>
                   </span>
              </button>
                </div>            
         </div>
         </div>       
         
    )
}
export default Viewreport