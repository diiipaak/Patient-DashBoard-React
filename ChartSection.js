import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import VitalCard from "./VitalCard"; 

export const ChartSection = ({ selectedPatient, diagnosisHistory }) => {
  const [timeFilter, setTimeFilter] = useState("last6months");

  const handleTimeFilterChange = (e) => {
    setTimeFilter(e.target.value);
  };

  const filteredDiagnosisHistory =
    timeFilter === "last6months"
      ? diagnosisHistory.slice(-6)
      : diagnosisHistory;

  const systolicData = filteredDiagnosisHistory.map(
    (entry) => entry.blood_pressure.systolic.value
  );
  const diastolicData = filteredDiagnosisHistory.map(
    (entry) => entry.blood_pressure.diastolic.value
  );
  const labels = filteredDiagnosisHistory.map(
    (entry) => `${entry.month} ${entry.year}`
  );

  const avgSystolic =
    systolicData.reduce((a, b) => a + b, 0) / systolicData.length;
  const avgDiastolic =
    diastolicData.reduce((a, b) => a + b, 0) / diastolicData.length;

  const systolicChange =
    systolicData[systolicData.length - 1] > systolicData[systolicData.length - 2]
      ? "▲ Higher than previous"
      : systolicData[systolicData.length - 1] < systolicData[systolicData.length - 2]
      ? "▼ Lower than previous"
      : "▶ Same as previous";

  const diastolicChange =
    diastolicData[diastolicData.length - 1] >
    diastolicData[diastolicData.length - 2]
      ? "▲ Higher than previous"
      : diastolicData[diastolicData.length - 1] <
        diastolicData[diastolicData.length - 2]
      ? "▼ Lower than previous"
      : "▶ Same as previous";

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        fill: false,
        tension: 0.4,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "rgba(54, 162, 235, 1)",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: false,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Blood Pressure",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month/Year",
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        title: {
          display: true,
          text: "Blood Pressure (mmHg)",
        },
      },
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <div style={{ display: "flex", justifyContent: "flex-start", height: "60px" }}>
        <h2 style={{ textAlign: "left", paddingLeft: "15px" }}>Diagnosis History</h2>
      </div>

      <div
        style={{
          borderRadius: "10px",
          border: "solid 5px rgb(244, 240, 254)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          display: "flex",
          width: "96%",
          alignSelf: "center",
          backgroundColor: "rgb(244, 240, 254)",
        }}
      >
        <div style={{ display: "flex", backgroundColor: "rgb(244, 240, 254)", width: "75%" }}>
          <Line data={data} options={options} height={330} />
        </div>

        <div
          style={{
            padding: "10px",
            width: "25%",
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "column",
            backgroundColor: "rgb(244, 240, 254)",
          }}
        >
          <select
            onChange={handleTimeFilterChange}
            value={timeFilter}
            style={{
              alignSelf: "start",
              padding: "1px",
              backgroundColor: "rgb(244, 240, 254)",
              borderColor: "rgba(250, 248, 252)",
              height: "30px",
              width: "80%",
            }}
          >
            <option value="all">All</option>
            <option value="last6months">Last 6 Months</option>
          </select>
          <div
            style={{
              margin: "2px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* Systolic */}
            <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "pink", fontSize: "20px" }}>●</span>
                <p>Systolic</p>
              </span>
              <strong>{avgSystolic.toFixed(2)}</strong>
              <p style={{ fontSize: "10px", textAlign: "left" }}>{systolicChange}</p>
            </div>
            {/* Diastolic */}
            <div>
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ color: "purple", fontSize: "20px" }}>●</span>
                <p>Diastolic</p>
              </span>
              <strong>{avgDiastolic.toFixed(2)}</strong>
              <p style={{ fontSize: "10px", textAlign: "left" }}>{diastolicChange}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Render VitalCard components only if selectedPatient exists */}
      {selectedPatient && (
        <div
          style={{
            display: "flex",
            flexDirection:"row",
            justifyContent: "space-evenly", 
            gap: "5px",
            marginTop: "20px",
            flexWrap: "wrap",  
          }}
        >
          <VitalCard
            title="Respiratory Rate"
            unit="bpm"
            icon="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgNVrwo1XjgZecHEEU67vZvCOir3Tbxe5iCw&s"
            patient={selectedPatient}
            backgroundColor="#E0F3FA"
            diagnosticList={selectedPatient.diagnostic_list}
          />
          <VitalCard
            title="Temperature"
            unit="°C"
            icon="https://img.freepik.com/premium-vector/thermometer-icon-logo-vector-design-template_827767-692.jpg"
            patient={selectedPatient}
            backgroundColor="#FFE6E9"
            diagnosticList={selectedPatient.diagnostic_list}
          />
          <VitalCard
            title="Heart Rate"
            unit="bpm"
            icon="https://t3.ftcdn.net/jpg/03/00/65/82/360_F_300658258_ZONuYpgnH0tSlPHB9lxES1Ai7Ij0ZNSz.jpg"
            patient={selectedPatient}
            backgroundColor="#FFE6F1"
            diagnosticList={selectedPatient.diagnostic_list}
          />
        </div>
      )}
    </div>
  );
};

export default ChartSection;  // Export the component
