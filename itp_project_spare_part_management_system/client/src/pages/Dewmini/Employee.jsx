import React, { useState } from "react";
import "./empstyle.css";
import logo from "../../assets/logo.png";
import axios from 'axios';


function Employee() {
  const [values, setValues] = useState({
    empid: "",
    empname: "",
    NIC: "",
    address: "",
    email: "",
    phone: 0,
    type: "",
    hrRate: 0 ,
    leaves: 0,
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const addEmployee = (e) => {
    e.preventDefault();
    let EmployeeData = {
      empid: values.empid,
      empname: values.empname,
      NIC: values.NIC,
      address: values.address,
      email: values.email,
      phone: values.phone,
      type: values.type,
      hrRate: values.hrRate,
      leaves: values.leaves,

    }

    console.log(EmployeeData);

    axios.post("http://localhost:8000/employee/add-employee", EmployeeData)
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

          <label className='lbl'>Employee Name:</label>
          <input
            class="form-field"
            type="text"
            placeholder="Dewmini P.W.K"
            name="empname"
            onChange={handleAddData}
            value={values.empname}
          />

          <label className='lbl'>NIC:</label>
          <input
            class="form-field"
            type="text"
            placeholder="996745230V"
            name="NIC"
            onChange={handleAddData}
            value={values.NIC}
          />

           <label className='lbl'>Address:</label>
           <input
            class="form-field"
            type="text"
            placeholder="No1,Street,City,Country"
            name="address"
            onChange={handleAddData}
            value={values.address}
          />

          <label className='lbl'>E-mail Address :</label>
          <input
            class="form-field"
            type="text"
            placeholder="123@gmail.com"
            name="email"
            onChange={handleAddData}
            value={values.email}
          />

          <label className='lbl'>Primary Phone:</label>
          <input
            class="form-field"
            type="text"
            placeholder="(+94)702321050"
            name="phone"
            onChange={handleAddData}
            value={values.phone}
          />
 
         

          <label className='lbl'>Employee Type:</label>
          <input
            class="form-field"
            type="text"
            placeholder="Manager"
            name="type"
            onChange={handleAddData}
            value={values.type}
          />

           <label className='lbl'>Hour Rate:</label>
          <input
            class="form-field"
            type="text"
            placeholder="12"
            name="hrRate"
            onChange={handleAddData}
            value={values.hrRate}
          />

          <label className='lbl'>Annual Leaves:</label>
          <input
            class="form-field"
            type="number"
            placeholder="14"
            name="leaves"
            onChange={handleAddData}
            value={values.leaves}
          />

         <div className="btngroup">
            <button className="form-field delete" onclick="document.getElementById('myInput').value = ''">
              Reset
            </button>
            <button onClick={addEmployee}  class="form-field submit" type = "submit"  >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
   
  );
}



export default Employee;
