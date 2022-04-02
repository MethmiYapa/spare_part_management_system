import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import { Button, Container, Grid } from "@material-ui/core";
import { FaAllergies, FaSearch } from "react-icons/fa";


function SupViewReport() {

    return (

        <div>
        <div className="supMain">
             <img src={logo} alt="" className='logos-sup' />
                        <div class="search_box-sup">
                           <input type="search" placeholder="Search Supplier Id" className="inputReportSearch-sup" />
                            
                        </div>
                <div className="buttonPosition-sup">
                   <button type="button" className="ReportButton-sup">
                        <span className="button-text-sup">View Supplier Details</span>
                        <span className="button-icon-sup">
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton-sup"
                        onClick=""
                   >
                   <span className="button-text-sup">View Order Details</span>
                   <span className="button-icon-sup">
                       <ion-icon name="arrow-forward"></ion-icon>
                   </span>
              </button>
                </div>            
         </div>
         </div>
                    
               
        
                         
                    
                    
            
             
         
    )
}
export default SupViewReport