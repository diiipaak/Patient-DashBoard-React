const VitalCard = ({ title, unit, icon, patient, backgroundColor }) => {
  const data = patient?.diagnosis_history || [];

  const totalRecords = data.length;

  const averages = {
    respiratory_rate:
      totalRecords > 0
        ? data.reduce((sum, record) => sum + record.respiratory_rate.value, 0) / totalRecords
        : 0,
    temperature:
      totalRecords > 0
        ? data.reduce((sum, record) => sum + record.temperature.value, 0) / totalRecords
        : 0,
    heart_rate:
      totalRecords > 0
        ? data.reduce((sum, record) => sum + record.heart_rate.value, 0) / totalRecords
        : 0,
  };

  const getStatus = (average, normalRange) => {
    if (average >= normalRange.lower && average <= normalRange.upper) {
      return { status: "Normal", sign: "▶", color: "green" };  // Normal
    } else if (average > normalRange.upper) {
      return { status: "Higher than Average", sign: "▲", color: "red" };  // Higher
    } else {
      return { status: "Lower than Average", sign: "▼", color: "red" };  // Lower
    }
  };

  // Define normal ranges for each vital
  const normalRanges = {
    "Respiratory Rate": { lower: 12, upper: 20 }, 
    "Temperature": { lower: 97.8, upper: 99.1 }, 
    "Heart Rate": { lower: 60, upper: 100 }, 
  };

  let displayValue, status, sign, statusColor;
  switch (title.toLowerCase()) {
    case "respiratory rate":
      displayValue = `${averages.respiratory_rate.toFixed(2)} ${unit}`;
      ({ status, sign, color: statusColor } = getStatus(averages.respiratory_rate, normalRanges["Respiratory Rate"]));
      break;
    case "temperature":
      displayValue = `${averages.temperature.toFixed(2)} ${unit}`;
      ({ status, sign, color: statusColor } = getStatus(averages.temperature, normalRanges["Temperature"]));
      break;
    case "heart rate":
      displayValue = `${averages.heart_rate.toFixed(2)} ${unit}`;
      ({ status, sign, color: statusColor } = getStatus(averages.heart_rate, normalRanges["Heart Rate"]));
      break;
    default:
      displayValue = "N/A";
      status = "Unknown";
      sign = "";
      statusColor = "black";
  }

  return (
    <div
      style={{
        maxWidth: "150px",
        width: "100%",
        backgroundColor: backgroundColor,
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "6px",
        margin: "3px",
        textAlign: "left",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          width: "100px",
          height: "75px",
          borderRadius: "50%",
          overflow: "hidden",
          marginBottom: "25px",
          backgroundColor: "white",
          alignSelf: "center",
        }}
      >
        <img
          src={icon}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </div>
      <h3
        style={{
          fontSize: "18px",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "25px",
          color: "black",
          margin: "10px 0",
          fontWeight: "bold",
        }}
      >
        <strong>{displayValue}</strong>
      </p>
      <p
        style={{
          fontSize: "14px",
          color: statusColor,  
          marginTop: "5px",
          textAlign: "center",
        }}
      >
        {sign} {status}
      </p>
    </div>
  );
};

export default VitalCard;
