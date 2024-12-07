import React, { useState } from "react";
import SelectOptions from "./select/SelectOptions";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";

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
    <div className="reservation-form">
      <h2 className="reservation-title">Reservation</h2>
      <div>
        <label htmlFor="indoor">Indoor Seating</label>
        <input type="radio" id="indoor" name="seat" value="indoor" />
      </div>

      <div>
        <label htmlFor="outdoor">Outdoor Seating</label>
        <input type="radio" id="outdoor" name="seat" value="outdoor" />
      </div>

      <div id="date-container">
        <label htmlFor="date">Date</label>
        <CalendarDots size={32} />
        <input type="date" name="date" id="date" className="reservation-date" />
      </div>

      <div>
        <SelectOptions
          labelTitle="Number of Diners"
          htmlFor="diners"
          icon={<User size={32} />}
          defaultPlaceHolder="No.Diners"
          optionsItems={dinersItemsOptions}
        />
      </div>

      <div>
        <SelectOptions
          labelTitle="Ocassion"
          htmlFor="ocassion"
          icon={<BeerStein size={32} />}
          defaultPlaceHolder="Occasion"
          optionsItems={occasionItemsOptions}
        />
      </div>

      <div>
        <SelectOptions
          labelTitle="Time"
          htmlFor="time"
          icon={<Clock size={32} />}
          defaultPlaceHolder="Select Time"
          optionsItems={timeAvailableOptions}
        />
      </div>
    </div>
  );
};

export default ReservationForm;
