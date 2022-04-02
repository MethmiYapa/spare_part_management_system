import React, {useState, useEffect} from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import "./empstyle.css";
import logo from "../../assets/01.png"

export default function EmployeeReport() {

    const [employee, setemployee] = useState([]);

  const getemployee = () => {
    axios
      .get("http://localhost:8000/employee/get-employee")
      .then((res) => {
        console.log(res.data.data);
        setemployee(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getemployee();
  });

  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if(pdfExportComponent.current){
        pdfExportComponent.current.save();
    }
};


  return( 

    <div>
       <button className="Reportbutton" onClick={exportPDFWithComponent}>Generate Report</button>
         <PDFExport ref={pdfExportComponent} paperSize="A2">

         <img src={logo} alt="" className='dash'/>
                  <table class="table-emp">

                    <tr>
                       <th>Employee Id</th>
                       <th>Employee Name</th>
                       <th>NIC</th>
                       <th>Address</th>
                       <th>Email Address</th>
                       <th>Primary Phone</th>
                       <th>Employee Type</th>
                       <th>Hour Rate</th>
                       <th>Annual leaves</th>
                     
                       
                                        
                    </tr>
  {employee.map((view)=>(
                 <tr>
                    <td>{view.empid}</td>
                    <td>{view.empname}</td>
                    <td>{view.NIC}</td>
                    <td>{view.address}</td>
                    <td>{view.email}</td>
                    <td>{view.phone}</td>
                    <td>{view.type}</td>
                    <td>{view.hrRate}</td>
                    <td>{view.leaves}</td>
               
                </tr>
                ))}
               
             

             </table>
             </PDFExport>
    </div>
  );
}
