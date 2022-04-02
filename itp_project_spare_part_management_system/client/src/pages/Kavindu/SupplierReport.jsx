import React, {useState, useEffect} from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import "./style.css";
import logo from "../../assets/01.png"

export default function SupplierReport() {

    const [supplier, setsupplier] = useState([]);

  const getsupplier = () => {
    axios
      .get("http://localhost:8000/supplier/get-supplier")
      .then((res) => {
        console.log(res.data.data);
        setsupplier(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getsupplier();
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
                       <th>Supplier Id</th>
                       <th>Name</th>
                       <th>NIC</th>
                       <th>Address</th>
                       <th>Email Address</th>
                       <th>Primary Phone</th>
                       <th>Country</th>
                       <th>Company Name</th>
                     
                       
                                        
                    </tr>
  {supplier.map((view)=>(
                 <tr>
                    <td>{view.supplierId}</td>
                    <td>{view.supplierName}</td>
                    <td>{view.nic}</td>
                    <td>{view.address}</td>
                    <td>{view.email}</td>
                    <td>{view.phoneNum}</td>
                    <td>{view.country}</td>
                    <td>{view.companyName}</td>
               
                </tr>
                ))}
               
             

             </table>
             </PDFExport>
    </div>
  );
}
