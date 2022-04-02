import React, { useState } from "react";
import "./paystyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';


function Payment() {
  const [values, setValues] = useState({
    Paymentid: 0,
    BillType: "",
    BillDate: "",
    BillAmount: 0,
    Checkedby: 0,
  });

  const handleaddpayment = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  } 

   
  const addInsertPayment = (e) => {
    e.preventDefault();
    let insertPaymentData = {
      Paymentid: values.Paymentid,
      BillType: values.BillType,
      BillDate: values.BillDate,
      BillAmount: values.BillAmount,
      Checkedby: values.Checkedby,
     
    }

     // console.log(insertPaymentData);

      axios.post("http://localhost:8000/insertPayment/add-insertPayment", insertPaymentData)
      .then((response) => {
        console.log(response.data.data);
        alert("Successfull")
      })
      .catch((error) => {
        console.log(error);
        alert("Unsuccessfull")
      })
  }

  

  return (
    <div>
      <div class="form-container-payment">
        <form class="register-form-payment">
        <label className='lbl-payment'>Payment id:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Payment id"
            name="Paymentid"
            onChange={handleaddpayment}
            value={values.Paymentid}
          />
          <label className='lbl-payment'>Bill Type:</label>
          <input
            class="form-field-payment"
            type="text"
            placeholder="BillType"
            name="BillType"
            onChange={handleaddpayment}
            value={values.BillType}
          />
          <label className='lbl-payment'>Bill Date:</label>
          <input
            class="form-field-payment"
            type="text"
            placeholder="BillDate"
            name="BillDate"
            onChange={handleaddpayment}
            value={values.BillDate}
          />
          <label className='lbl-payment'>Bill Amount:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="BillAmount"
            name="BillAmount"
            onChange={handleaddpayment}
            value={values.BillAmount}
          />
        

          <label className='lbl-payment'>Checked by:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Checkedby"
            name="Checkedby"
            onChange={handleaddpayment}
            value={values.Checkedby}
          />

        

          <div className="btngroup-payment">
            <button className="form-field cancel" onClick="document.getElementById('myInput').value=''">
              Cancel
            </button>
            <button  class="form-field submit" onClick={addInsertPayment} type="submit"  >
              Sumbit
            </button>
            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
