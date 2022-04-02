import React, { useState } from "react";
import "./empstyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';


function Leave() {
  const [values, setValues] = useState({
    empid: "",
    reqid: 0 ,
    empname: "",
    sdate: "",
    enddate: "",
    nodays: "",
    remleave: 0,
    description: "",
    
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const addLeave = (e) => {
    e.preventDefault();
    let LeaveData = {
      empid: values.empid,
      reqid: values.reqid,
      empname: values.empname,
      sdate: values.sdate,
      enddate: values.enddate,
      nodays: values.nodays,
      remleave: values.remleave,
      description: values.description,
      
   }

    console.log(LeaveData);

    axios.post("http://localhost:8000/leave/add-leave", LeaveData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfully Recorded")
      })
      .catch((error) => {
        console.log(error);
        alert("UnSuccessful Attempt")
      })
  }

  return (
    
      <div>
      <div class="form-container-emp">
        <form class="register-form">

        <label className='lbl'>Employee ID:</label>
          <input
            class="form-field"
            type="text"
            placeholder="M1000"
            name="empid"
            onChange={handleAddData}
            value={values.empid}
          />

         <label className='lbl'>Request ID:</label>
          <input
            class="form-field"
            type="text"
            placeholder="R0001"
            name="reqid"
            onChange={handleAddData}
            value={values.reqid}
          />

          <label className='lbl'>Employee Name:</label>
          <input
            class="form-field"
            type="text"
            placeholder="Dewmini P.W.K"
            name="empname"
            onChange={handleAddData}
            value={values.empname}
          />

          <label className='lbl'>Start Date:</label>
          <input
            class="form-field"
            type="date"
            placeholder="01.01.2021"
            name="sdate"
            onChange={handleAddData}
            value={values.sdate}
          />

           <label className='lbl'>End Date:</label>
           <input
            class="form-field"
            type="date"
            placeholder="07.01.2021"
            name="enddate"
            onChange={handleAddData}
            value={values.enddate}
          />

          <label className='lbl'>Number Of Days :</label>
          <input
            class="form-field"
            type="number"
            placeholder="03"
            name="nodays"
            onChange={handleAddData}
            value={values.nodays}
          />

          <label className='lbl'>Remaining Leaves:</label>
          <input
            class="form-field"
            type="number"
            placeholder="10"
            name="remleave"
            onChange={handleAddData}
            value={values.remleave}
          />
 
         <label className='lbl'>Description:</label>
          <input
            class="form-field"
            type="text"
            name="description"
            onChange={handleAddData}
            value={values.description}
          />

<div className="btngroup">
            <button className="form-field delete" onclick="document.getElementById('myInput').value = ''">
              Reset
            </button>
            <button onClick={addLeave}  class="form-field submit" type = "submit"  >
              Submit
            </button>
                 
          </div>
        </form>
      </div>
    </div>
    

  );
}



export default Leave;