import React, { useEffect, useState } from 'react';
import "./style.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import SupViewReport from './SupViewReport';


function SupTable() {

  const history = useHistory();
 
   const [supplier, setsupplier] = useState([])

    const getsupplier=()=>{
              axios.get("http://localhost:8000/supplier/get-supplier")
               .then((res)=>{
                 console.log(res.data.data);
                 setsupplier(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
        getsupplier();
     })


     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/supplier/delete-supplier/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        })
        .catch((error) => {
          console.log(error.message);
        });
    };

    // update function
    const updateSupplierNavigate = (id) => {
        let path = `/Suppliermanage/${id}`;
        history.push(path);
    }

    const [searchTerm, setSearchTerm] = useState('');

    return (
             <div>
                 <img src={logo} alt="" className='logos-sup' /> 

          
              <input type="text"
                placeholder="Search By Name....."
                style={{ padding: "10px", color: "black" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 
            
              
             <div class="tablealign-sup">
                  <table class="table-sup">

                    <tr>
                       <th>Supplier Id</th>
                       <th>Name</th>
                       <th>NIC</th>
                       <th>Address</th>
                       <th>Email Address</th>
                       <th>Primary Phone</th>
                       <th>Country</th>
                       <th>Company Name</th>
                       <th>Action</th>
                       
                                        
                    </tr>
                  {supplier.filter(val => {
                    if(searchTerm === ''){
                      return val;
                    }
                    else if(
                      val.supplierName.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                    else{
                      console.log("No Value");
                    }
                  }).map((view)=>(
                 <tr>
                    <td>{view.supplierId}</td>
                    <td>{view.supplierName}</td>
                    <td>{view.nic}</td>
                    <td>{view.address}</td>
                    <td>{view.email}</td>
                    <td>{view.phoneNum}</td>
                    <td>{view.country}</td>
                    <td>{view.companyName}</td>
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                   <IconButton aria-label="delete" onClick={() => updateSupplierNavigate(view._id)} >        
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

export default SupTable