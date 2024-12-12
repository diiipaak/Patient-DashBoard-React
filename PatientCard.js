import React from 'react';

const PatientCard = ({ patient, onClick, selectedPatient }) => {
  const isSelected = selectedPatient && selectedPatient.name === patient.name;

  return (
    <div
      onClick={() => onClick(patient)}
      style={{
        backgroundColor: isSelected ? '#f0f8ff' : 'white', // Highlight selected patient
        border: '1px solid #ccc',
        borderRadius: '10px',
        padding: '15px',
        marginBottom: '10px',
        cursor: 'pointer',
        boxShadow: isSelected ? '0 0 10px rgba(0, 0, 255, 0.2)' : 'none',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={patient.profile_picture} // Use profile_picture here
          alt={patient.name}
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            objectFit: 'cover', // Ensures the image maintains its aspect ratio and doesn't get distorted
            marginRight: '15px',
          }}
        />
        <div>
          <h4 style={{ margin: '0', fontSize: '18px' }}>{patient.name}</h4>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#555' }}>
            {patient.age} years old
          </p>
          <p style={{ margin: '5px 0', fontSize: '14px', color: '#888' }}>
            {patient.gender}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
