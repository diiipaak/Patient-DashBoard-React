const PatientDetails = ({ selectedPatient }) => {
    if (!selectedPatient) {
      return (
        <div
          style={{
            maxWidth: "500px",
            width: "100%",
            paddingRight: "10px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            color: "#777",
          }}
        >
          Select a patient to view details
        </div>
      );
    }
  
    const {
      name,
      gender,
      date_of_birth,
      profile_picture,
      phone_number,
      emergency_contact,
      insurance_type,
    } = selectedPatient;
  
    return (
      <div
        style={{
          maxWidth: "600px",
          width: "100%",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          margin: "10px auto",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <img
            src={profile_picture}
            alt={name}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              marginBottom: "10px",
              padding: "2px",
            }}
          />
          <h2 style={{ color: "#333" }}>{name}</h2>
        </div>
  
        <div style={{ lineHeight: "1.8", fontSize: "14px", color: "#555" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/ios/50/000000/calendar.png"
              alt="Date of Birth"
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <p style={{ margin: 0 }}>
              <strong>Date of Birth:</strong>
              <br />
              {date_of_birth}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/ios/50/000000/gender-neutral-user.png"
              alt="Gender"
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <p style={{ margin: 0 }}>
              <strong>Gender:</strong>
              <br />
              {gender}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "10px",
              alignItems: "center",
              marginBottom: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/ios/50/000000/phone.png"
              alt="Phone"
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <p style={{ margin: 0 }}>
              <strong>Phone:</strong>
              <br />
              {phone_number}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://img.icons8.com/ios/50/000000/phone.png"
              alt="Emergency Contact"
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <p style={{ margin: 0 }}>
              <strong>Emergency Contact:</strong>
              <br />
              {emergency_contact}
            </p>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "10px",
              marginLeft: "10px",
            }}
          >
            <img
              src="https://w7.pngwing.com/pngs/369/414/png-transparent-logo-organization-brand-security-blue-angle-text-thumbnail.png"
              alt="Insurance"
              style={{ width: "20px", height: "20px", marginRight: "20px" }}
            />
            <p style={{ margin: 0 }}>
              <strong>Insurance Provider:</strong>
              <br />
              {insurance_type}
            </p>
          </div>
        </div>
  
        <button
          style={{
            marginTop: "20px",
            backgroundColor: "#01F0D0",
            color: "white",
            border: "none",
            padding: "10px 20px",
            borderRadius: "15px",
            width: "80%",
            cursor: "pointer",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Show All Information
        </button>
      </div>
    );
  };
  
  export default PatientDetails;
  