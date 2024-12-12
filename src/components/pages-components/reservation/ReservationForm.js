import React, { useReducer, useState } from "react";
import Container from "../../grid-system/Container";
import Dropdown from "./form-elements/Dropdown";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";
import styles from "./ReservationForm.module.css";
import Button from "../../ui/buttons/Button";
import Radio from "./form-elements/Radio";

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

const initialTimeList = (
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

const updateTime = (state, action) => {
  switch (action.type) {
    case "update_times":
      // Update in the future
      console.log(action.payload.date);
      return ["10.00 PM"];
    default:
      return state;
  }
};

const ReservationForm = () => {
  // Radio elements
  const [seatValue, setSeatValue] = useState("indoor");

  // Dropdown elements
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDinersNum, setSelectedDinersNum] = useState(null);
  const [selectedOcassion, setSelectedOcassion] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [openDropdown, setOpenDropdown] = useState(null);

  const [timeAvailable, dispatch] = useReducer(updateTime, initialTimeList());

  // Submit button
  const [isSubmited, setIsSumbited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSumbited(true);
    if (
      !selectedDate ||
      !selectedDinersNum ||
      !selectedOcassion ||
      !selectedTime
    )
      return;

    // Do Action
    console.log("Submited");
  };

  return (
    <section className={styles["reservation-form-section"]}>
      <Container>
        <h2 className={styles["reservation-form_title"]}>Reservation</h2>

        <div className={styles["reservation-form"]}>
          <div className={styles["reservation-form_inputs"]}>
            <div className={styles["radio"]}>
              <Radio
                title="Indoor Seating"
                inputName="seating"
                inputValue="indoor"
                isChecked={seatValue == "indoor"}
                setSeatValue={setSeatValue}
              />
            </div>

            <div className={styles["radio"]}>
              <Radio
                title="Outdoor Seating"
                inputName="seating"
                inputValue="outdoor"
                isChecked={seatValue === "outdoor"}
                setSeatValue={setSeatValue}
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
                isSubmited={isSubmited}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
                updateTime={dispatch}
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
                isSubmited={isSubmited}
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
                isSubmited={isSubmited}
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
                isSubmited={isSubmited}
                openDropdown={openDropdown}
                setOpenDropdown={setOpenDropdown}
              />
            </div>
          </div>

          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              type="submit"
              addStyle={{ marginTop: "15px" }}
              onClick={handleSubmit}
            >
              Reserve a Table
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ReservationForm;
