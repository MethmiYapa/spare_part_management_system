import React, { useState } from "react";
import "./Invstyle.css";
import axios from 'axios';


function Inventory() {
  const [values, setValues] = useState({
    itemid: 0,
    itemname: "",
    brand: "",
    quantity: 0,
    buyingprice: 0,
    sellingprice: 0,
  });

  const handleAddData = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  }  

  const addInventory = (e) => {
    e.preventDefault();
    let inventoryData = {
      itemid: values.itemid,
      itemname: values.itemname,
      brand: values.brand,
      quantity: values.quantity,
      buyingprice: values.buyingprice,
      sellingprice: values.sellingprice,
    }

    console.log(inventoryData);
           
  axios.post("http://localhost:8000/inventory/add-inventory", inventoryData )
      .then((response) => {
        console.log(response.data.data);
      })
      
      .catch((error) => {
        console.log(error);
      })

    }
  

  return (
    
     <div>
   
              {/* <h2 class="title-inv">Add Item</h2> */}
  
    <div class="form-container-inv">
        
        <form class="Item-form-inv">
         
        <label className='lbl-inv'>Item ID</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Item ID"
            name="itemid"
            onChange={handleAddData}
            value={values.itemid}
          />

           <label className='lbl-inv'>Item Name</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemname"
            name="itemname"
            onChange={handleAddData}
            value={values.itemname}
          />
         

       <label className='lbl'>Brand</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={handleAddData}
            value={values.brand}
          />

        <label className='lbl-inv'> Quantity </label>
          <input
            class="form-field-inv"
            type="number"
            placeholder="Quantity"
            name="quantity"
            onChange={handleAddData}
            value={values.quantity}
          />
    
       <label className='lbl-inv'>Billing Price</label>
          <input
            class="form-field-inv"
            type="number"
            placeholder="Buying Price"
            name="buyingprice"
            onChange={handleAddData}
            value={values.buyingprice}
          />
        <label className='lbl-inv'>Selling Price</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Selling Price"
            name="sellingprice"
            onChange={handleAddData}
            value={values.sellingprice}
          />

          <div className="btngroup-inv">
            
              <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
                 Clear
              </button>
            
              <button class="form-field submit-inv"  onClick={addInventory} type="submit">
                    Submit
             </button>
               
          </div>
        </form>
      </div>
     
    </div>
  );
}


export default Inventory;
