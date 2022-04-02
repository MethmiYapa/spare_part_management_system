import React, { useEffect, useState } from "react";
import "./Invstyle.css";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory, useParams } from "react-router";


function Inventorymanage() {
  
  const history = useHistory();

  const [itemid, setitemid] = useState('');
  const [itemname, setitemname] = useState('');
  const [brand, setbrand] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [buyingprice, setbuyingprice] = useState(0);
  const [sellingprice, setsellingprice] = useState(0);


  const params = useParams();

  const getSelectedInventory = () => {
    axios.get(`http://localhost:8000/inventory/get-inventory/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
      //  setValues(response.data.data);
      setitemid(response.data.data.itemid);
      setitemname(response.data.data.itemname);
      setbrand(response.data.data.brand);
      setquantity(response.data.data.quantity);
      setbuyingprice(response.data.data.buyingprice);
      setsellingprice(response.data.data.sellingprice);
  
      })
  }

  useEffect(() => {
    getSelectedInventory();
  }, []);

  const updateInventoryDetails = (e) => {
    e.preventDefault();

    let updateData = {
      itemid: itemid,
      itemname: itemname,
      brand: brand,
      quantity: quantity,
      buyingprice: buyingprice,
      sellingprice: sellingprice,
    }

    axios.put(`http://localhost:8000/inventory/update-inventory/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
        history.push("/InventoryTable");
      })
      .catch((error) => {
        console.log(error);
      })
  }
  return (
    <div className="Invmain">
         <h2 class="title-inv">Edit Item</h2>
      <div class="form-container-inv">        
    
       <form class="Item-form-inv">
         
        <label className='lbl-inv'>Item ID</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Item ID"
            name="itemid"
            onChange={(e) => setitemid(e.target.value)}
            value={itemid}
          />

           <label className='lbl-inv'>Item Name</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="itemname"
            name="itemname"
            onChange={(e) => setitemname(e.target.value)}
            value={itemname}
          />
         

       <label className='lbl-inv'>Brand</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Brand"
            name="brand"
            onChange={(e) => setbrand(e.target.value)}
            value={brand}
          />

        <label className='lbl-inv'> Quantity </label>
          <input
            class="form-field-inv"
            type="number"
            placeholder="Quantity"
            name="quantity"
            onChange={(e) => setquantity(e.target.value)}
            value={quantity}
          />
    
       <label className='lbl-inv'>Billing Price</label>
          <input
            class="form-field-inv"
            type="number"
            placeholder="Buying Price"
            name="buyingprice"
            onChange={(e) => setbuyingprice(e.target.value)}
            value={buyingprice}
          />
        <label className='lbl-inv'>Selling Price</label>
          <input
            class="form-field-inv"
            type="text"
            placeholder="Selling Price"
            name="sellingprice"
            onChange={(e) => setsellingprice(e.target.value)}
            value={sellingprice}
          />

  {/* Reset Button */}
          <div className="btngroup-inv">
            <button className="form-field cancel-inv" onclick="document.getElementById('myInput').value = ''">
              Reset
              </button>
    {/* Submit Button */}
              <button class="form-field submit-inv" onClick={updateInventoryDetails}>
                    Submit
             </button>
              
          </div>
        </form>
      </div>
    </div>
  );
}


export default Inventorymanage;