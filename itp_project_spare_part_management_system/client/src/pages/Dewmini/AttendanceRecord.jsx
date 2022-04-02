import React, { useEffect, useState } from 'react';
import "./empstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';

function AttendanceRecord() {
 
   const [attendance, setattendance] = useState([])

    const getattendance=()=>{
              axios.get("http://localhost:8000/attendance/get-attendance")
               .then((res)=>{
                 console.log(res.data.data);
                 setattendance(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getattendance();
     })

     const onDeleteHandlle = (id) => {
     axios.delete("http://localhost:8000/attendance/delete-attendance/"+ id)
         .then((res) => {
         console.log(res.data.data);
       })
     .catch((error) => {
           console.log(error.message);
        });

    };

    return (
             <div>
                 <img src={logo} alt="" className='logos-emp' />  
              
             <div class="tablealign-emp">
                  <table class="table-emp">

                    <tr>
                       <th>Current Date</th>
                       <th>Current Time</th>
                       <th>Employee ID</th>
                       
                       
                                        
                    </tr>
  {attendance.map((view)=>(
                 <tr>
                    <td>{view.crntdate}</td>
                    <td>{view.crntTime}</td>
                    <td>{view.empid}</td>
                    
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                   <IconButton aria-label="delete" >        
                                     <CreateIcon color={'primary'}/> 
                                   </IconButton> 
                               </Grid>  
                           </Grid>    
                              </td>
                           </tr>
                ))}
               
             

             </table>
          </div> 
        </div>
    )
}

export default AttendanceRecord
