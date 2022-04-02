import React, { useEffect, useState } from 'react';
import "./delstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

function DeliveryTable() {
  const history = useHistory();
 
   const [deliveryInfo, setdeliveryInfo] = useState([])
   

    const getDeliveryInfo=()=>{
              axios.get("http://localhost:8000/deliveryInfo/get-deliveryInfo")
               .then((res)=>{
                 console.log(res.data.data);
                 setdeliveryInfo(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
        getDeliveryInfo();
     })

     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/deliveryInfo/delete-deliveryInfo/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    const updateDeliveryInfoNavigate = (id) => {
      let path = `/DeliveryManage/${id}`;
      history.push(path);
  }


    return (
             <div>
                 <img src={logo} alt="" className='del-logo' />  
              
             <div class="del-tablealign">
                  <table class="del-table">

                    <tr>
                       <th>Delivery ID</th>
                       <th>Bill ID</th>
                       <th>Customer Name</th>
                       <th>Date</th>
                       <th>Time</th>
                       <th>Address Line 1</th>
                       <th>Address Line 2</th>
                       <th>City</th>
                       <th>Postel Code</th>
                       <th>Vehicle ID</th>
                       <th>Type</th>
                       <th>Driver ID</th>
                       <th>Driver Name</th>
                       
                                        
                    </tr>
  {deliveryInfo.map((view)=>(
                 <tr>
                    <td>{view.deliveryid}</td>
                    <td>{view.delbillid}</td>
                    <td>{view.delcustomer}</td>
                    <td>{view.deldate}</td>
                    <td>{view.deltime}</td>
                    <td>{view.deladdress1}</td>
                    <td>{view.deladdress2}</td>
                    <td>{view.delcity}</td>
                    <td>{view.delpostelcode}</td>
                    <td>{view.delvid}</td>
                    <td>{view.delvehtype}</td>
                    <td>{view.deldriverid}</td>
                    <td>{view.deldriname}</td>
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                <IconButton aria-label="delete" onClick={() =>updateDeliveryInfoNavigate(view._id)} >        
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

export default DeliveryTable
