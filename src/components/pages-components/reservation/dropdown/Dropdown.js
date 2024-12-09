import React, { useState } from "react";
import styles from "./Dropdown.module.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const Dropdown = ({ icon, title, optionItems }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState(title || " ");
  const [options, setOptions] = useState(optionItems || []);

  function optionsList(options) {
    function handleOptionClick(option) {
      setDropdownValue(option);
      setIsOpen(false);
      console.log(option);
    }

    function valueFormat(option) {
      return option.split(" ").join("-").toLowerCase();
    }

    return options.map((option, index) => (
      <li
        key={index}
        data-value={valueFormat(option)}
        onClick={() => handleOptionClick(option)}
      >
        {option}
      </li>
    ));
  }

  return (
    <div className={styles["dropdown-container"]}>
      <div
        className={styles["dropdown-bar"]}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span className={styles["dropdown-bar_icon"]}>{icon}</span>
        <span className={styles["dropdown-bar_value"]}> {dropdownValue} </span>
        <span className={styles["dropdown-bar_arrow"]}>
          {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </span>
      </div>

      {isOpen && (
        <ul
          className={`${styles["options-list"]} ${
            options.length >= 6 ? styles["divide"] : ""
          }`}
        >
          {optionsList(options)}{" "}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
