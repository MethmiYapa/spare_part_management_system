import React, { useEffect, useState } from "react";
import "./empstyle.css";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory, useParams } from "react-router";


function ManageEmployee() {
  
  const history = useHistory();

  const [empid, setempid] = useState('');
  const [empname, setempname] = useState('');
  const [NIC, setNIC] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [phone, setphone] = useState('');
  const [type, settype] = useState('');
  const [hrRate, sethrRate] = useState('');
  const [leaves, setleaves] = useState(0);



  const params = useParams();

  const getSelectedEmployee = () => {
    axios.get(`http://localhost:8000/employee/get-employee/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
      //  setValues(response.data.data);
      setempid(response.data.data.empid);
      setempname(response.data.data.empname);
      setNIC(response.data.data.NIC);
      setaddress(response.data.data.address);
      setemail(response.data.data.email);
      setphone(response.data.data.phone);
      settype(response.data.data.type);
      sethrRate(response.data.data.hrRate);
      setleaves(response.data.data.leaves);
  
      })
  }

  useEffect(() => {
    getSelectedEmployee();
  }, []);

  const updateEmployeeDetails = (e) => {
    e.preventDefault();

    let updateData = {
      empid: empid,
      empname: empname,
      NIC: NIC,
      address: address,
      email: email,
      phone:phone,
      type: type,
      hrRate: hrRate,
      leaves: leaves,
    }

    axios.put(`http://localhost:8000/employee/update-employee/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
        history.push("/EmpDetailTable");
      })
      .catch((error) => {
        console.log(error);
      })
  }

  return (
    <div >

      <div class="form-container-emp">
        <form class="register-form">

        <label className='lbl'>Employee ID:</label>
          <input
            class="form-field"
            type="text"
            placeholder="M1000"
            name="empid"
            onChange={(e) => setempid(e.target.value)}
            value={empid}
          />

          <label className='lbl'>Employee Name:</label>
          <input
            class="form-field"
            type="text"
            placeholder="Dewmini P.W.K"
            name="empname"
            onChange={(e) => setempname(e.target.value)}
            value={empname}
          />

          <label className='lbl'>NIC:</label>
          <input
            class="form-field"
            type="text"
            placeholder="996745230V"
            name="NIC"
            onChange={(e) => setNIC(e.target.value)}
            value={NIC}
          />

           <label className='lbl'>Address:</label>
           <input
            class="form-field"
            type="text"
            placeholder="No1,Street,City,Country"
            name="address"
            onChange={(e) => setaddress(e.target.value)}
            value={address}
          />

          <label className='lbl'>E-mail Address :</label>
          <input
            class="form-field"
            type="text"
            placeholder="123@gmail.com"
            name="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />

          <label className='lbl'>Primary Phone:</label>
          <input
            class="form-field"
            type="text"
            placeholder="(+94)702321050"
            name="phone"
            onChange={(e) => setphone(e.target.value)}
            value={phone}
          />
 
      

          <label className='lbl'>Employee Type:</label>
          <input
            class="form-field"
            type="text"
            placeholder="Manager"
            name="type"
            onChange={(e) => settype(e.target.value)}
            value={type}
          />

           <label className='lbl'>Hour Rate:</label>
          <input
            class="form-field"
            type="text"
            placeholder="12"
            name="hrRate"
            onChange={(e) => sethrRate(e.target.value)}
            value={hrRate}
          />

          <label className='lbl'>Annual Leaves:</label>
          <input
            class="form-field"
            type="number"
            placeholder="14"
            name="leaves"
            onChange={(e) => setleaves(e.target.value)}
            value={leaves}
          />

         <div className="btngroup">
         <button className="form-field cancel-emp" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>

              <button class="form-field submit-inv" onClick={updateEmployeeDetails}>
                    Submit
             </button>
          </div>
        </form>
      </div>
      </div>
   
  );
}



export default ManageEmployee;