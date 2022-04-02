import React, {useState, useEffect} from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import "./paystyle.css";
import logo from "../../assets/01.png"

export default function CalculateReport() {

    const [calculateSalary, setcalculateSalary] = useState([]);

  const getcalculateSalary = () => {
    axios
      .get("http://localhost:8000/calculateSalary/add-calculateSalary")
      .then((res) => {
        console.log(res.data.data);
        setcalculateSalary(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getcalculateSalary();
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
                  <table class="table-sup">

                    <tr>
                    <th>Employeeid</th>
                    <th>Attendence</th>
                    <th>Salary</th>
                    <th>OTHourse</th>
                    <th>OTPayment</th>
                    <th>Totalsalary</th>
                     
                       
                                        
                    </tr>
  {calculateSalary.map((view)=>(
                 <tr>
                    <td>{view.Employeeid}</td>
                    <td>{view.Attendence}</td>
                    <td>{view.Salary}</td>
                    <td>{view.OTHourse}</td>
                    <td>{view.OTPayment}</td>
                    <td>{view.Totalsalary}</td>
               
                </tr>
                ))}
               
             

             </table>
             </PDFExport>
    </div>
  );
}