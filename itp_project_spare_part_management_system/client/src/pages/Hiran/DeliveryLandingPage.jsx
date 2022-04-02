import React from "react";
import "./delstyle.css";
import logo from "../../assets/logo.png";
import img from "../../assets/123.png";
import img1 from "../../assets/1122.png";
import img2 from "../../assets/1234.png";
import img3 from "../../assets/2211.png";
import { Button, Grid } from "@material-ui/core";



function DeliveryLandingPage() {
     


    return (   
    <div>
       <div className = "del-container-left">      
        <Grid container>
        <div className="del-constrain-landing1">
           <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img} alt="" className='del-image01' />
                </Grid>
              
                 <Grid item>
                      <Button variant="outlined" color="primary" className="landingbtn" href="/DelVehicleInfo">
                          Add Vehicle
                      </Button>
                 </Grid>
              
               </Grid>
               </div>

              <div className="del-constrain-landing1">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img2} alt="" className='del-image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary" href="/Delivery">
                          Add Delivery    
                      </Button>
               </Grid>

             </Grid>
             </div>

             <div className="del-constrain-landing1">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img1} alt="" className='del-image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/DeliveryTable">
                          Managege Delivery 
                      </Button>
               </Grid>

             </Grid>
             </div>


             <div className="del-constrain-landing1">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img3} alt="" className='del-image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/Supplier">
                          View report 
                      </Button>
               </Grid>

             </Grid>
             </div>      
             </Grid>
          </div>
          </div>

    )
}

export default DeliveryLandingPage
