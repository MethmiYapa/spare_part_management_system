import React, { useState } from "react";
import "./delstyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';


function Delivery() {
  const [values, setValues] = useState({
    deliveryid: 0,
    delbillid: 0,
    delcustomer: "",
    deldate: "",
    deltime: "",
    deladdress1: "",
    deladdress2: "",
    delcity: "",
    delpostelcode: 0,
    delvid: 0,
    delvehtype: "",
    deldriverid: 0,
    deldriname: "",
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  } 

  const addDeliveryInfo = (e) => {
    e.preventDefault();
    let deliveryInfoData = {
      deliveryid: values.deliveryid,
      delbillid: values.delbillid,
      delcustomer: values.delcustomer,
      deldate: values.deldate,
      deltime: values.deltime,
      deladdress1: values.deladdress1,
      deladdress2: values.deladdress2,
      delcity: values.delcity,
      delpostelcode: values.delpostelcode,
      delvid: values.delvid,
      delvehtype: values.delvehtype,
      deldriverid: values.deldriverid,
      deldriname: values.deldriname,
      
    }

    console.log(deliveryInfoData);

axios.post("http://localhost:8000/deliveryInfo/add-deliveryInfo", deliveryInfoData)
.then((response) => {
  console.log(response.data.data);
  alert("Successfull")
  // console.log("worked");
})
.catch((error) => {
  console.log(error);
  // console.log("no worked");
})
}

  
 
  return (
    <div >
      <div className="del-constrain-new2">
      <div class="del-form-container">
        <form class="del-register-form">

        
        <h2 class="del-title1">Delivery Information</h2>

         <label className='del-lbl'>Delivery ID:</label>
          <input
            class="del-form-field"
            type="number"
            //placeholder="Delivery ID"
            name="deliveryid"
            onChange={handleAddData}
            value={values.deliveryid}
          />
          <label className='del-lbl'>Bill ID:</label>
          <input
            class="del-form-field"
            type="number"
            // placeholder="Bill ID"
            name="delbillid"
            onChange={handleAddData}
            value={values.delbillid}
          />

          <label className='del-lbl'>Customer Name:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="delcustomer"
            onChange={handleAddData}
            value={values.delcustomer}
          />

          <label className='del-lbl'>Date:</label>
          <input
            class="del-form-field"
            type="date"
            // placeholder="Date"
            name="deldate"
            onChange={handleAddData}
            value={values.deldate}
          />

          <label className='del-lbl'>Time:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Time"
            name="deltime"
            onChange={handleAddData}
            value={values.deltime}
          />
          <h2 class="del-title2">Location Information</h2>

          <label className='del-lbl'>Address Line 1:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="deladdress1"
            onChange={handleAddData}
            value={values.deladdress1}
          />  

          <label className='del-lbl'>Address Line 2:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="deladdress2"
            onChange={handleAddData}
            value={values.deladdress2}
          />

           <label className='del-lbl'>City:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="delcity"
            onChange={handleAddData}
            value={values.delcity}
          /> 

           <label className='del-lbl'>Postel Code:</label>
          <input
            class="del-form-field"
            type="number"
            // placeholder="Customer ID"
            name="delpostelcode"
            onChange={handleAddData}
            value={values.delpostelcode}
          />    

          <h2 class="del-title2">Vehical Information</h2>
          
          <label className='del-lbl'>Vehical ID:</label>
          <input
            class="del-form-field"
            type="number"
            // placeholder="Customer ID"
            name="delvid"
            onChange={handleAddData}
            value={values.delvid}
          />

        <label className='del-lbl'>Type:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="delvehtype"
            onChange={handleAddData}
            value={values.delvehtype}
          />

        <label className='del-lbl'>Driver ID:</label>
          <input
            class="del-form-field"
            type="number"
            // placeholder="Customer ID"
            name="deldriverid"
            onChange={handleAddData}
            value={values.deldriverid}
          />

        <label className='del-lbl'>Driver Name:</label>
          <input
            class="del-form-field"
            type="text"
            // placeholder="Customer ID"
            name="deldriname"
            onChange={handleAddData}
            value={values.deldriname}
          />

        

               
        <div className="del-btngroup">
        <Link class="del-form-field cancel" type="submit" to="/DeliveryLandingPage">
              Cancel </Link>
            <button className="del-form-field cancel" onclick="document.getElementById('myInput').value = ''">
            Reset
            </button>
            <button onClick={addDeliveryInfo} class="del-form-field submit" type="submit">
              Submit
            </button>
            
          </div>
        </form>
      </div>
      </div>
    </div>
  
  );
}


export default Delivery;
