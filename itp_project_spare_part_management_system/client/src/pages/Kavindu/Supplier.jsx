import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';

function Supplier() {
  const [values, setValues] = useState({
    supplierid: 0,
    name: "",
    nic: 0,
    address: "",
    emailaddress: "",
    primaryphone: 0,
    country: "",
    companyname: "",
  });
 
  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }             
 
  const addSupplier = (e) => {
    e.preventDefault();
    let supplierData = {
      supplierId: values.supplierid,
      supplierName: values.name,
      nic: values.nic,
      address: values.address,
      email: values.emailaddress,
      phoneNum: values.primaryphone,
      country: values.country,
      companyName: values.companyname
    }

    // console.log(supplierData);

    axios.post("http://localhost:8000/supplier/add-supplier", supplierData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfull")
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div>
      <div class="form-container-sup">
        <form class="register-form-sup">

        <label className='lble-sup'>Supplier ID</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Supplier ID"
            name="supplierid"
            onChange={handleAddData}
            value={values.supplierid}
          />

          <label className='lble-sup'>Name</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleAddData}
            value={values.name}
          />

          <label className='lble-sup'>Nic</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Nic"
            name="nic"
            onChange={handleAddData}
            value={values.nic}
          />

          <label className='lble-sup'>Address</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleAddData}
            value={values.address}
          />

          <label className='lble-sup'>Email Address</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Email Address"
            name="emailaddress"
            onChange={handleAddData}
            value={values.emailaddress}
          />

          <label className='lble-sup'>Primary Phone</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Primary Phone"
            name="primaryphone"
            onChange={handleAddData}
            value={values.primaryphone}
          />

          <label className='lble-sup'>Country</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Country"
            name="country"
            onChange={handleAddData}
            value={values.country}
          />

          <label className='lble-sup'>Company Name</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Company Name"
            name="companyname"
            onChange={handleAddData}
            value={values.companyname}
          />

          <div className="btngroup-sup">
            <button className="form-field cancel" onclick="document.getElementById('myInput').value = ''">
            Reset
            </button>
            <button onClick={addSupplier} class="form-field submit-sup">
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
 
  );
}

export default Supplier;
