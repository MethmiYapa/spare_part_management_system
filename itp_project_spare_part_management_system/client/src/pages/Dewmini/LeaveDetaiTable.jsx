import React, { useEffect, useState } from 'react';
import "./empstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';

function LeaveDetailTable() {
 
   const [leave, setleave] = useState([])

    const getleave=()=>{
              axios.get("http://localhost:8000/leave/get-leave")
               .then((res)=>{
                 console.log(res.data.data);
                 setleave(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getleave();
     })

     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/leave/delete-leave/"+ id)
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
                       <th>Employee ID</th>
                       <th>Request ID</th>
                       <th>Employee Name</th>
                       <th>Start Date</th>
                       <th>End Date</th>
                       <th>No of Days</th>
                       <th>Remaining Leaves</th>
                       <th>Description</th>
                       
                       
                                        
                    </tr>
  {leave.map((view)=>(
                 <tr>
                    <td>{view.empid}</td>
                    <td>{view.reqid}</td>
                    <td>{view.empname}</td>
                    <td>{view.sdate}</td>
                    <td>{view.enddate}</td>
                    <td>{view.nodays}</td>
                    <td>{view.remleave}</td>
                    <td>{view.description}</td>
                    
                   
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

export default LeaveDetailTable
