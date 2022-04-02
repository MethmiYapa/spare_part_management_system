import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";



export const SidebarData = [{
        title: "DASHBOARD",
        path: "/",
        icon: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "CUSTOMER MANAGEMENT",
        path: "/landingpage",
        icon: < IoIcons.IoIosPaper / > ,
        cName: "nav-text",
    },
    {
        title: "DELIVERY MANAGEMENT",
        path: "/DeliveryLandingPage",
        icon: < FaIcons.FaCartPlus / > ,
        cName: "nav-text",
    },
    {
        title: "INVENTORY MANAGEMENT",
        path: "/InventoryMain",
        icon: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "PAYMENT MANAGEMENT",
        path: "/Paymentlandingpage",
        icon: < IoIcons.IoIosPaper / > ,
        cName: "nav-text",
    },
    {
        title: "EMPLOYEE MANAGEMENT",
        path: "/EmployeeLandingpage",
        icon: < FaIcons.FaCartPlus / > ,
        cName: "nav-text",
    },
    {
        title: "SUPPLIER MANAGEMENT",
        path: "/supplierMain",
        icon: < AiIcons.AiFillHome / > ,
        cName: "nav-text",
    },
    {
        title: "SALES MANAGEMENT",
        path: "/SalesLanding",
        icon: < IoIcons.IoIosPaper / > ,
        cName: "nav-text",
    },

];