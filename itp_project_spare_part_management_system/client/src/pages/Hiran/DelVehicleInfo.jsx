import React, { useState } from "react";
import "./delstyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';




function DelVehicleInfo() {
  const [values, setValues] = useState({
    delvid: 0,
    vregnum: 0,
    vcategory: "",
    vfuel: "",
    vcapacity: "",
    vdes: "",
    vdate: "",
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  } 

  const addVehicleInfo = (e) => {
    e.preventDefault();
    let vehicleInfoData = {
      delvid: values.delvid,
      vregnum: values.vregnum,
      vcategory: values.vcategory,
      vfuel: values.vfuel,
      vcapacity: values.vcapacity,
      vdes: values.vdes,
      vdate: values.vdate,
      
    }

console.log(vehicleInfoData);

axios.post("http://localhost:8000/vehicleInfo/add-vehicleInfo", vehicleInfoData)
.then((response) => {
  console.log(response.data.data);
  // console.log("worked");
  alert("Successfull data added in Database")
})
.catch((error) => {
  console.log(error);
  // console.log("no worked");
})
}
  
 
  return (
    
    <div>
      <div class="del-form-container">
        <form class="del-register-form">

        
          <label for="delvid" name="delvid" className='del-lbl'>Vehicle ID:</label>
          <input 
            class="del-form-field"
            id="txtVehId"
            type="number"
            // placeholder="Vehicle ID"
            name="delvid"
           
            onChange={handleAddData}
            value={values.delvid} 
          />
          

          

          <label className='del-lbl'>Registration No:</label>
          <input
            class="del-form-field"
            type="number"
            // placeholder="Type"
            name="vregnum"
            onChange={handleAddData}
            value={values.vregnum}
          />

          <label className='del-lbl'>Category:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Driver ID"
            name="vcategory"
            
            onChange={handleAddData}
            value={values.vcategory}
          />

          <label className='del-lbl'>Fuel Type:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Name"
            name="vfuel"
            onChange={handleAddData}
            value={values.vfuel}
          />

          <label className='del-lbl'>Capacity:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Name"
            name="vcapacity"
            onChange={handleAddData}
            value={values.vcapacity}
          />

          <label className='del-lbl'>Remark:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Name"
            name="vdes"
            onChange={handleAddData}
            value={values.vdes}
          />

          <label className='del-lbl'>Date:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Name"
            name="vdate"
            onChange={handleAddData}
            value={values.vdate}
          />

          
        <div className="del-btngroup">
        <Link class="del-form-field cancel" type="submit" to="/DeliveryLandingPage">
              Cancel </Link>
            <button className="del-form-field cancel" onclick="document.getElementById('myInput').value = ''">
            Reset
            </button>
            <button onClick={addVehicleInfo} class="del-form-field submit" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

   
  );
}


export default DelVehicleInfo;
