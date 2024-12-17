import React, { useEffect, useMemo, useReducer, useState } from "react";
import Container from "../../grid-system/Container";
import Dropdown from "./form-elements/Dropdown";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";
import styles from "./ReservationForm.module.css";
import Button from "../../ui/buttons/Button";
import Radio from "./form-elements/Radio";
import { fetchAPI, submitAPI } from "../../../utils/api";
import { useNavigate } from "react-router";

const generateDateList = () => {
  const dateList = [];
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // Get the last day of the current month

  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    dateList.push(date.toLocaleDateString()); // Format the date in MM/DD/YYYY format
  }

  return dateList;
};

const dinerOptions = [
  "1 Diners",
  "2 Diners",
  "3 Diners",
  "4 Diners",
  "5 Diners",
  "6 Diners",
  "7 Diners",
  "8 Diners",
  "9 Diners",
  "10 Diners",
];

const occasionOptions = ["Birthday", "Engagement", "Anniversary"];

export const initialTimeList = (
  startTime = "13:00",
  endTime = "23:59",
  intervalMinutes = 60
) => {
  const timeList = [];
  const start = startTime.split(":");
  const end = endTime.split(":");
  let currentHour = parseInt(start[0], 10);
  let currentMinute = parseInt(start[1], 10);

  const endHour = parseInt(end[0], 10);
  const endMinute = parseInt(end[1], 10);

  while (
    currentHour < endHour ||
    (currentHour === endHour && currentMinute <= endMinute)
  ) {
    const hour12 = currentHour % 12 || 12; // 12-hour format
    const ampm = currentHour < 12 ? "AM" : "PM";
    const formattedTime = `${hour12}:${currentMinute
      .toString()
      .padStart(2, "0")} ${ampm}`;
    timeList.push(formattedTime);

    // Increment time by the interval
    currentMinute += intervalMinutes;
    if (currentMinute >= 60) {
      currentMinute = 0;
      currentHour += 1;
    }
  }

  return timeList;
};

export const updateTimeReducer = (state, action) => {
  switch (action.type) {
    case "update_times":
      // Update in the future
      return action.payload.times;

    default:
      return state;
  }
};

