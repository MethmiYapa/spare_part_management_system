import React from "react";
import "./custstyle.css";
import logo from "../../assets/logo.png"
import img from "../../assets/addcus.png"
import img1 from "../../assets/managecus.png"
import img2 from "../../assets/cusreport.png"
import { Button, Grid } from "@material-ui/core";

function Landingpage() {
  
  return (
    <div >     
      <div>  

    <Grid container>
    <div className = "landing-image-cus">
       <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={img} alt="" className='image01-cus' />
            </Grid>
          
             <Grid item>
             <div className = "landing-btn-cus">
             <Button variant="outlined" color="secondary" href="/Customer" >
                Add Customer
              </Button>
              </div>
             </Grid>

       </Grid>
    </div>
    <div className = "landing-image-cus">
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={img1} alt="" className='image01-cus' />
            </Grid>
        
            <Grid item>
            <div className = "landing-btn-cus">
            <Button variant="outlined" color="primary" href="/CustomerTable">
                Manage Customer
              </Button>
            </div>
           </Grid>

         </Grid>
    </div>

    <div className = "landing-image-cus">
         <Grid justify="row" alignItems="center" >
            <Grid item>
                  <img src={img2} alt="" className='image01-cus' />
            </Grid>
        
            <Grid item>
            <div className = "landing-btn-cus">
 Updated upstream
            <Button variant="outlined" color="secondary" href="/CustomerReport">
</Button>
            <Button variant="outlined" color="secondary" href="/viewreport">
                 View Report
              </Button>
            </div>
         </Grid>
         </Grid>
    </div>
         </Grid>
      </div>
      </div>

)
}

export default Landingpage;