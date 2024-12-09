import React, { useState } from "react";
import Container from "../../grid-system/Container";
import Dropdown from "./dropdown/Dropdown";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";
import styles from "./ReservationForm.module.css";
import Button from "../../ui/buttons/Button";

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

const generateTimeList = (
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

const ReservationForm = () => {
  const [timeAvailableOptions, setTimeAvailableOptions] = useState([]);

  return (
    <section className={styles["reservation-form-section"]}>
      <Container>
        <h2 className={styles["reservation-form_title"]}>Reservation</h2>

        <div className={styles["reservation-form"]}>
          <div className={styles["reservation-form_inputs"]}>
            <div className={styles["radio"]}>
              <label htmlFor="indoor">Indoor Seating</label>
              <input
                type="radio"
                id="indoor"
                name="seat"
                value="indoor"
                checked={true}
              />
            </div>

            <div className={styles["radio"]}>
              <label htmlFor="outdoor">Outdoor Seating</label>
              <input type="radio" id="outdoor" name="seat" value="outdoor" />
            </div>

            <div className={styles["select"]} id="date-container">
              <label>Date</label>
              <Dropdown
                title="Select Date"
                optionItems={generateDateList()}
                icon={<CalendarDots size={24} />}
              />
            </div>

            <div className={styles["select"]}>
              <label>Number of Diners</label>
              <Dropdown
                title="No. of Diners"
                optionItems={dinerOptions}
                icon={<User size={24} />}
              />
            </div>

            <div className={styles["select"]}>
              <label>Ocassion</label>
              <Dropdown
                title="Ocassion"
                icon={<BeerStein size={24} />}
                optionItems={occasionOptions}
              />
            </div>

            <div className={styles["select"]}>
              <label>Time</label>
              <Dropdown
                title="Time"
                icon={<Clock size={24} />}
                optionItems={generateTimeList()}
              />
            </div>
          </div>

          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              type="submit"
              addStyle={{ marginTop: "15px" }}
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
