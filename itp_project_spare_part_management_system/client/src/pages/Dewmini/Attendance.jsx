import React, { useState } from "react";
import "./empstyle.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import axios from 'axios';

 

function Attendance() {
   
        const [values, setValues] = useState({
          crntdate: "",
          crntTime: "",
          empid: 0,
          
        });
      
        const handleAddData = (e) => {
          const { name, value } = e.target
          setValues({ ...values, [name]: value});
        }             
       
        const addAttendance = (e) => {
          e.preventDefault();
          let AttendanceData = {
            crntdate: values.crntdate,
            crntTime: values.crntTime,
            empid: values.empid,
            }
      
          console.log(AttendanceData);
      
          axios.post("http://localhost:8000/attendance/add-attendance", AttendanceData)
            .then((response) => {
              console.log(response.data.data);
              alert("Successfully Recorded")
            })
            .catch((error) => {
              console.log(error);
              alert("UnSuccessful Attempt")
            })
        }
      
        return (
          <div>
         
            <div class="form-container-emp">
              <form class="register-form1">
              
             
                <input
                  class="form-field"
                  type="date"
                  placeholder="Please enter date today"
                  name="crntdate"
                  onChange={handleAddData}
                  value={values.crntdate}
                />
      
              
                <input
                  class="form-field"
                  type="time"
                  placeholder="Please enter correct time now"
                  name="crntTime"
                  defaultValue="07:30PM"
                  onChange={handleAddData}
                  value={values.crntTime}
                />
      
               
                <input
                  class="form-field"
                  type="text"
                  placeholder="                   Please enter your Employee ID"
                  name="empid"
                  onChange={handleAddData}
                  value={values.empid}
                />
      
                
                
      
      <div className="btngroup">
            <button className="form-field delete" onclick="document.getElementById('myInput').value = ''">
              Reset
            </button>
            <button onClick={addAttendance}  class="form-field submit" type = "submit"  >
              Submit
            </button>
          
                
                  
                </div>
              </form>
              
            </div>
            </div>
          
        );
      }
      
      
      
      
export default Attendance

    