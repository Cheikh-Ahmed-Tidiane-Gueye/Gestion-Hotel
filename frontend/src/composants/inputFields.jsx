// inputFields.jsx
import React from "react";

const InputFields = ({
  type,
  id,
  name,
  className,
  placeholder,
  value,
  onChange,
  label,
}) => {
  return (
    <>
      <input
        type={type}
        id={id}
        name={name}
        className={className}
        aria-describedby={`${id}Help`}
        placeholder={placeholder}
        value={value} // Ajout de la valeur par défaut
        onChange={onChange}
      />
      {label}
    </>
  );
};
export default InputFields;
