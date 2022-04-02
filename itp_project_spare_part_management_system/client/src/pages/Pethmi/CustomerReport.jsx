import React, {useState, useEffect} from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import "./custstyle.css";
import logo from "../../assets/01.png"

export default function CustomerReport() {

    const [addcus, setaddcus] = useState([]);

  const getAddcus = () => {
    axios
      .get("http://localhost:8000/addcus/get-addcus")
      .then((res) => {
        console.log(res.data.data);
        setaddcus(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAddcus();
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
                  <table class="table-cus">

                    <tr>
                       <th>Customer ID</th>
                       <th>Full Name</th>
                       <th>Primary Phone</th>
                       <th>Street Address</th>
                       <th>Date of Birth</th>
                       <th>Email Address</th>
                      
                       
                                        
                    </tr>
  {addcus.map((view)=>(
                 <tr>
                    <td>{view.customerid}</td>
                    <td>{view.fullname}</td>
                    <td>{view.primaryphone}</td>
                    <td>{view.streetaddress}</td>
                    <td>{view.dateofbirth}</td>
                    <td>{view.emailaddress}</td>
                </tr>
                ))}
               
             

             </table>
             </PDFExport>
    </div>
  );
}
