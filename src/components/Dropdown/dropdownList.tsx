import React from "react";
import './dropdownList.scss';

import { dropdownListInterface } from 'interfaces';

const DropdownList: React.FC<dropdownListInterface> = (
  {
    value,
    defaultValue,
    list,
    onChangeValue,
    name
  }
) => {

  return (
    <select
      className="select-input form-select"
      name={name}
      aria-label="Dropdown"
      value={value}
      onChange={onChangeValue}
    >
      <option value=''>{defaultValue}</option>
      {list.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default DropdownList;