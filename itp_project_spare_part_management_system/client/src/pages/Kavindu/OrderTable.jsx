import React, { useEffect, useState } from 'react';
import "./style.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';

function OrderTable() {
 
   const [order, setorder] = useState([])

    const getOrder=()=>{
              axios.get("http://localhost:8000/order/get-order")
               .then((res)=>{
                 console.log(res.data.data);
                 setorder(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
        getOrder();
     })



    
     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/order/delete-order/"+ id)
        .then((res) => {
          console.log(res.data.data);
          alert("Successfull")
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

 
    
    
    
    return (
             <div>
                 <img src={logo} alt="" className='logos-sup' />  
              
             <div class="tablealign-sup">
                  <table class="table-sup">

                    <tr>
                       <th>Supplier ID</th>
                       <th>Order ID</th>
                       <th>Item Id</th>
                       <th>Order Quantity</th>
                       <th>Net Amount</th>
                       <th>Action</th>
                       
                                        
                    </tr>
  {order.map((view)=>(
                 <tr>
                    <td>{view.supplierid}</td>
                    <td>{view.orderid}</td>
                    <td>{view.itemid}</td>
                    <td>{view.orderquantity}</td>
                    <td>{view.netamount}</td>
                    
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete"  onClick={()=>onDeleteHandlle(view._id)}>  
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

export default OrderTable
