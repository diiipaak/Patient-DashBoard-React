import React, { useEffect, useState } from "react";
import PatientCard from "./components/PatientCard";
import PatientDetails from "./components/PatientDetails";
import  {ChartSection}  from "./components/ChartSection";
import LabReportsList from "./components/LabReportsList";
import DiagnosticList from "./components/DiagnosticList";
import Navbar from "./components/Navbar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./App.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const App = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const getPatients = async () => {
    const response = await fetch(
      "https://fedskillstest.coalitiontechnologies.workers.dev",
      {
        method: "GET",
        headers: {
          Authorization: "Basic " + btoa("coalition:skills-test"),
        },
      }
    );
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const fetchData = async () => {
      const patientsData = await getPatients();
      moveJessicaToFirst(patientsData);
    };
    fetchData();
  }, []);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredPatients(patients);
      return;
    }
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  const moveJessicaToFirst = (patients) => {
    const updatedPatients = [...patients];
    const jessicaIndex = updatedPatients.findIndex(
      (patient) => patient.name === "Jessica Taylor"
    );

    if (jessicaIndex !== -1 && jessicaIndex !== 0) {
      const jessica = updatedPatients.splice(jessicaIndex, 1)[0];
      updatedPatients.unshift(jessica);
    }

    setPatients(updatedPatients);
    setFilteredPatients(updatedPatients);

    if (updatedPatients.length > 0) {
      setSelectedPatient(updatedPatients[0]);
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ display: "flex", width: "100%" }}>
        {/* Patient List */}
        <div
          style={{
            borderRadius: "10px",
            padding: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
            border: "1px solid #ccc",
            width: "25%",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <h3 style={{ margin: 1 }}>Patients</h3>
            <input
              type="text"
              placeholder="Search by name..."
              style={{
                width: "100px",
                padding: "5px",
                borderRadius: "7px",
                border: "1px solid #ccc",
              }}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
              <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
            </svg>
          </div>

          <div style={{ maxHeight: "1200px", overflowY: "auto" }}>
            {filteredPatients.map((patient) => (
              <PatientCard
                key={patient.name}
                patient={patient}
                onClick={() => setSelectedPatient(patient)}
                selectedPatient={selectedPatient}
              />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div style={{ width: "60%", padding: "10px" }}>
          {selectedPatient && (
            <>
              <ChartSection
                diagnosisHistory={selectedPatient.diagnosis_history}
                selectedPatient={selectedPatient}
              />            
              <DiagnosticList diagnosticList={selectedPatient.diagnostic_list} />
            </>
          )}
        </div>

        {/* Patient Details & Lab Reports */}
        <div style={{ width: "35%", paddingRight: "10px" }}>
          {selectedPatient && <PatientDetails selectedPatient={selectedPatient} />}
          {selectedPatient && <LabReportsList selectedPatient={selectedPatient} />}
        </div>
      </div>
    </>
  );
};

export default App;
