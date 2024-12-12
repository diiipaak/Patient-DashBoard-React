import React from 'react';

const DiagnosticList = ({ diagnosticList }) => {
 
  return (
    <div
      style={{
        width: "97%",
        margin: "15px auto",
        padding: "10px",
        backgroundColor: "#fff",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h3 style={{ marginBottom: "20px", color: "#333" }}>Diagnoses</h3>
      {diagnosticList && diagnosticList.length > 0 ? (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ backgroundColor: "#F6F7F8" }}>
              <th
                style={{
                  padding: "20px",
                  borderBottom: "2px solid #e0e0e0",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#555",
                  borderTopLeftRadius: "50px",
                  borderBottomLeftRadius: "50px",
                }}
              >
                Diagnosis Name
              </th>
              <th
                style={{
                  padding: "10px",
                  borderBottom: "2px solid #e0e0e0",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#555",
                }}
              >
                Description
              </th>
              <th
                style={{
                  padding: "10px",
                  borderBottom: "2px solid #e0e0e0",
                  textAlign: "left",
                  fontSize: "14px",
                  color: "#555",
                  borderTopRightRadius: "50px",
                  borderBottomRightRadius: "50px",
                }}
              >
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {diagnosticList.map((diagnosis, index) => (
              <tr key={index}>
                <td
                  style={{
                    padding: "20px",
                    borderBottom: "1px solid #e0e0e0",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {diagnosis.name}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e0e0e0",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {diagnosis.description}
                </td>
                <td
                  style={{
                    padding: "10px",
                    borderBottom: "1px solid #e0e0e0",
                    fontSize: "14px",
                    color: "#333",
                  }}
                >
                  {diagnosis.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p
          style={{
            textAlign: "center",
            color: "#777",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          No diagnoses available.
        </p>
      )}
    </div>
  );
};

export default DiagnosticList;
