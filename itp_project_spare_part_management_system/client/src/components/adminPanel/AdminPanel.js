import React from 'react';
import './admin.css';
import logo from '../../assets/01.png';


export default function AdminPanel({ children }) {
    return (
        <div>
        <input type="checkbox" name="" id="nav-toggle" />
        <div class="sidebar">
          <div class="sidebar-brand">
            <h2>
              <span class="lab la-accusoft"></span> <span>CarGrage</span>
            </h2>
          </div>
          <div class="sidebar-menu">
            <ul>
              
              <li>
                <a href="/" class="active">
                    {" "}
                    {}    
                    <span class="fas fa-align-left"></span>
                  <span>Dashboard</span>
                </a>
              </li>

              <li>
                <a href="/landingpage">
                  {" "}
                  {}
                  <span class="las la-clipboard-list"></span>
                  <span>CUSTOMER MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/DeliveryLandingPage">
                  {" "}
                  {}
                  <span class="las la-clipboard-list"></span>
                  <span>DELIVERY MANAGEMENT</span>
                </a>
              </li>
              
              <li>
                <a href="/InventoryMain">
                  {" "}
                  {/* icons */}
                  <span class="las la-clipboard-list"></span>
                  <span>INVENTORY MANAGEMENT</span>
                </a>
              </li>
              <li>
                <a href="/Paymentlandingpage">
                  {" "}
                {/* icons */}
                <span class="las la-clipboard-list"></span>
                  <span>PAYMENT MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/EmployeeLandingpage">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>EMPLOYEE MANAGEMENT</span>
                </a>
              </li>

              <li>
                <a href="/SupplierMain">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>SUPPLIER MANAGEMENT</span>
                </a>
              </li>     

              <li>
                <a href="/SalesLanding">
                  {" "}
                  <span class="las la-clipboard-list"></span>
                  <span>SALES MANAGEMENT</span>
                </a>
              </li> 

            </ul>
          </div>
        </div>
        <div class="main-content">
        <header>
        <h2>
            <label for="nav-toggle">
              <span class="las la-bars"></span>
            </label>
            Dashboard
          </h2>
 
          <img src={logo} alt="" className="companylogo"/>

        </header>
          <main>
              {children}
          </main>
        </div>
      </div>
    )
}
