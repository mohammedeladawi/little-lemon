import React from "react";
import styles from "./SelectOptions.module.css";

const SelectOptions = ({
  labelTitle,
  htmlFor,
  icon,
  defaultPlaceHolder,
  optionsItems,
  handleOnChange,
  selectedOption,
}) => {
  return (
    <div>
      <label htmlFor={htmlFor}>{labelTitle}</label>
      <select
        id={htmlFor}
        className="select-reservation"
        onChange={handleOnChange}
        value={selectedOption}
      >
        <option disabled={true} selected>
          {icon}
          {defaultPlaceHolder}
        </option>

        {optionsItems.map((item) => (
          <option value={item.value}> {item.title}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectOptions;
