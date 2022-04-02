import React, { useEffect, useState } from "react";
import "./delstyle.css";
import axios from 'axios';
import { useHistory, useParams } from "react-router";



function DeliveryManage() {
  const history = useHistory();

  const [deliveryid, setdeliveryid] = useState(0);
  const [delbillid, setdelbillid] = useState(0);
  const [delcustomer, setdelcustomer] = useState('');
  const [deldate, setdeldate] = useState('');
  const [deltime, setdeltime] = useState('');
  const [deladdress1, setdeladdress1] = useState('');
  const [deladdress2, setdeladdress2] = useState('');
  const [delcity, setdelcity] = useState('');
  const [delpostelcode, setdelpostelcode] = useState(0);
  const [delvid, setdelvid] = useState(0);
  const [delvehtype, setdelvehtype] = useState('');
  const [deldriverid, setdeldriverid] = useState(0);
  const [deldriname, setdeldriname] = useState('');
  



  const params = useParams();

  const getSelectedDeliveryInfo = () => {
    axios.get(`http://localhost:8000/deliveryInfo/get-deliveryInfo/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
        //setValues(response.data.data);
      setdeliveryid(response.data.data.deliveryid);
      setdelbillid(response.data.data.delbillid);
      setdelcustomer(response.data.data.delcustomer);
      setdeldate(response.data.data.deldate);
      setdeltime(response.data.data.deltime);
      setdeladdress1(response.data.data.deladdress1);
      setdeladdress2(response.data.data.deladdress2);
      setdelcity(response.data.data.delcity);
      setdelpostelcode(response.data.data.delpostelcode);
      setdelvid(response.data.data.delvid);
      setdelvehtype(response.data.data.delvehtype);
      setdeldriverid(response.data.data.deldriverid);
      setdeldriname(response.data.data.deldriname);
  
      })
  }

  useEffect(() => {
    getSelectedDeliveryInfo();
  }, []);

  const updateDeliveryInfoDetails = (e) => {
    e.preventDefault();

    let updateData = {
      deliveryid: deliveryid,
      delbillid: delbillid,
      delcustomer: delcustomer,
      deldate: deldate,
      deltime: deltime,
      deladdress1: deladdress1,
      deladdress2: deladdress2,
      delcity: delcity,
      delpostelcode: delpostelcode,
      delvid: delvid,
      delvehtype: delvehtype,
      deldriverid: deldriverid,
      deldriname: deldriname,
    }

    axios.put(`http://localhost:8000/deliveryInfo/update-deliveryInfo/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
        history.push("/DeliveryTable");
      })
      .catch((error) => {
        console.log(error);
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
              onChange={(e) => setdeliveryid(e.target.value)}
              value={deliveryid}
            />
            <label className='del-lbl'>Bill ID:</label>
            <input
              class="del-form-field"
              type="number"
              // placeholder="Bill ID"
              name="delbillid"
              onChange={(e) => setdelbillid(e.target.value)}
              value={delbillid}
            />
  
            <label className='del-lbl'>Customer Name:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="delcustomer"
              onChange={(e) => setdelcustomer(e.target.value)}
              value={delcustomer}
            />
  
            <label className='del-lbl'>Date:</label>
            <input
              class="del-form-field"
              type="date"
              // placeholder="Date"
              name="deldate"
              onChange={(e) => setdeldate(e.target.value)}
              value={deldate}
            />
  
            <label className='del-lbl'>Time:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Time"
              name="deltime"
              onChange={(e) => setdeltime(e.target.value)}
              value={deltime}
            />
            <h2 class="del-title2">Location Information</h2>
  
            <label className='del-lbl'>Address Line 1:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="deladdress1"
              onChange={(e) => setdeladdress1(e.target.value)}
              value={deladdress1}
            />  
  
            <label className='del-lbl'>Address Line 2:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="deladdress2"
              onChange={(e) => setdeladdress2(e.target.value)}
              value={deladdress2}
            />
  
             <label className='del-lbl'>City:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="delcity"
              onChange={(e) => setdelcity(e.target.value)}
              value={delcity}
            /> 
  
             <label className='del-lbl'>Postel Code:</label>
            <input
              class="del-form-field"
              type="number"
              // placeholder="Customer ID"
              name="delpostelcode"
              onChange={(e) => setdelpostelcode(e.target.value)}
              value={delpostelcode}
            />    
  
            <h2 class="del-title2">Vehical Information</h2>
            
            <label className='del-lbl'>Vehical ID:</label>
            <input
              class="del-form-field"
              type="number"
              // placeholder="Customer ID"
              name="delvid"
              onChange={(e) => setdelvid(e.target.value)}
              value={delvid}
            />
  
          <label className='del-lbl'>Type:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="delvehtype"
              onChange={(e) => setdelvehtype(e.target.value)}
              value={delvehtype}
            />
  
          <label className='del-lbl'>Driver ID:</label>
            <input
              class="del-form-field"
              type="number"
              // placeholder="Customer ID"
              name="deldriverid"
              onChange={(e) => setdeldriverid(e.target.value)}
              value={deldriverid}
            />
  
          <label className='del-lbl'>Driver Name:</label>
            <input
              class="del-form-field"
              type="text"
              // placeholder="Customer ID"
              name="deldriname"
              onChange={(e) => setdeldriname(e.target.value)}
              value={deldriname}
            />
  
          
  
                 
         
          {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="form-field submit-inv" onClick={updateDeliveryInfoDetails}>
                    Update
             </button>
              
          </div>
        </form>
      </div>
      </div>
      </div>
  );
}


export default DeliveryManage;
