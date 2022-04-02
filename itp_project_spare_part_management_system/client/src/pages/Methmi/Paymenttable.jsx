import React, { useEffect, useState } from 'react';
import "./paystyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import Paymentviewreport from './Paymentviewreport';

function Paymenttable() {

  const history = useHistory();
 
   const [insertPayment, setinsertPayment] = useState([])

    const getPayment=()=>{
              axios.get("http://localhost:8000/insertpayment/get-insertpayment")
               .then((res)=>{
                 console.log(res.data.data);
                 setinsertPayment(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getPayment();
     })

     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/insertpayment/delete-insertpayment/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    //update function
    const updateInsertPaymentNavigate =(id)=>{
      let path= `/Manage/${id}`;
      history.push(path);
}
const [searchTerm, setSearchTerm] = useState('');
    return (
             <div>
                 <img src={logo} alt="" className='logos-payment' />  
              
                 <input type="text"
                placeholder="Search By BillType....."
                style={{ padding: "10px", color: "black" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 

             <div class="tablealign-payment">
                  <table class="table-payment">

                    <tr>
                       <th>Payment id</th>
                       <th>Bill Type</th>
                       <th>Bill Date</th>
                       <th>Bill Amount</th>
                       <th>Checked by</th>
                       <th>Action</th>
                       
                    </tr>

                    {insertPayment.filter(val => {
                    if(Number.isInteger(val)){
                      return val;
                    }
                    else if(
                      val.BillType.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                    else{
                      console.log("No Value");
                    }
                  
                  }).map((view)=>(
                 <tr>
                    <td>{view.Paymentid}</td>
                    <td>{view.BillType}</td>
                    <td>{view.BillDate}</td>
                    <td>{view.BillAmount}</td>
                    <td>{view.Checkedby}</td>
                    
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete"  onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                               

                               <Grid item>                      
                                   <IconButton aria-label="delete" onClick={() => updateInsertPaymentNavigate(view._id)} >        
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

export default  Paymenttable
