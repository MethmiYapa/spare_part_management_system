import React, { useState } from "react";
import "./custstyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';



 
function Customer() {
  const [values, setValues] = useState({
    customerid: 0,
    fullname: "",
    primaryphone: 0,
    streetaddress: "",
    dateofbirth: "",
    emailaddress: "",
  });

  const history = useHistory();

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value});
  }

  const addAddcus = (e) => {
    e.preventDefault();
    let addcusData = {
      customerid: values.customerid,
      fullname: values.fullname,
      primaryphone: values.primaryphone,
      streetaddress: values.streetaddress,  
      dateofbirth: values.dateofbirth,
      emailaddress: values.emailaddress,
    }

    console.log(addcusData);

    axios.post("http://localhost:8000/addcus/add-addcus", addcusData)
    .then((response) => {
      console.log(response.data.data);
      alert("Data Added Successfully")
      history.push("/CustomerTable");
    })
    .catch((error) => {
      console.log(error);
      alert("Error")
    })
  }

  return (
    <div>
      <div class="form-container-cus">
        <form class="register-form">

          <label className='lbl-cus'>Customer ID:</label>
          <input
            class="form-field-cus"
            type="number"
            placeholder="Customer ID"
            name="customerid"
            onChange={handleAddData}
            value={values.customerid}
          />

          <label className='lbl-cus'>Full Name:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Full Name"
            name="fullname"
            onChange={handleAddData}
            value={values.fullname}
          />

          <label className='lbl-cus'>Primary Phone:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Primary Phone"
            name="primaryphone"
            onChange={handleAddData}
            value={values.primaryphone}
          />

          <label className='lbl-cus'>Street Address:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Street Address"
            name="streetaddress"
            onChange={handleAddData}
            value={values.streetaddress}
          />

          <label className='lbl-cus'>Date of Birth:</label>
          <input
            class="form-field-cus"
            type="date"
            placeholder="Date of Birth"
            name="dateofbirth"
            onChange={handleAddData}
            value={values.dateofbirth}
          />

          <label className='lbl-cus'>Email Address:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Email Address"
            name="emailaddress"
            onChange={handleAddData}
            value={values.emailaddress}
          />

          <div className="btngroup-cus">
          <button className="form-field cancel" onclick="document.getElementById('myInput').value = ''">
            Cancel
            </button>
            <button class="form-field submit" onClick={addAddcus} type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Customer;