const ReservationForm = () => {
  // Radio elements
  const [seatValue, setSeatValue] = useState("Indoor Seating");

  // Dropdown elements
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDinersNum, setSelectedDinersNum] = useState(null);
  const [selectedOcassion, setSelectedOcassion] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [timeAvailable, dispatch] = useReducer(
    updateTimeReducer,
    initialTimeList()
  );

  // Form Steps
  const [step, setStep] = useState(1);

  // Reserve a table button
  const [isReserveClicked, setIsReserveClicked] = useState(false);

  // Update times depends on dates
  useEffect(() => {
    // Update time by selected date
    if (selectedDate) {
      dispatch({
        type: "update_times",
        payload: { times: fetchAPI(new Date(selectedDate)) },
      });
    }
  }, [selectedDate]);

  const navigate = useNavigate();

  const handleNextStep = () => {
    setIsReserveClicked(true);
    setStep((state) => state + 1);
  };

  const handleBackStep = () => {
    setStep((state) => state - 1);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Do Action
    navigate("confirmed-reservation");
  };

  // ****************** Form Step 2 ********************************
  const [policyAgreement, setPolicyAgreement] = useState(null);

  return (
    // Form Step 1
    <>
      {step === 1 && (
        <form className={styles["reservation-form-section"]}>
          <div className={styles["reservation-form-section_inputs"]}>
            <Container>
              <h2 className={styles["reservation-form_title"]}>Reservation</h2>

              <div className={styles["reservation-form_inputs"]}>
                <div className={styles["radio"]}>
                  <Radio
                    title="Indoor Seating"
                    inputName="seating"
                    inputValue="Indoor Seating"
                    isChecked={seatValue === "Indoor Seating"}
                    setCheckedValue={setSeatValue}
                  />
                </div>

                <div className={styles["radio"]}>
                  <Radio
                    title="Outdoor Seating"
                    inputName="seating"
                    inputValue="Outdoor Seating"
                    isChecked={seatValue === "Outdoor Seating"}
                    setCheckedValue={setSeatValue}
                  />
                </div>

                <div className={styles["select"]} id="date-container">
                  <label>Date</label>
                  <Dropdown
                    id="date"
                    title="Select Date"
                    optionItems={generateDateList()}
                    icon={<CalendarDots size={24} />}
                    selectedValue={selectedDate}
                    setSelectedValue={setSelectedDate}
                    isReserveClicked={isReserveClicked}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>Number of Diners</label>
                  <Dropdown
                    id="diners"
                    title="No. of Diners"
                    optionItems={dinerOptions}
                    icon={<User size={24} />}
                    selectedValue={selectedDinersNum}
                    setSelectedValue={setSelectedDinersNum}
                    isReserveClicked={isReserveClicked}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>Ocassion</label>
                  <Dropdown
                    id="ocassion"
                    title="Ocassion"
                    icon={<BeerStein size={24} />}
                    optionItems={occasionOptions}
                    selectedValue={selectedOcassion}
                    setSelectedValue={setSelectedOcassion}
                    isReserveClicked={isReserveClicked}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>Time</label>
                  <Dropdown
                    id="time"
                    title="Time"
                    icon={<Clock size={24} />}
                    optionItems={timeAvailable}
                    selectedValue={selectedTime}
                    setSelectedValue={setSelectedTime}
                    isReserveClicked={isReserveClicked}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                  />
                </div>
              </div>
            </Container>
          </div>
          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              type="submit"
              addStyle={{ marginTop: "15px" }}
              onClick={handleNextStep}
            >
              Reserve a Table
            </Button>
          </div>
        </form>
      )}

      {step === 2 && (
        <form className={styles["reservation-form-section"]}>
          <div className={styles["reservation-form-section_inputs"]}>
            <Container>
              <div
                className={`${styles["reservation-form_inputs"]} ${styles["second-step"]}`}
              >
                <div>
                  <label htmlFor="first-name">First Name</label>
                  <input
                    className={styles["second-step-input"]}
                    type="text"
                    id="first-name"
                    name="first-name"
                    placeholder="First Name"
                  />
                </div>

                <div>
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    className={styles["second-step-input"]}
                    type="text"
                    id="last-name"
                    name="last-name"
                    placeholder="Last Name"
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    className={styles["second-step-input"]}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yours@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone">Phone</label>
                  <input
                    className={styles["second-step-input"]}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="002"
                  />
                </div>

                <div id={styles["first-step-values"]} onClick={handleBackStep}>
                  <div
                    className={`${styles["first-step-value"]} ${
                      selectedTime ? "" : styles["warning"]
                    }`}
                  >
                    <Clock size={20} />
                    <span>{selectedTime || "Select Time"} </span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      selectedDinersNum ? "" : styles["warning"]
                    }`}
                  >
                    <User size={20} />
                    <span>{selectedDinersNum || "No. of Diners"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      selectedOcassion ? "" : styles["warning"]
                    }`}
                  >
                    <BeerStein size={20} />
                    <span>{selectedOcassion || "Occasion"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      selectedDate ? "" : styles["warning"]
                    }`}
                  >
                    <CalendarDots size={20} />
                    <span>{selectedDate || "Select Date"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      seatValue ? "" : styles["warning"]
                    }`}
                  >
                    <span>{seatValue}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    className={styles["second-step-placeholder"]}
                    placeholder="Comment"
                    id="comment"
                  ></textarea>
                </div>
                <div className={styles["radio"]}>
                  <Radio
                    title="Do you agree privacy policy "
                    inputName="policy-agreement"
                    inputValue="agree"
                    isChecked={policyAgreement === "agree"}
                    setCheckedValue={setPolicyAgreement}
                  />
                </div>
              </div>
            </Container>
          </div>
          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              type="submit"
              addStyle={{ marginTop: "15px" }}
              onClick={handleSubmit}
            >
              Confirm Reservation
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default ReservationForm;
