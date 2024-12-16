import { fireEvent, render, screen, within } from "@testing-library/react";
import ReservationForm, {
  initialTimeList,
  updateTimeReducer,
} from "../components/pages-components/reservation/ReservationForm";
import { fetchAPI } from "../utils/api";
import { MemoryRouter } from "react-router";

describe("Reservation Form", () => {
  test("Check heading is rendered", () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const reservationFormHeading = screen.getByText(/Reservation/i);
    expect(reservationFormHeading).toBeInTheDocument();
  });

  test("Submit button is disabled when reservation form is incomplete", () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeDisabled();
  });

  test("Submit button is enabled when all fields are filled", () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );

    // Simulate selecting a date
    const dateDropdown = screen.getByText(/select date/i); // Target the text that indicates the dropdown
    fireEvent.click(dateDropdown); // Click to open the dropdown
    const dateOption = screen.getByText("12/31/2024"); // Select the option you want
    fireEvent.click(dateOption);

    // Simulate selecting the number of diners
    const dinersDropdown = screen.getByText(/no\. of diners/i); // Target the number of diners text
    fireEvent.click(dinersDropdown); // Click to open the dropdown
    const dinersOption = screen.getByText("2 Diners");
    fireEvent.click(dinersOption);

    // Simulate selecting the occasion
    const occasionDropdown = screen.getByLabelText("ocassion"); // Target the occasion text
    fireEvent.click(occasionDropdown); // Click to open the dropdown
    const occasionOption = screen.getByText("Birthday");
    fireEvent.click(occasionOption);

    // Simulate selecting the time
    const timeDropdown = screen.getByLabelText("time"); // Target the time text
    fireEvent.click(timeDropdown); // Click to open the dropdown
    const date = new Date("12/31/2024");
    const timeOption = screen.getByText(fetchAPI(date)[0]);
    fireEvent.click(timeOption);

    // Now check that the button is enabled
    const submitButton = screen.getByRole("button", {
      name: /reserve a table/i,
    });
    expect(submitButton).toBeEnabled();
  });

  test("IntialTimeList returns the expected values", () => {
    const initialTime = initialTimeList();

    const expectedTime = ((
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
    })();

    expect(initialTime).toEqual(expectedTime);
  });

  test("updatedTime function returns the same provided date in the state when the action is invalid", () => {
    const initialState = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const action = {
      type: "invalid_action",
      payload: {},
    };

    const result = updateTimeReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  test("updatedTime function returns the same provided date in the state when the action is valid", () => {
    const initialState = ["12:00 PM", "1:00 PM", "2:00 PM"];
    const getCurrentDate = () => {
      const today = new Date();
      const month = today.getMonth() + 1; // Months are zero-indexed, so add 1
      const day = today.getDate();
      const year = today.getFullYear();

      return `${month}/${day}/${year}`;
    };

    const action = {
      type: "update_times",
      payload: { times: fetchAPI(new Date(getCurrentDate())) },
    };

    const date = new Date(getCurrentDate());
    const expectedState = fetchAPI(date);

    const result = updateTimeReducer(initialState, action);
    expect(result).toEqual(expectedState);
  });
});
