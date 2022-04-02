import React from "react";
import "./Invstyle.css";
import logo from "../../assets/logo.png";
import addimage from "../../assets/inv_add_image.png";
import manageimage from "../../assets/inv_manage_image.png";
import reportimage from "../../assets/inv_report_image.png"
import { Button, Grid } from "@material-ui/core";


function InventoryMain() {
     


    return (
        <div className="Invmain">
             <img src={logo} alt="" className='logos-inv' />
           
           <div>
       
     <Grid container>

        <div className='landing_img_inv'>
           <Grid justify="row" alignItems="center" >
                 <Grid item>
                      <img src={addimage} alt="" className='image01-inv' />
                 </Grid>
              
                 <Grid item>
                      <Button alignItems="center" variant="outlined" color="primary" href="/Inventory">
                          Add Item
                      </Button>
                 </Grid>
               </Grid>
              </div>
          
          <div className='landing_img_inv'>
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={manageimage} alt="" className='image01-inv' />
                </Grid>
            
                <Grid item>
                      <Button alignItems="center" variant="outlined" color="secondary" href="/InventoryTable">
                          Manage Item
                      </Button>
               </Grid>
             </Grid>    
           </div>
             
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={reportimage} alt="" className='image01-inv' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/Inventoryreport">
                          View Report
                      </Button>
               </Grid>
             </Grid>
   
          </Grid>
        </div>
      </div>
    )
}

export default InventoryMain;
