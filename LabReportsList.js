import React from "react";

const LabReportsList = ({ selectedPatient }) => {
  const data = selectedPatient?.lab_results;

  return (
    <div
      style={{
        maxWidth: "600px",
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        margin: "10px auto",
        padding: "20px",
      }}
    >
      <h3
        style={{
          textAlign: "left",
          marginBottom: "20px",
          color: "#333",
          fontSize: "18px",
        }}
      >
        Lab Results
      </h3>
      {data && data.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tbody>
            {data.map((report, index) => (
              <tr key={index} style={{ textAlign: "left" }}>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e0e0e0",
                    fontSize: "14px",
                    color: "#555",
                  }}
                >
                  {report}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e0e0e0",
                    textAlign: "center",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFU_-K_ZQC_GZLgdMljcAnbU4i7e3-OpBdlA&s"
                    alt="View Report"
                    style={{
                      width: "24px",
                      height: "24px",
                      cursor: "pointer",
                    }}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={{ textAlign: "center", color: "#777", fontSize: "14px" }}>
          No lab reports available.
        </p>
      )}
    </div>
  );
};

export default LabReportsList;
