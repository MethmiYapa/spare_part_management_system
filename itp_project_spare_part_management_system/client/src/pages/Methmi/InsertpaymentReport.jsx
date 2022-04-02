import React, {useState, useEffect} from "react";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import "./paystyle.css";
import logo from "../../assets/01.png"

export default function InsertpaymentReport() {

    const [insertpayment, setinsertpayment] = useState([]);

  const getinsertpayment = () => {
    axios
      .get("http://localhost:8000/insertpayment/get-insertpayment")
      .then((res) => {
        console.log(res.data.data);
        setinsertpayment(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getinsertpayment();
  });

  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if(pdfExportComponent.current){
        pdfExportComponent.current.save();
    }
};


  return( 

    <div>
       <button className="Reportbutton" onClick={exportPDFWithComponent}>Download as a pdf</button>
         <PDFExport ref={pdfExportComponent} paperSize="A2">

         <img src={logo} alt="" className='dash'/>
                  <table class="table-sup">

                    <tr>
                    <th>Paymentid</th>
                    <th>BillType</th>
                    <th>BillDate</th>
                    <th> BillAmount</th>
                    <th>Checkedby</th>
                     
                       
                                        
                    </tr>
  {insertpayment.map((view)=>(
                 <tr>
                    <td>{view.Paymentid}</td>
                    <td>{view.BillType}</td>
                    <td>{view.BillDate}</td>
                    <td>{view.BillAmount}</td>
                    <td>{view.Checkedby}</td>
               
               
                </tr>
                ))}
               
             

             </table>
             </PDFExport>
    </div>
  );
}
