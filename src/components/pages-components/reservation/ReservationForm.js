import React, { useState } from "react";
import Container from "../../grid-system/Container";
import SelectOptions from "./select/SelectOptions";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";
import styles from "./ReservationForm.module.css";
import Button from "../../ui/buttons/Button";

const ReservationForm = () => {
  const dinersItemsOptions = [
    { value: "1", title: "1 Diners" },
    { value: "2", title: "2 Diners" },
    { value: "3", title: "3 Diners" },
    { value: "4", title: "4 Diners" },
    { value: "5", title: "5 Diners" },
    { value: "6", title: "6 Diners" },
  ];
  const occasionItemsOptions = [{ value: "", title: "" }];
  const [timeAvailableOptions, setTimeAvailableOptions] = useState([]);

  return (
    <section className={styles["reservation-form-section"]}>
      <Container>
        <h2 className={styles["reservation-form_title"]}>Reservation</h2>

        <form className={styles["reservation-form"]}>
          <div className={styles["reservation-form_inputs"]}>
            <div className={styles["radio"]}>
              <label htmlFor="indoor">Indoor Seating</label>
              <input type="radio" id="indoor" name="seat" value="indoor" />
            </div>

            <div className={styles["radio"]}>
              <label htmlFor="outdoor">Outdoor Seating</label>
              <input type="radio" id="outdoor" name="seat" value="outdoor" />
            </div>

            <div className={styles["select"]} id="date-container">
              <label htmlFor="date">Date</label>
              <CalendarDots size={32} />
              <input
                type="date"
                name="date"
                id="date"
                className={styles["reservation-form_date"]}
              />
            </div>

            <div className={styles["select"]}>
              <SelectOptions
                labelTitle="Number of Diners"
                htmlFor="diners"
                icon={<User size={32} />}
                defaultPlaceHolder="No.Diners"
                optionsItems={dinersItemsOptions}
              />
            </div>

            <div className={styles["select"]}>
              <SelectOptions
                labelTitle="Ocassion"
                htmlFor="ocassion"
                icon={<BeerStein size={32} />}
                defaultPlaceHolder="Occasion"
                optionsItems={occasionItemsOptions}
              />
            </div>

            <div className={styles["select"]}>
              <SelectOptions
                labelTitle="Time"
                htmlFor="time"
                icon={<Clock size={32} />}
                defaultPlaceHolder="Select Time"
                optionsItems={timeAvailableOptions}
              />
            </div>
          </div>

          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              type="submit"
              // addStyle={{ width: "165px", height: "40px" }}
            >
              Reserve a Table
            </Button>
          </div>
        </form>
      </Container>
    </section>
  );
};

export default ReservationForm;
