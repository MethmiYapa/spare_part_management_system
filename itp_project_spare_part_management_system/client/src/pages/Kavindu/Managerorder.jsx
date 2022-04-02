import React, { useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Managerorder() {
  const [values, setValues] = useState({
    supplierid: 0,
    orderid: 0,
    itemid: 0,
    orderquantity: 0,
    netamount: 0,
    
  });

  const history = useHistory();

  const handleAddOrder = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  } 

  const addOrder = (e) => {
    e.preventDefault();
    let orderData = {
      supplierid: values.supplierid,
      orderid: values.orderid,
      itemid: values.itemid,
      orderquantity: values.orderquantity,
      netamount: values.netamount,
      
    }

    axios.post("http://localhost:8000/order/add-order", orderData)
    .then((response) => {
      console.log(response.data.data);
      alert("Successfull");
      history.push("/OrderTable");
    })
    .catch((error) => {
      console.log(error);
    })
}

  return (
    <div >   
      <div class="form-container-sup">
        <form class="register-form-sup">

        <label className='lble-sup'>Supplier ID</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Supplier ID"
            name="supplierid"
            onChange={handleAddOrder}
            value={values.supplierid}
          />

          <label className='lble-sup'>Order ID</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Order ID"
            name="orderid"
            onChange={handleAddOrder}
            value={values.orderid}
          />

          <label className='lble-sup'>Item Id</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Item Id"
            name="itemid"
            onChange={handleAddOrder}
            value={values.itemid}
          />

          <label className='lble-sup'>Order Quantity</label>
          <input
            class="form-field-sup"
            type="number"
            placeholder="Order Quantity"
            name="orderquantity"
            onChange={handleAddOrder}
            value={values.orderquantity}
          />

          <label className='lble-sup'>Net Amount</label>
          <input
            class="form-field-sup"
            type="text"
            placeholder="Net Amount"
            name="netamount"
            onChange={handleAddOrder}
            value={values.netamount}
          />

          

          <div className="btngroup-sup">
            <button className="form-field cancel" onclick="document.getElementById('myInput').value = ''">
            Reset
            </button>
            <button onClick={addOrder} class="form-field submit-sup" type="submit">
              Submit
            </button>
            
          </div>
        </form>
      </div>
      </div>
  
  );
}

export default Managerorder   ;