import React,{useEffect, useState } from "react";
import "./custstyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory, useParams } from "react-router";

 
function Managecustomer() {
  
  const history = useHistory();

  const [customerid, setcustomerid] = useState(0);
  const [fullname, setfullname] = useState('');
  const [primaryphone, setprimaryphone] = useState(0);
  const [streetaddress, setstreetaddress] = useState('');
  const [dateofbirth, setdateofbirth] = useState('');
  const [emailaddress, setemailaddress] = useState('');


  const params = useParams();

  const getSelectedAddcus = () => {
    axios.get(`http://localhost:8000/addcus/get-addcus/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
      //  setValues(response.data.data);
      setcustomerid(response.data.data.customerid);
      setfullname(response.data.data.fullname);
      setprimaryphone(response.data.data.primaryphone);
      setstreetaddress(response.data.data.streetaddress);
      setdateofbirth(response.data.data.dateofbirth);
      setemailaddress(response.data.data.emailaddress);
  
      })
  }

  useEffect(() => {
    getSelectedAddcus();
  }, []);

  const updateAddcusDetails = (e) => {
    e.preventDefault();

    let updateData = {
      customerid: customerid,
      fullname: fullname,
      primaryphone: primaryphone,
      streetaddress: streetaddress,
      dateofbirth: dateofbirth,
      emailaddress: emailaddress,
    }
 
    axios.put(`http://localhost:8000/addcus/update-addcus/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
        history.push("/CustomerTable");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div>
      <div class="form-container-manage ">
        <form class="register-form">

          <label className='lbl-cus'>Customer ID:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Customer ID"
            name="customerid"
            onChange={(e) => setcustomerid(e.target.value)}
            value={customerid}
          />

          <label className='lbl-cus'>Full Name:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Full Name"
            name="fullname"
            onChange={(e) => setfullname(e.target.value)}
            value={fullname}
          />

          <label className='lbl-cus'>Primary Phone:</label>
          <input
            class="form-field-cus"
            type="value"
            placeholder="Primary Phone"
            name="primaryphone"
            onChange={(e) => setprimaryphone(e.target.value)}
            value={primaryphone}
          />

          <label className='lbl-cus'>Street Address:</label>
          <input
            class="form-field-cus"
            type="text"
            placeholder="Street Address"
            name="streetaddress"
            onChange={(e) => setstreetaddress(e.target.value)}
            value={streetaddress}
          />

          <label className='lbl-cus'>Date of Birth:</label>
          <input
            class="form-field-cus"
            type="date"
            placeholder="Date of Birth"
            name="dateofbirth"
            onChange={(e) => setdateofbirth(e.target.value)}
            value={dateofbirth}
          />

          <label className='lbl-cus'>Email Address:</label>
          <input
            class="form-field-cus"
            type="email"
            placeholder="Email Address"
            name="emailaddress"
            onChange={(e) => setemailaddress(e.target.value)}
            value={emailaddress}
          />

          <div className="btngroup-cus">
          <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>

              <button class="form-field submit-inv" onClick={updateAddcusDetails}>
                    Submit
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Managecustomer;
