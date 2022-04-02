import React, { useEffect, useState } from "react";
import "./paystyle.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory, useParams } from "react-router";



function Manage() {
  const history = useHistory();
 
  const [Paymentid, setPaymentid] = useState(0);
  const [BillType, setBillType] = useState('');
  const [BillDate, setBillDate] = useState('');
  const [BillAmount, setBillAmount] = useState(0);
  const [Checkedby, setCheckedby] = useState(0);
  

 const params = useParams();

 const getSelectPayment = () =>{
   axios.get(`http://localhost:8000/insertpayment/get-insertpayment/${params.id}`)
   .then((response) => {
    console.log(response.data.data);
  //  setValues(response.data.data);


        setPaymentid(response.data.data.Paymentid);
        setBillType(response.data.data.BillType);
        setBillDate(response.data.data.BillDate);
        setBillAmount(response.data.data.BillAmount);
        setCheckedby(response.data.data.Checkedby);
 })
}

useEffect(() => {
  getSelectPayment ();
},[]);

const updatePaymentDetails = (e) => {
  e.preventDefault();

  let updateData = {
    Paymentid: Paymentid,
    BillType: BillType,
    BillDate:BillDate,
    BillAmount:BillAmount,
    Checkedby:Checkedby,
   
  }

  axios.put(`http://localhost:8000/insertpayment/update-insertpayment/${params.id}`,updateData)
    .then((response) => {
      console.log("updated successfully");
      history.push("/Paymenttable");
    })
    .catch((error) => {
      console.log(error);
    })
}
  

  return (
    <div>
      <div class="manage-payment"></div>
      <div class="form-container-payment">
        <form class="register-form-payment">
        <label className='lbl-payment'>Payment id:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Payment id"
            name="Paymentid"
            onChange={(e) => setPaymentid(e.target.value)}
            value={Paymentid}
          />
          <label className='lbl-payment'>Bill Type:</label>
          <input
            class="form-field-payment"
            type="text"
            placeholder="BillType"
            name="BillType"
            onChange={(e) => setBillType(e.target.value)}
            value={BillType}
          />
          <label className='lbl-payment'>Bill Date:</label>
          <input
            class="form-field-payment"
            type="text"
            placeholder="BillDate"
            name="BillDate"
            onChange={(e) => setBillDate(e.target.value)}
            value={BillDate}
          />
          <label className='lbl-payment'>Bill Amount:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="BillAmount"
            name="BillAmount"
            onChange={(e) => setBillAmount(e.target.value)}
            value={BillAmount}
          />
        

          <label className='lbl-payment'>Checkedby:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Checkedby"
            name="Checkedby"
            onChange={(e) => setCheckedby(e.target.value)}
            value={Checkedby}
          />

        

          <div className="btngroup-payment">
            <Link class="form-field cancel" type="submit" to="/delivery">
              Cancel
            </Link>
          
          <button class="form-field delete" type="submit"  onClick={updatePaymentDetails}  >
             Submit
          </button>
          
            
          </div>
        </form>
      </div>
    </div>

  );
}

export default Manage;
