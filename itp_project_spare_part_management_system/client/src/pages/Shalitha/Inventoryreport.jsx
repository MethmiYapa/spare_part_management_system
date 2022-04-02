import React, {useState, useEffect} from "react";
import "./Invstyle.css";
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';
import axios from 'axios';
import logo from "../../assets/01.png"

function Inventoryreport() {

    
    const [inventory, setinventory] = useState([]);

    const getinventory=()=>{
        axios.get("http://localhost:8000/inventory/get-inventory")
         .then((res)=>{
           console.log(res.data.data);
           setinventory(res.data.data);
         })
         .catch((error)=>{
           console.log(error);
         })
}

useEffect(()=>{
    getinventory();
   })


  const pdfExportComponent = React.useRef(null);

  const exportPDFWithComponent = () => {
    if(pdfExportComponent.current){
        pdfExportComponent.current.save();
    }
};

     
   return (
      
       <div>

           <button className="Reportbutton"
                   onClick={exportPDFWithComponent}> Generate Report </button>
                <PDFExport ref={pdfExportComponent} paperSize="A2">

               <img src={logo} alt="" className='inv-dash'/>

                     <div class="tablealign-inv">
                            <table class="table-Inv">

                                 <tr>
                                   <th>Item ID</th>
                                   <th>Item Name</th>
                                   <th>Brand</th>
                                   <th>Quantity</th>
                                   <th>Buying Price</th>
                                   <th>Selling Price</th>
                                                 
                                  </tr>

                             {inventory.map((view)=>(
                                   <tr>
                                      <td>{view.itemid}</td>
                                      <td>{view.itemname}</td>
                                      <td>{view.brand}</td>
                                      <td>{view.quantity}</td>
                                      <td>{view.buyingprice}</td>
                                      <td>{view.sellingprice}</td>
                                   </tr>
                                ))}
                          </table>
                     </div>
            </PDFExport>
        </div>
        
    )
}
export default Inventoryreport