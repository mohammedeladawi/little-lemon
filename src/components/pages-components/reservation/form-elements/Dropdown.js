import React, { useCallback, useEffect, useMemo } from "react";
import styles from "./Dropdown.module.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

const Dropdown = ({
  id,
  icon,
  title,
  optionItems,
  selectedValue,
  setSelectedValue,
  isReserveClicked,
  openDropdown,
  setOpenDropdown,
}) => {
  const handleDropdownToggle = useCallback((event) => {
    event.stopPropagation();
    setOpenDropdown((state) => (state === id ? null : id));
  }, []);

  useEffect(() => {
    if (openDropdown) {
      const handleClickOutside = () => setOpenDropdown(null);
      document.body.addEventListener("click", handleClickOutside);
      return () =>
        document.body.removeEventListener("click", handleClickOutside);
    }
  }, [openDropdown]);

  const handleOptionClick = useCallback((optionValue) => {
    setSelectedValue(optionValue);
    setOpenDropdown(null);
  }, []);

  const isOpen = useMemo(() => id === openDropdown, [openDropdown]);

  return (
    <div className={styles["dropdown-container"]}>
      <div
        className={styles["dropdown-bar"]}
        aria-label={id}
        onClick={handleDropdownToggle}
      >
        <span className={styles["dropdown-bar_icon"]}>{icon}</span>
        <span className={styles["dropdown-bar_value"]}>
          {selectedValue || title}
        </span>
        <span className={styles["dropdown-bar_arrow"]}>
          {isOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </span>
      </div>
      <ul
        className={`${styles["options-list"]} ${
          optionItems.length >= 6 ? styles["divide"] : ""
        } ${isOpen ? styles["open"] : ""}`}
      >
        {optionItems.map((option, index) => (
          <li
            key={index}
            onClick={() => handleOptionClick(option)}
            className={option === selectedValue ? styles["active"] : ""}
          >
            {option}
          </li>
        ))}
      </ul>
      {isReserveClicked && !selectedValue && (
        <p className={styles["error-message"]}>This item is required</p>
      )}
    </div>
  );
};

export default Dropdown;
