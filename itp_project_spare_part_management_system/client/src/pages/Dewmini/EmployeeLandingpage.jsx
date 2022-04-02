import React from "react";
import "./empstyle.css";
import logo from "../../assets/logo.png";
import img from "../../assets/addemp.png";
import img1 from "../../assets/manageEmployee.png";
import img2 from "../../assets/leavemanagement.png";
import img3 from "../../assets/attendance.png";
import img4 from "../../assets/viewreport1.png";
import { Button, Grid } from "@material-ui/core";

function EmployeeLandingpage() {
     

 return (
                  
  <div>     
   <Grid container>
        <div className="emp-landing-image ">
           <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img} alt="" className='image01' />
                </Grid>
              
                <Grid item>
                      <Button variant="outlined" color="primary" className="landingbtn" href="/Employee">
                          Add Employee
                      </Button>
                 </Grid>
              
            </Grid>
        </div>

         <div className="emp-landing-image ">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img1} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary" href="/EmpDetailTable">
                          Manage Employee    
                      </Button>
               </Grid>
             </Grid>
        </div>

      <div className="emp-landing-image ">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img2} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/LeaveManagement">
                          Leave Management
                      </Button>
               </Grid>
             </Grid>
        </div>

        <div className="emp-landing-image ">              
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img3} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="secondary" href="/Attendance">
                            Attendance
                      </Button>
               </Grid>
             </Grid>
        </div>
      
       <div className = "emp-landing-image">
             <Grid justify="row" alignItems="center" >
                <Grid item>
                      <img src={img4} alt="" className='image01' />
                </Grid>
            
                <Grid item>
                      <Button variant="outlined" color="primary" href="/EmpViewReport">
                              View Report
                      </Button>
               </Grid>
             </Grid>
        </div>
         
             </Grid>
          </div>
     
    )
            
         
}

export default  EmployeeLandingpage