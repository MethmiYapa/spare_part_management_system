import React, { useEffect, useState } from 'react';
import "./custstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router';
import Viewreport from './Viewreport';

function CustomerTable() {

  const history = useHistory();
 
   const [addcus, setaddcus] = useState([])

    const getAddcus=()=>{
              axios.get("http://localhost:8000/addcus/get-addcus")
               .then((res)=>{
                 console.log(res.data.data);
                 setaddcus(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getAddcus();
     })

     const onDeleteHandlle = (id) => {
     
      axios
        .delete("http://localhost:8000/addcus/delete-addcus/"+ id)
        .then((res) => {
          console.log(res.data.data);
         
         
        }) 
        .catch((error) => {
          console.log(error.message);
        });
    };

    const updateCustomerNavigate = (id) => {
      let path = `/Managecustomer/${id}`;
      history.push(path);
  }

  const [searchTerm, setSearchTerm] = useState('');




    return (
             <div>
                 <img src={logo} alt="" className='logos-cus' />  


                 <input type="text"
                placeholder="Search By Name....."
                style={{ padding: "10px", color: "black" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 
            
              
             <div class="tablealign-cus">
                  <table class="table-cus">

                    <tr>
                       <th>Customer ID</th>
                       <th>Full Name</th>
                       <th>Primary Phone</th>
                       <th>Street Address</th>
                       <th>Date of Birth</th>
                       <th>Email Address</th>                   
                    </tr>

                     {addcus.filter(val => {
                    if(searchTerm === ''){
                      return val;
                    }
                    else if(
                      val.fullname.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                    else{
                      console.log("No Value");
                    }
                  }).map((view)=>(
                 <tr>
                    <td>{view.customerid}</td>
                    <td>{view.fullname}</td>
                    <td>{view.primaryphone}</td>
                    <td>{view.streetaddress}</td>
                    <td>{view.dateofbirth}</td>
                    <td>{view.emailaddress}</td>
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                <IconButton aria-label="delete" onClick={() =>updateCustomerNavigate(view._id)} >        
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

export default CustomerTable
