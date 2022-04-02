import React from "react";
import "./salestyle.css";
import logo from "../../assets/logo.png";
import billphoto from "../../assets/bill.png"
import billphoto2 from "../../assets/managebill.png"
import billphoto3 from "../../assets/reportimage.png"
import { Button, Grid } from "@material-ui/core";


function SalesLanding() {
     


    return (
      
         <div className="salemain">

       
        <Grid container>
        <div className="imagespace">
           <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={billphoto} alt="" className='image01' />
                </Grid>
              
                 <Grid item>
                      <Button variant="outlined" color="primary" href="/Bill">
                          Genarate Bill
                      </Button>
                 </Grid>

               </Grid>
        </div>
        <div className="imagespace">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={billphoto2} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary" href="/ManageBill">
                          Manage Bill
                      </Button>
               </Grid>

             </Grid>
          </div>
          <div className="imagespace">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={billphoto3} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/SalesViewReport">
                          View Report
                      </Button>
               </Grid>

             </Grid>
            </div>
             </Grid>
          </div>
     

    )
}

export default SalesLanding
