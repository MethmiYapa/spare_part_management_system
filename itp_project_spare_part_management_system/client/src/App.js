import React from "react";
import "./App.css";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/adminPanel/AdminPanel';
import Dashboard from "./pages/Dashboard";
import Payment from "./pages/Methmi/Payment";
import Employee from "./pages/Dewmini/Employee";
import Inventory from "./pages/Shalitha/Inventory";
import Sales from "./pages/Devshan/Bill";
import Customer from "./pages/Pethmi/Customer";
import Supplier from "./pages/Kavindu/Supplier";
import Delivery from "./pages/Hiran/Delivery";
import Inventorymanage from "./pages/Shalitha/Inventorymanage";
import Suppliermanage from "./pages/Kavindu/Suppliermanage";
import Managecustomer from "./pages/Pethmi/Managecustomer";
import DeliveryManage from "./pages/Hiran/DeliveryManage";
import DelVehicleInfo from "./pages/Hiran/DelVehicleInfo";
import Bill from "./pages/Devshan/Bill";
import InventoryMain from "./pages/Shalitha/InventoryMain";
import Landingpage from "./pages/Pethmi/Landingpage";
import Manage from "./pages/Methmi/Manage";
import Calculate from "./pages/Methmi/Calculate";
import SupplierMain from "./pages/Kavindu/SupplierMain";
import ManageEmployee from "./pages/Dewmini/ManageEmployee";
import Paymentlandingpage from "./pages/Methmi/Paymentlandingpage";
import SalesLanding from "./pages/Devshan/SalesLanding";
import ManageBill from "./pages/Devshan/ManageBill";
import leaveManagement from "./pages/Dewmini/LeaveManagement";
import employeeLandingpage from "./pages/Dewmini/EmployeeLandingpage";
import Managerorder from "./pages/Kavindu/Managerorder";
import DeliveryLandingPage from "./pages/Hiran/DeliveryLandingPage";
import SalesViewReport from "./pages/Devshan/SalesViewReport";
import SupViewReport from "./pages/Kavindu/SupViewReport";
import empViewReport from "./pages/Dewmini/EmpViewReport";
import attendance from "./pages/Dewmini/Attendance";
import Viewreport from "./pages/Pethmi/Viewreport";
import Inventoryreport from "./pages/Shalitha/Inventoryreport";
import InventoryTable from "./pages/Shalitha/InventoryTable";
import SupTable from "./pages/Kavindu/SupTable";
import Paymentviewreport from "./pages/Methmi/Paymentviewreport";
import OrderTable from "./pages/Kavindu/OrderTable"
import BillThreeMonth from "./pages/Devshan/BillThreeMonth";
import Paymenttable from "./pages/Methmi/Paymenttable";
import Calculatetable from "./pages/Methmi/Calculatetable";
import DeliveryTable from "./pages/Hiran/DeliveryTable"
import EmpDetailTable from "./pages/Dewmini/EmpDetailTable";
import LeaveDetailTable from "./pages/Dewmini/LeaveDetaiTable";
import AttendanceRecord from "./pages/Dewmini/AttendanceRecord";
import SupplierOneMonth from "./pages/Kavindu/SupplierOneMonth";
import SupplierReport from "./pages/Kavindu/SupplierReport";
import EmployeeReport from "./pages/Dewmini/EmployeeReport";
import EmployeeOneMonth from "./pages/Dewmini/EmployeeOneMonth";


import CustomerTable from "./pages/Pethmi/CustomerTable";
import CustomerReport from "./pages/Pethmi/CustomerReport";

import InsertpaymentReport from "./pages/Methmi/InsertpaymentReport";
import CalculateReport from "./pages/Methmi/CalculateReport"; >>>









