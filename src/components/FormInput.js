// src/components/FormInput.js

import React from 'react';

function FormInput({ label, name, value, onChange, type = "text", required = false }) {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="form-input"
      />
    </div>
  );
}

export default FormInput;
