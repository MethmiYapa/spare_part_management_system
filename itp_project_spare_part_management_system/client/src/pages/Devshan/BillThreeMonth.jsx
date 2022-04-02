import React, { useEffect, useState } from 'react';
import "./salestyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

function BillThreeMonth() {
  const history = useHistory();
 
   const [bill, setbill] = useState([])

    const getbill=()=>{
              axios.get("http://localhost:8000/bill/get-bill")
               .then((res)=>{
                 console.log(res.data.data);
                 setbill(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }

     const onDeleteHandlle = (id) => {
     
        axios
          .delete("http://localhost:8000/bill/delete-bill/"+ id)
          .then((res) => {
            console.log(res.data.data);
           
           
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

           
     useEffect(()=>{
      getbill();
     }, [getbill, onDeleteHandlle, []]);

      const updateBillNavigate = (id) => {
        let path = `/ManageBill/${id}`;
        history.push(path);
    }

    return (
             
                
              
             <div class="tablealign-Sale">
                  <table class="table-Sale">

                    <tr>
                       <th>Bill ID</th>
                       <th>Customer ID</th>
                       <th>Item ID</th>
                       <th>Item Qty</th>
                       <th>Payment Method</th>
                       <th>Remark</th>
                       <th>Action</th>
                       
                                        
                    </tr>
  {bill.map((view)=>(
                 <tr>
                    <td>{view.BillId}</td>
                    <td>{view.CustomerId}</td>
                    <td>{view.ItemId}</td>
                    <td>{view.ItemQty}</td>
                    <td>{view.PaymentMethod}</td>
                    <td>{view.Remark}</td>
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                <IconButton aria-label="delete" onClick={() =>updateBillNavigate(view._id)} >        
                                <CreateIcon color={'primary'}/> 
                              </IconButton> 
                               </Grid>  
                           </Grid>    
                              </td>
                           </tr>
                ))}
               
             

             </table>
          </div> 
        
    )
}

export default BillThreeMonth