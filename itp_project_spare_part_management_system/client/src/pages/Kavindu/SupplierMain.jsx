import React from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import img from "../../assets/Add1.png";
import img1 from "../../assets/manage.png";
import img2 from "../../assets/order.png";
import img3 from "../../assets/view report.png";
import { Button, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';


function SupplierMain() {

    return (
                
    <div>
       <div >

       
        <Grid container>
          <div className = "landing-image-sup">
           <Grid justify="row" alignItems="center">
                <Grid item>
                      <img src={img} alt="" className='image01-sup' />
                </Grid>
              
                 <Grid item>
                 <div className = "btn-image-sup">
                      <Button variant="outlined" color="primary" href="/Supplier">
                          Add Supplier
                      </Button>
                      </div>
                 </Grid>

               </Grid>
               </div>

          <div className = "landing-image-sup">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img1} alt="" className='image01-sup' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary" href="/SupTable">
                          Manage Supplier
                      </Button>
               </Grid>

             </Grid>
              </div>

           <div className = "landing-image-sup">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img2} alt="" className='image01-sup' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/Managerorder">
                          Manage Orders
                      </Button>
               </Grid>

             </Grid>
             </div>

             <div className = "landing-image-sup">
        
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img3} alt="" className='image01-sup' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary">
                          <Link to="/SupplierReport">View Report</Link>
                      </Button>
               </Grid>
             </Grid>
           
          </div>
               </Grid>
        </div>
       </div>
  
    )
}

export default SupplierMain
