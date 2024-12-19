import React, { useCallback, useEffect, useMemo } from "react";
import styles from "./Dropdown.module.css";
import { CaretDown, CaretUp } from "@phosphor-icons/react";
import ErrorMessage from "./ErrorMessage";

const Dropdown = ({
  id,
  title,
  options,
  icon,
  value,
  onChange: setValue,
  isOpen,
  setOpen,
  isReserveClicked,
  errorMsg,
}) => {
  useEffect(() => {
    if (isOpen) {
      const handleClickOutside = () => setOpen(null);
      document.body.addEventListener("click", handleClickOutside);
      return () =>
        document.body.removeEventListener("click", handleClickOutside);
    }
  }, [isOpen]);

  const handleDropdownToggle = useCallback(
    (e) => {
      e.stopPropagation();
      setOpen(isOpen === id ? null : id);
    },
    [id, setOpen]
  );

  const selectOption = useCallback((option) => {
    setValue(option);
    setOpen(null);
  }, []);

  const isClickedToOpen = useMemo(() => id === isOpen, [isOpen]);

  return (
    <div className={styles["dropdown-container"]}>
      <div
        className={styles["dropdown-bar"]}
        data-testid={id}
        onClick={handleDropdownToggle}
      >
        <span className={styles["dropdown-bar_icon"]}>{icon}</span>
        <span className={styles["dropdown-bar_value"]}>{value || title}</span>
        <span className={styles["dropdown-bar_arrow"]}>
          {isClickedToOpen ? <CaretUp size={24} /> : <CaretDown size={24} />}
        </span>
      </div>
      <ul
        className={`${styles["options-list"]} ${
          options.length >= 6 ? styles["divide"] : ""
        } ${isClickedToOpen ? styles["open"] : ""}`}
      >
        {options.map((option, index) => (
          <li
            key={index}
            onClick={() => selectOption(option)}
            className={option === value ? styles["active"] : ""}
          >
            {option}
          </li>
        ))}
      </ul>
      {isReserveClicked && !value && errorMsg && (
        <ErrorMessage>{errorMsg}</ErrorMessage>
      )}
    </div>
  );
};

export default Dropdown;
