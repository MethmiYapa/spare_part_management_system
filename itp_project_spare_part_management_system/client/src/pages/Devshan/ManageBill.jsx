import React, { useState, useEffect } from "react";
import "./salestyle.css";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory, useParams, } from "react-router";
import logo from "../../assets/logo.png";


function ManageBill() {
  const history = useHistory();

  const [BillId, setBillId] = useState(0);
  const [CustomerId, setCustomerId] = useState(0);
  const [ItemId, setItemId] = useState(0);
  const [ItemQty, setItemQty] = useState(0);
  const [PaymentMethod, setPaymentMethod] = useState('');
  const [Remark, setRemark] = useState('');


  const params = useParams();

  const getSelectedBill = () => {
    axios.get(`http://localhost:8000/bill/get-bill/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
      //  setValues(response.data.data);
      setBillId(response.data.data.BillId);
      setCustomerId(response.data.data.CustomerId);
      setItemId(response.data.data.ItemId);
      setItemQty(response.data.data.ItemQty);
      setPaymentMethod(response.data.data.PaymentMethod);
      setRemark(response.data.data.Remark);
  
      })
  }

  useEffect(() => {
    getSelectedBill();
  }, []);

  const updateBillDetails = (e) => {
    e.preventDefault();

    let updateData = {
      BillId: BillId,
      CustomerId: CustomerId,
      ItemId: ItemId,
      ItemQty: ItemQty,
      PaymentMethod: PaymentMethod,
      Remark: Remark,
    }

    axios.put(`http://localhost:8000/bill/update-bill/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
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
            onChange={(e) => setBillId(e.target.value)}
            value={BillId}
          />
          <label className='lable-sale'>Customer ID :</label>
          <input
            class="form-field-sale"
            type="text"
            placeholder="Customer ID"
            name="CustomerId"
            onChange={(e) => setCustomerId(e.target.value)}
            value={CustomerId}
          />
          <label className='lable-sale'>Item ID :</label>
          <input
            class="form-field-sale"
            type="text"
            placeholder="Item ID"
            name="ItemId"
            onChange={(e) => setItemId(e.target.value)}
            value={ItemId}
          />
          <label className='lable-sale'>Item qty :</label>
          <input
            class="form-field-sale"
            type="number"
            placeholder="Item qty"
            name="ItemQty"
            onChange={(e) => setItemQty(e.target.value)}
            value={ItemQty}
          />
          <label className='lable-sale'>Payment Method :</label>
          <input
            class="form-field-sale"
            type="text"
            placeholder="Payment Method"
            name="PaymentMethod"
            onChange={(e) => setPaymentMethod(e.target.value)}
            value={PaymentMethod}
          />
          <label className='lable-sale'>Remark :</label>
          <input
            class="form-field-sale"
            type="text"
            placeholder="Remark"
            name="Remark"
            onChange={(e) => setRemark(e.target.value)}
            value={Remark}
          />

          <div className="btngroup-sale">
            <Link class="form-field cancel-sale" type="submit" to="/BillThreeMonth">
              Cancel
            </Link>
            <button class="form-field submit-sale" onClick={updateBillDetails}>
                    Submit
             </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default ManageBill;
