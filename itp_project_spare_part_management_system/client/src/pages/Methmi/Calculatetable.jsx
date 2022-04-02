import React, { useEffect, useState } from 'react';
import "./paystyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

import { Grid } from '@material-ui/core';
import axios from 'axios';



function Calculatetable() {
 
   const [CalculateSalary, setCalculateSalary] = useState([])

    const getCalculateSalary=()=>{
              axios.get("http://localhost:8000/CalculateSalary/get-calculateSalary")
               .then((res)=>{
                 console.log(res.data.data);
                 setCalculateSalary(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getCalculateSalary();
     })

     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/CalculateSalary/delete-CalculateSalary/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    return (
             <div>
                 <img src={logo} alt="" className='logos-payment' />  
              
             <div class="tablealign-payment">
                  <table class="table-payment">

                    <tr>
                       <th>Employeeid</th>
                       <th>Attendence</th>
                       <th>Salary</th>
                       <th>OTHourse</th>
                       <th>OTPayment</th>
                       <th>Totalsalary</th>
                       <th>Action</th>
               
                                        
                    </tr>
  {CalculateSalary.map((view)=>(
                 <tr>
                    <td>{view.Employeeid}</td>
                    <td>{view.Attendence}</td>
                    <td>{view.Salary}</td>
                    <td>{view.OTHourse}</td>
                    <td>{view.Totalsalary}</td>
                    <td>{view.Totalsalary}</td>
                    
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary' } /> 
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

export default Calculatetable 

