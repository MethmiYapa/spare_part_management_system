import React from "react";
import "./paystyle.css";
import logo from "../../assets/logo.png";
import bill from "../../assets/bill.png";
import managebill from "../../assets/managebill.png";
import viewreport1 from "../../assets/viewreport1.png";
import cal from "../../assets/cal.png";

import { Button, Grid } from "@material-ui/core";



function Paymentlandingpage() {
     
 

  return (  
    <div>
   
    <Grid container>
        <div class="insert-img-payment"></div>
       <Grid justify="row" alignItems="center" >
            <Grid item>
            
                  <img src={bill} alt="" className='image01' />
                  
            </Grid>
       
             <Grid item>
             <div class="insert-btn-payment"></div> 
             <Button variant="outlined" color="secondary" href="/Payment" >
             Insert Bill Payment
              </Button>
             </Grid>

           </Grid>
           
          <div class="manage-img-payment"></div>
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={managebill} alt="" className='image01' />
            </Grid>
        
            <Grid item>
            <div class="manage-btn-payment"></div> 
            <Button variant="outlined" color="primary" href="/Paymenttable">
            Manage Bill Payment
              </Button>
           </Grid>

         </Grid>
         <div class="calculate-img-payment"></div> 
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={cal} alt="" className='image01' />
            </Grid>
        
            <Grid item>
            <div class="calculate-btn-payment"></div> 
            <Button variant="outlined" color="secondary" href="/Calculate">
            Calculate Salary
              </Button>
           </Grid>

         </Grid>
         < div className ="container-right-payment">
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={viewreport1} alt="" className='image01' />
            </Grid>
        
            <Grid item>
            <div class="view-btn-payment"></div> 
            <Button variant="outlined" color="primary" href="/InsertpaymentReport">
                Bill Payment Report
              </Button>
           </Grid>


           < div className ="container-right-payment-salary">
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={viewreport1} alt="" className='image01' />
            </Grid>
        
            <Grid item>
            <div class="view-btn-payment"></div> 
            <Button variant="outlined" color="primary" href="/CalculateTable">
                Salary Report
              </Button>
           </Grid>
           
            </Grid>
      
      </div>
      </Grid>
      </div>
      </Grid>
      </div>
)
}

    
  
 

export default Paymentlandingpage;