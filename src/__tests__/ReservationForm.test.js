import {
  fireEvent,
  render,
  screen,
  act,
  waitFor,
} from "@testing-library/react";
import ReservationForm, {
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

  test("Submit button is disabled when reservation form is incomplete", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );
    const nextStepButton = screen.getByRole("button", {
      name: /reserve a table/i,
    });
    fireEvent.click(nextStepButton);

    const submitButton = screen.getByRole("button", {
      name: /confirm reservation/i,
    });

    await waitFor(() => expect(submitButton).toBeDisabled());
  });

  test("Submit button is enabled when reservation form is filled", async () => {
    render(
      <MemoryRouter>
        <ReservationForm />
      </MemoryRouter>
    );

    // Simulate selecting a date
    const dateDropdown = screen.getByText(/select date/i); // Target the text that indicates the dropdown
    await act(async () => {
      fireEvent.click(dateDropdown); // Click to open the dropdown
    });
    const dateOption = screen.getByText("12/31/2024"); // Select the option you want
    await act(async () => {
      fireEvent.click(dateOption); // Select the date
    });

    // Simulate selecting the number of diners
    const dinersDropdown = screen.getByText(/no\. of diners/i); // Target the number of diners text
    await act(async () => {
      fireEvent.click(dinersDropdown); // Click to open the dropdown
    });
    const dinersOption = screen.getByText("2 Diners");
    await act(async () => {
      fireEvent.click(dinersOption); // Select number of diners
    });

    // Simulate selecting the occasion
    const occasionDropdown = screen.getByTestId("occasion"); // Target the occasion text
    await act(async () => {
      fireEvent.click(occasionDropdown); // Click to open the dropdown
    });
    const occasionOption = screen.getByText("Birthday");
    await act(async () => {
      fireEvent.click(occasionOption); // Select the occasion
    });

    // Simulate selecting the time
    const timeDropdown = screen.getByTestId("time"); // Target the time text
    await act(async () => {
      fireEvent.click(timeDropdown); // Click to open the dropdown
    });
    const date = new Date("12/31/2024");
    const timeOption = screen.getByText(fetchAPI(date)[0]);
    await act(async () => {
      fireEvent.click(timeOption); // Select the time
    });

    // Simulate user filling out the reservation form
    const nextStepButton = screen.getByRole("button", {
      name: /reserve a table/i,
    });
    await act(async () => {
      fireEvent.click(nextStepButton);
    });

    const firstName = screen.getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { value: "Mohammed" } });

    const lastName = screen.getByLabelText(/last name/i);
    fireEvent.change(lastName, { target: { value: "Eladawi" } });

    const email = screen.getByLabelText(/email/i);
    fireEvent.change(email, { target: { value: "mohammed@gmail.com" } });

    const phone = screen.getByLabelText(/phone/i);
    fireEvent.change(phone, { target: { value: "00201024585724" } });

    const policyAgreement = screen.getByLabelText(
      /Do you agree privacy policy/i
    );
    fireEvent.click(policyAgreement);

    const submitButton = screen.getByRole("button", {
      name: /confirm reservation/i,
    });

    // expect(submitButton).not.toBeDisabled();
    await waitFor(() => expect(submitButton).toBeEnabled());
  });

  test("updatedTime function returns the same provided date in the state when the action is invalid", () => {
    const initialState = [];
    const action = {
      type: "invalid_action",
      payload: {},
    };

    const result = updateTimeReducer(initialState, action);
    expect(result).toEqual(initialState);
  });

  test("updatedTime function returns the same provided date in the state when the action is valid", () => {
    const initialState = [];
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
