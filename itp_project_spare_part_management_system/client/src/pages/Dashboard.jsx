import React from "react";
import "./Dashboard.css"
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { Button, Grid } from "@material-ui/core";
import DashboardImage from "../assets/DashboardImage.png";

function Dashboard() {
  return(

<div>   

  {/* Company name and image */}
   
   <Grid container spacing={4}>
      <Grid item md={6}>
      
         <Card elevation={5}  height={140}>
               <CardHeader
                  title="CarGarage"
                  subheader="Best Spare part Company in Sri Lanaka"
                />
                   <img src={DashboardImage} alt="" className='dashimage'/>
        </Card>
     </Grid>     
  

    {/* Chart */}
      <Grid item md={6}>
      
            <Card elevation={5}  height={140}>
                 <CardHeader
                     title="Daily Income Chart"                
                 />
                
            </Card>
        </Grid> 
  </Grid>


  {/* OneMonth total Income , payment ,salary  */}
  <Grid container spacing={4}>
    <Grid item xs={12} md={3}>
      
            <Card elevation={5}>
                <CardHeader 
                   title="Total Selling"
                   subheader="One Month "
                   />
            </Card>
      </Grid>     
   
     {/* ThreeMonth total Income , payment ,salary */}
      
       <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Income"
                     subheader="Three Month  "
                      />
            </Card>
       </Grid> 
     
      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader
                 title="Total Payment"
                 subheader="Three Month  "
                 />
            </Card>
      </Grid> 

      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Salary Payment"
                     subheader="Three Month  "
                />
            </Card>
      </Grid> 
   </Grid>


   <Grid container spacing={4}>
    <Grid item xs={12} md={3}>
      
            <Card elevation={5}>
                <CardHeader 
                   title="Total Selling"
                   subheader="Three Month  "
                   />
            </Card>
      </Grid>     
   
      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Income"
                     subheader="Three Month"
                      />
            </Card>
      </Grid> 
     
      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader
                 title="Total Payment"
                 subheader="Three Month"
                 />
            </Card>
      </Grid> 

      <Grid item xs={12} md={3}>
            <Card elevation={5}>
                <CardHeader 
                     title="Total Salary Payment"
                     subheader="Three Month"
                />
            </Card>
      </Grid> 
   </Grid>


   
</div>
  );
}

export default Dashboard;
