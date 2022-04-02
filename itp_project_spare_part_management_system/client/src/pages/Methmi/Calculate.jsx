import React, { useState } from "react";
import "./paystyle.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import axios from 'axios';

function Calculate() {
  const [values, setValues] = useState({
    Employeeid: "",
    Attendence: 0,
    Salary: 0,
    OTHourse:0,
    OTPayment: 0,
    Totalsalary: 0,
  });
  
  const handleaddsalary = (e) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value});
  } 

   
  const addCalculateSalary = (e) => {
    e.preventDefault();
    let calculatesalaryData = {
      Employeeid: values.Employeeid,
      Attendence: values.Attendence,
      Salary: values.Salary,
      OTHourse: values.OTHourse,
      OTPayment: values.OTPayment,
      Totalsalary: values.Totalsalary,
     
    }

      console.log(calculatesalaryData);

      axios.post("http://localhost:8000/calculateSalary/add-calculateSalary", calculatesalaryData )
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
        <label className='lbl-payment'>Employee id:</label>
          <input
            class="form-field-payment"
            type="text"
            placeholder="Employeeid"
            name="Employeeid"
            onChange={handleaddsalary}
            value={values.EmployeeId}
          />
          <label className='lbl'>Attendence:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Attendence"
            name="Attendence"
            onChange={handleaddsalary}
            value={values.Attendence}
          />
          <label className='lbl-payment'>Salary:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="Salary"
            name="Salary"
            onChange={handleaddsalary }
            value={values.Salary}
          />
          <label className='lbl-payment'>OTHourse:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="OTHourse"
            name="OTHourse"
            onChange={handleaddsalary }
            value={values.OTHourse}
          />
        

          <label className='lbl-payment'>OTPayment:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder="OTPayment"
            name="OTPayment"
            onChange={handleaddsalary }
            value={values.OTPayment}
          />

          <label className='lbl-payment'> Totalsalary:</label>
          <input
            class="form-field-payment"
            type="number"
            placeholder=" Totalsalary"
            name="Totalsalary"
            onChange={handleaddsalary }
            value={values.Totalsalary}
          />

        

          <div className="btngroup-payment">
            
          <button  class="form-field submit" to="/Calculatetable" onClick={addCalculateSalary} type="submit"  href="/Calculatetable"  >
              Sumbit
            </button>
          </div>
        </form>
      </div>
    </div>
    
  );
}

export default Calculate;
