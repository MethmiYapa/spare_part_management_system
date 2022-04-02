import React from "react";
import "./salestyle.css";
import logo from "../../assets/logo.png";
import { Button, Container, Grid } from "@material-ui/core";
import { FaSearch } from "react-icons/fa";


function SalesViewReport() {
     


    return (

   
        <div className="saleReprot" >
       
                        <div class="search_box">
                           <input type="search" placeholder="Search By Bill ID" className="inputReportSearch" />
                            
                        </div>
                <div className="buttonPosition">
                   <button type="button" className="ReportButton">
                        <span className="button-text">View Bill Details</span>
                        <span className="button-icon">
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton">
                   <span className="button-text">View Monthly Sales</span>
                   <span className="button-icon">
                       <ion-icon name="arrow-forward"></ion-icon>
                   </span>
              </button>
                </div>            
         </div>

                    
               
        
                         
                    
                    
            
             
         
    )
}
export default SalesViewReport