import React, { useEffect, useState } from 'react';
import "./empstyle.css";
import logo from "../../assets/logo.png";
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import { Grid } from '@material-ui/core';
import axios from 'axios';
import { useHistory } from 'react-router'; 
import empViewReport from './EmpViewReport';
 

function EmpDetailTable() {

  const history = useHistory();
 
   const [employee, setemployee] = useState([])

    const getemployee=()=>{
              axios.get("http://localhost:8000/employee/get-employee")
               .then((res)=>{
                 console.log(res.data.data);
                 setemployee(res.data.data);
               })
               .catch((error)=>{
                 console.log(error);
               })
    }
     
     useEffect(()=>{
      getemployee();
     })

     //delete
     const onDeleteHandlle = (id) => {
     
        axios
          .delete("http://localhost:8000/employee/delete-employee/"+ id)
          .then((res) => {
            console.log(res.data.data);

           
           
          })
          .catch((error) => {
            console.log(error.message);
          });
      };

      //update
      const updateEmployeeNavigate= (id) => {
        let path = `/ManageEmployee/${id}`;
        history.push(path);
    }

    const [searchTerm, setSearchTerm] = useState('');



    return (
             <div>

                 <img src={logo} alt="" className='logos-emp' />  

                 <input type="text"
                placeholder="Search By Name....."
                style={{ padding: "10px", color: "black" }}
                onChange={(e) => setSearchTerm(e.target.value)}
              /> 

                
             <div class="tablealign-emp">
                  <table class="table-emp">

                    <tr>
                       <th>Employee ID</th>
                       <th>Employee Name</th>
                       <th>NIC</th>
                       <th>Address</th>
                       <th>Email</th>
                       <th>Phone</th>
                       <th>Type</th>
                       <th>Hour Rate</th>
                       <th>Leaves</th>
                       
                                        
                    </tr>
                    {employee.filter(val => {
                    if(searchTerm === ''){
                      return val;
                    }
                    else if(
                      val.empname.toLowerCase().includes(searchTerm.toLowerCase())
                    ){
                      return val;
                    }
                    else{
                      console.log("No Value");
                    }
                  }).map((view)=>(
                 <tr>
                    <td>{view.empid}</td>
                    <td>{view.empname}</td>
                    <td>{view.NIC}</td>
                    <td>{view.address}</td>
                    <td>{view.email}</td>
                    <td>{view.phone}</td>
                    <td>{view.type}</td>
                    <td>{view.hrRate}</td>
                    <td>{view.leaves}</td>
                   
                    <td> 
                      
                        <Grid container> 
                             <Grid item> 
                               <IconButton aria-label="delete" onClick={()=>onDeleteHandlle(view._id)}>  
                                   <DeleteIcon color={'secondary'} /> 
                               </IconButton> 
                             </Grid>
                                <Grid item>                      
                                <IconButton aria-label="delete" onClick={() =>updateEmployeeNavigate(view._id)} >        
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

export default EmpDetailTable
