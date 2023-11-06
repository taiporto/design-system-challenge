import React from 'react';

export const Checkbox = (
{name = 'Test', label, disabled = false, checked = false}) => {
  return (
    <div>
      <label htmlFor={id || name}>{label}</label>
      <input type="checkbox" name={name} id={id || name} disabled={disabled} aria-disabled={disabled} checked={checked}/>
    </div>
    );
}