function App() {
    return ( <
        >

        <
        div className = "App" >
        <
        BrowserRouter >
        <
        section >
        <
        Switch >

        <
        AdminPanel >
        <
        Route path = "/inventory"
        component = { Inventory }
        /> <
        Route path = "/Inventorymanage/:id"
        component = { Inventorymanage }
        />  <
        Route path = "/Inventoryreport"
        component = { Inventoryreport }
        /> <
        Route path = "/InventoryTable"
        component = { InventoryTable }
        /> <
        Route path = "/InventoryMain"
        component = { InventoryMain }
        />  <
        Route path = "/supplier"
        component = { Supplier }
        />  <
        Route path = "/Suppliermanage/:id"
        component = { Suppliermanage }
        /> <
        Route path = "/SupplierMain"
        component = { SupplierMain }
        /> <
        Route path = "/SupViewReport"
        component = { SupViewReport }
        /> <
        Route path = "/Managerorder"
        component = { Managerorder }
        /> <
        Route path = "/"
        exact component = { Dashboard }
        /> <
        Route path = "/customer"
        component = { Customer }
        /> <
        Route path = "/delivery"
        component = { Delivery }
        />  <
        Route path = "/employee"
        component = { Employee }
        />        <
        Route path = "/payment"
        component = { Payment }
        />  <
        Route path = "/sales"
        component = { Sales }
        />          <
        Route path = "/Managecustomer/:id"
        component = { Managecustomer }
        />         <
        Route path = "/DelVehicleInfo"
        component = { DelVehicleInfo }
        /> <
        Route path = "/ManageBill"
        component = { ManageBill }
        /> <
        Route path = "/Manage"
        component = { Manage }
        />  <
        Route path = "/Calculate"
        component = { Calculate }
        />  <
        Route path = "/DeliveryManage/:id"
        component = { DeliveryManage }
        />  <
        Route path = "/Bill"
        component = { Bill }
        />   <
        Route path = "/Landingpage"
        component = { Landingpage }
        /> <
        Route path = "/ManageEmployee/:id"
        component = { ManageEmployee }
        />  

        <
        Route path = "/ManageEmployeee"
        component = { ManageEmployee }
        />   <
        Route path = "/Paymentlandingpage"
        component = { Paymentlandingpage }
        /> <
        Route path = "/EmployeeLandingpage"
        component = { employeeLandingpage }
        /> <
        Route path = "/LeaveManagement"
        component = { leaveManagement }
        /> <
        Route path = "/SalesLanding"
        component = { SalesLanding }
        />   <
        Route path = "/DeliveryLandingPage"
        component = { DeliveryLandingPage }
        /> <
        Route path = "/SalesViewReport"
        component = { SalesViewReport }
        />   <
        Route path = "/EmpViewReport"
        component = { empViewReport }
        /> <
        Route path = "/Attendance"
        component = { attendance }
        /> <
        Route path = "/Viewreport"
        component = { Viewreport }
        /> <
        Route path = "/SupTable"
        component = { SupTable }
        /> <
        Route path = "/OrderTable"
        component = { OrderTable }
        />

        <
        Route path = "/Paymentviewreport"
        component = { Paymentviewreport }
        /> <
        Route path = "/DeliveryTable"
        component = { DeliveryTable }
        />




        <
        Route path = "/BillThreeMonth"
        component = { BillThreeMonth }
        />

        <
        Route path = "/CustomerTable"
        component = { CustomerTable }
        /> <
        Route path = "/Paymenttable"
        component = { Paymenttable }
        /> <
        Route path = "/Calculatetable"
        component = { Calculatetable }
        /> <
        Route path = "/CustomerReport"
        component = { CustomerReport }
        />

        <
        Route path = "/EmployeeReport"
        component = { EmployeeReport }
        /> <
        Route path = "/EmployeeOneMonth"
        component = { EmployeeOneMonth }
        /> <
        Route path = "/InsertpaymentReport"
        component = { InsertpaymentReport }
        /> <
        Route path = "/CalculateReport"
        component = { CalculateReport }
        /> < /
        AdminPanel >

        <
        /Switch> < /
        section > <
        /BrowserRouter> < /
        div >

        <
        />
    );
}

export default App;