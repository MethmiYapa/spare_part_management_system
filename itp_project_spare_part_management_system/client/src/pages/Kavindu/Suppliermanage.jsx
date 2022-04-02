import React, { useEffect, useState } from "react";
import "./style.css";
import logo from "../../assets/logo.png";
import axios from 'axios';
import { useHistory, useParams } from "react-router";
import { FaPhone } from "react-icons/fa";

function Suppliermanage() {

  const history = useHistory();

  const [supplierid, setsupplierid] = useState(0);
  const [name, setname] = useState('');
  const [nic, setnic] = useState(0);
  const [address, setaddress] = useState('');
  const [emailaddress, setemailaddress] = useState('');
  const [primaryphone, setprimaryphone] = useState(0);
  const [country, setcountry] = useState('');
  const [companyname, setcompanyname] = useState('');


  const params = useParams();

  const getSelectedSupplier = () => {
    axios.get(`http://localhost:8000/supplier/get-supplier/${params.id}`)
      .then((response) => {
        console.log(response.data.data);
      //  setValues(response.data.data);
        setsupplierid(response.data.data.supplierId);
        setname(response.data.data.supplierName);
        setnic(response.data.data.nic);
        setaddress(response.data.data.address);
        setemailaddress(response.data.data.email);
        setprimaryphone(response.data.data.phoneNum);
        setcountry(response.data.data.country);
        setcompanyname(response.data.data.companyName);
      })
  }

  useEffect(() => {
    getSelectedSupplier();
  }, []);

  const updateSupplierDetails = (e) => {
    e.preventDefault();

    let updateData = {
      supplierId: supplierid,
      supplierName: name,
      nic:nic,
      address:address,
      email:emailaddress,
      phoneNum:primaryphone,
      country:country,
      companyName:companyname,
    }

    axios.put(`http://localhost:8000/supplier/update-supplier/${params.id}`,updateData)
      .then((response) => {
        console.log("updated successfully");
        history.push("/SupTable");
      })
      .catch((error) => {
        console.log(error);
      })
  }


  return (
    <div>
    <div class="form-container-sup">
      <form class="register-form-sup">

      <label className='lble-sup'>Supplier ID</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Supplier ID"
          name="supplierid"
          onChange={(e) => setsupplierid(e.target.value)}
          value={supplierid}
        />

        <label className='lble-sup'>Name</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Name"
          name="name"
          onChange={(e) => setname(e.target.value)}
          value={name}
        />

        <label className='lble-sup'>Nic</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Nic"
          name="nic"
          onChange={(e) => setnic(e.target.value)}
          value={nic}
        />

        <label className='lble-sup'>Address</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Address"
          name="address"
          onChange={(e) => setaddress(e.target.value)}
          value={address}
        />

        <label className='lble-sup'>Email Address</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Email Address"
          name="emailaddress"
          onChange={(e) => setemailaddress(e.target.value)}
          value={emailaddress}
        />

        <label className='lble-sup'>Primary Phone</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Primary Phone"
          name="primaryphone"
          onChange={(e) => setprimaryphone(e.target.value)}
          value={primaryphone}
        />

        <label className='lble-sup'>Country</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Country"
          name="country"
          onChange={(e) => setcountry(e.target.value)}
          value={country}
        />

        <label className='lble-sup'>Company Name</label>
        <input
          class="form-field-sup"
          type="text"
          placeholder="Company Name"
          name="companyname"
          onChange={(e) => setcompanyname(e.target.value)}
          value={companyname}
        />

        <div className="btngroup-sup">
          <button className="form-field cancel" onclick="document.getElementById('myInput').value = ''">
          Reset
          </button>
          <button class="form-field submit-sup" onClick={updateSupplierDetails}>
            Update
          </button>
        </div>
      </form>
    </div>
    </div>
  
  );
}

export default Suppliermanage;
