import React from "react";

const Navbar = () => (
  <nav
    style={{
      backgroundColor: "white",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      borderRadius: "50px",
      color: "black",
      padding: "10px 30px",
      display: "flex",
      alignItems: "center",
      margin: "10px",
    }}
  >
    {/* Logo Section */}
    <div style={{ display: "flex", alignItems: "center", marginRight: "auto" }}>
      <img
        src="1.png"
        alt="Logo"
        style={{ width: "200px", height: "50px", marginRight: "10px" }}
      />
    </div>

    {/* Navigation Links */}
    <div style={{ display: "flex", justifyContent: "center", flex: 1 }}>
      <a
        href="#Overview"
        style={{
          color: "black",
          margin: "0 20px",
          textDecoration: "none",
          fontSize: "16px",
          padding: "10px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="9.png"
          alt="Overview Icon"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        Overview
      </a>
      <a
        href="#Patients"
        style={{
          color: "black",
          margin: "0 20px",
          textDecoration: "none",
          fontSize: "16px",
          backgroundColor: "#01F0D0",
          padding: "10px",
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="5.png"
          alt="Patients Icon"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        Patients
      </a>
      <a
        href="#Message"
        style={{
          color: "black",
          margin: "0 20px",
          padding: "10px",
          textDecoration: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="7.png"
          alt="Message Icon"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        Message
      </a>
      <a
        href="#Transactions"
        style={{
          color: "black",
          margin: "0 20px",
          padding: "10px",
          textDecoration: "none",
          fontSize: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src="8.png"
          alt="Transactions Icon"
          style={{ width: "20px", height: "20px", marginRight: "5px" }}
        />
        Transactions
      </a>
    </div>

    {/* Profile Section */}
    <div style={{ display: "flex", alignItems: "center" }}>
      <img
        src="2.png"
        alt="Profile Picture"
        style={{
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          marginRight: "10px",
        }}
      />
      <div style={{ marginRight: "10px", textAlign: "right" }}>
        <div style={{ fontSize: "16px", fontWeight: "bold", color: "black" }}>
          Dr. Jose Simmons
        </div>
        <div style={{ fontSize: "14px", color: "gray" }}>
          General Practitioner
        </div>
      </div>
      <span
        style={{
          color: "gray",
          fontSize: "20px",
          margin: "0 10px",
          fontWeight: "bold",
        }}
      >
        |
      </span>
      <img
        src="3.png"
        alt="Settings Icon"
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
      />
      <img
        src="4.png"
        alt="Logout Icon"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  </nav>
);

export default Navbar;
