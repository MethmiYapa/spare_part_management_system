import React from "react";
import "./empstyle.css";
import logo from "../../assets/logo.png";
import { Button, Container, Grid } from "@material-ui/core";
import { FaAllergies, FaSearch } from "react-icons/fa";


function EmpViewReport() {
     


    return (

        <div>
        <div className="empReport">
             <img src={logo} alt="" className='logos-sup' />
                        <div class="search_box-emp">
                           <input type="search" placeholder="Search Employee Id" className="inputReportSearch-emp" />
                            
                        </div>
                <div className="buttonPosition-emp">
                   <button type="button" className="ReportButton-emp">
                        <span className="button-text-emp">View Employee Details</span>
                        <span className="button-icon-emp">
                            <ion-icon name="arrow-forward"></ion-icon>
                        </span>
                   </button>

                   <button type="button" className="ReportButton-emp">
                   <span className="button-text-emp">View Leaving Details</span>
                   <span className="button-icon-emp">
                       <ion-icon name="arrow-forward"></ion-icon>
                   </span>
              </button>
                </div>            
         </div>
         </div>
                    
               
        
                         
                    
                    
            
             
         
    )
}
export default EmpViewReport