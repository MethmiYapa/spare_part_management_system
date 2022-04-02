import React, { useState } from "react";
import "./salestyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Bill() {

  const history = useHistory();

    const [values, setValues] = useState({
      BillId: 0,
      CustomerId: 0,
      ItemId: 0,
      ItemQty: 0,
      PaymentMethod: "",
      Remark: "",
    });

    const handleAddBillData = (e) => {
      const { name, value } = e.target
      setValues({ ...values, [name]: value});
    }

    const addBill = (e) => {
      e.preventDefault();
      let billData = {
        BillId: values.BillId,
        CustomerId: values.CustomerId,
        ItemId: values.ItemId,
        ItemQty: values.ItemQty,
        PaymentMethod: values.PaymentMethod,
        Remark: values.Remark,

      }

           console.log(billData);

    axios.post("http://localhost:8000/bill/add-bill", billData)
    .then((response) => {
      console.log(response.data.data);
      history.push("/BillThreeMonth");
    })
    .catch((error) => {
      console.log(error);
    })
}


      return (
        <div >
          <div class="form-container-sale">
            <form class="register-form-sale">
            <label className='lable-sale'>Bill ID :</label>
              <input
                class="form-field-sale"
                type="text"
                placeholder="Bill ID"
                name="BillId"
                onChange={handleAddBillData}
                value={values.BillId}
              />
              <label className='lable-sale'>Customer ID :</label>
              <input
                class="form-field-sale"
                type="text"
                placeholder="Customer ID"
                name="CustomerId"
                onChange={handleAddBillData}
                value={values.CustomerId}
              />
              <label className='lable-sale'>Item ID :</label>
              <input
                class="form-field-sale"
                type="text"
                placeholder="Item ID"
                name="ItemId"
                onChange={handleAddBillData}
                value={values.ItemId}
              />
              <label className='lable-sale'>Item qty :</label>
              <input
                class="form-field-sale"
                type="number"
                placeholder="Item qty"
                name="ItemQty"
                onChange={handleAddBillData}
                value={values.ItemQty}
              />
              <label className='lable-sale'>Payment Method :</label>
              <input
                class="form-field-sale"
                type="text"
                placeholder="Payment Method"
                name="PaymentMethod"
                onChange={handleAddBillData}
                value={values.PaymentMethod}
              />
              <label className='lable-sale'>Remark :</label>
              <input
                class="form-field-sale"
                type="text"
                placeholder="Remark"
                name="Remark"
                onChange={handleAddBillData}
                value={values.Remark}
              />
    
              <div className="btngroup-sup">
              <button className="form-field cancel">
              Cancel
              </button>
              <button onClick={addBill} class="form-field submit">
                Submit
              </button>
            </div>
          </form>
        </div>
        </div>
     //   </div>
      //</div>
    );
  }
    
    export default Bill;
    