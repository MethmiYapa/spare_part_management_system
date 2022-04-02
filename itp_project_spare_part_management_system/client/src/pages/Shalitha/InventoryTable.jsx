import React, { useEffect, useState } from 'react';
import "./Invstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';

function InventoryTable() {
 
  const history = useHistory();

   const [inventory, setinventory] = useState([])

    const getinventory=()=>{
              axios.get("http://localhost:8000/inventory/get-inventory")
               .then((res)=>{
                 console.log(res.data.data);
                 setinventory(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getinventory();
     })


     const onDeleteHandlle = (id) => {    
      axios
        .delete("http://localhost:8000/inventory/delete-item/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };


    const updateInventoryNavigate = (id) => {
      let path = `/Inventorymanage/${id}`;
      history.push(path);
  }



  const [searchTerm, setSearchTerm] = useState('');





    return (
             <div>
                 <input type="text"
                placeholder="Search By Item ID....."
                style={{ padding: "10px", color: "black" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 
             
             <div class="tablealign-inv">
                  <table class="table-Inv">

                    <tr>
                       <th>Item ID</th>
                       <th>Item Name</th>
                       <th>Brand</th>
                       <th>Quantity</th>
                       <th>Buying Price</th>
                       <th>Selling Price</th>
                       <th>Action</th>                                 
                    </tr>

                    {inventory.filter(val => {
                    if(searchTerm === ''){
                      return val;
                    }
                    else if(
                      val.itemname.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                    else{
                      console.log("No Value");
                    }
                  }).map((view)=>(
                 <tr>
                    <td>{view.itemid}</td>
                    <td>{view.itemname}</td>
                    <td>{view.brand}</td>
                    <td>{view.quantity}</td>
                    <td>{view.buyingprice}</td>
                    <td>{view.sellingprice}</td>
                   
                    <td>                      
                       <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                   <IconButton aria-label="delete" onClick={() =>updateInventoryNavigate(view._id)} >        
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

export default InventoryTable
