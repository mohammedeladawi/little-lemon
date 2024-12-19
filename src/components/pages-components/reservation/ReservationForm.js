import React, { useEffect, useReducer, useState } from "react";
import Container from "../../grid-system/Container";
import Dropdown from "./form-elements/Dropdown";
import { BeerStein, CalendarDots, Clock, User } from "@phosphor-icons/react";
import styles from "./ReservationForm.module.css";
import Button from "../../ui/buttons/Button";
import Radio from "./form-elements/Radio";
import { fetchAPI, submitAPI } from "../../../utils/api";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "./form-elements/ErrorMessage";

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
  const navigate = useNavigate();

  const {
    values,
    setFieldValue,
    setFieldTouched,
    errors,
    touched,
    handleChange,
    handleSubmit,
    handleBlur,
    isValid,
    dirty,
  } = useFormik({
    initialValues: {
      // Step 1
      seating: "Indoor Seating",
      openDropdown: "",
      date: "",
      time: "",
      occasion: "",
      numberOfDiners: "",
      reserveButton: false, // for step 2

      // Step 2
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      comment: "",
      policyAgreement: "",
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Please select an option."),
      time: Yup.string().required("Please select an option."),
      occasion: Yup.string().required("Please select an option."),
      numberOfDiners: Yup.string().required("Please select an option."),
      firstName: Yup.string().required("First name is required"),
      lastName: Yup.string().required("Last name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string().required("Phone number is required"),
      policyAgreement: Yup.string()
        .oneOf(["agree"], "You must agree to the privacy policy") // Ensure 'agree' is selected
        .required("Please agree to the privacy policy"), // Makes the field required
    }),
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      submitAPI(values) && navigate("confirmed-reservation");
    },
  });

  // Time depends on selected date
  const [timeAvailable, dispatch] = useReducer(updateTimeReducer, []);
  useEffect(() => {
    // Update time by selected date
    if (values.date) {
      dispatch({
        type: "update_times",
        payload: { times: fetchAPI(new Date(values.date)) },
      });
    }
  }, [values.date]);

  // Form Steps
  const [step, setStep] = useState(1);

  const handleNextStep = () => {
    setStep((state) => state + 1);
  };

  const handleBackStep = () => {
    setStep((state) => state - 1);
  };

  return (
    <>
      {/*  Form Step 1 */}
      {step === 1 && (
        <form className={styles["reservation-form-section"]}>
          <div className={styles["reservation-form-section_inputs"]}>
            <Container>
              <h2 className={styles["reservation-form_title"]}>Reservation</h2>

              <div className={styles["reservation-form_inputs"]}>
                <div className={styles["radio"]}>
                  <label htmlFor="indoor">Outdoor Seating</label>
                  <Radio
                    id="indoor"
                    name="seating"
                    value="Indoor Seating"
                    checked={values.seating === "Indoor Seating"}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles["radio"]}>
                  <label htmlFor="outdoor">Outdoor Seating</label>
                  <Radio
                    id="outdoor"
                    name="seating"
                    value="Outdoor Seating"
                    checked={values.seating === "Outdoor Seating"}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles["select"]} id="date-container">
                  <label>
                    Date <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <Dropdown
                    id="date"
                    title="Select Date"
                    icon={<CalendarDots size={24} />}
                    options={generateDateList()}
                    value={values.date}
                    onChange={(value) => setFieldValue("date", value)}
                    isOpen={values.openDropdown}
                    setOpen={(value) => {
                      setFieldValue("openDropdown", value);
                    }}
                    isReserveClicked={touched.reserveButton}
                    errorMsg={errors.date}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>
                    Number of Diners{" "}
                    <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <Dropdown
                    id="diners"
                    title="No. of Diners"
                    icon={<User size={24} />}
                    options={dinerOptions}
                    value={values.numberOfDiners}
                    onChange={(value) => setFieldValue("numberOfDiners", value)}
                    isOpen={values.openDropdown}
                    setOpen={(value) => {
                      setFieldValue("openDropdown", value);
                    }}
                    isReserveClicked={touched.reserveButton}
                    errorMsg={errors.numberOfDiners}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>
                    Occasion{" "}
                    <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <Dropdown
                    id="occasion"
                    title="Occasion"
                    icon={<BeerStein size={24} />}
                    options={occasionOptions}
                    value={values.occasion}
                    onChange={(value) => setFieldValue("occasion", value)}
                    isOpen={values.openDropdown}
                    setOpen={(value) => {
                      setFieldValue("openDropdown", value);
                    }}
                    isReserveClicked={touched.reserveButton}
                    errorMsg={errors.occasion}
                  />
                </div>

                <div className={styles["select"]}>
                  <label>
                    Time <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <Dropdown
                    id="time"
                    title="Time"
                    icon={<Clock size={24} />}
                    options={timeAvailable}
                    value={values.time}
                    onChange={(value) => setFieldValue("time", value)}
                    isOpen={values.openDropdown}
                    setOpen={(value) => {
                      setFieldValue("openDropdown", value);
                    }}
                    isReserveClicked={touched.reserveButton}
                    errorMsg={errors.time}
                  />
                </div>
              </div>
            </Container>
          </div>
          <div className={styles["reservation-form_submit"]}>
            <Button
              buttonTag={"button"}
              addStyle={{ marginTop: "15px" }}
              onClick={() => {
                setFieldTouched("reserveButton", true);
                handleNextStep();
              }}
            >
              Reserve a Table
            </Button>
          </div>
        </form>
      )}

      {/* Form Step 2 */}
      {step === 2 && (
        <form
          className={styles["reservation-form-section"]}
          onSubmit={handleSubmit}
        >
          <div className={styles["reservation-form-section_inputs"]}>
            <Container>
              <div
                className={`${styles["reservation-form_inputs"]} ${styles["second-step"]}`}
              >
                <div>
                  <label htmlFor="first-name">
                    First Name{" "}
                    <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <input
                    className={styles["second-step-input"]}
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder="First Name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.firstName && errors.firstName && (
                    <ErrorMessage>{errors.firstName}</ErrorMessage>
                  )}
                </div>

                <div>
                  <label htmlFor="last-name">
                    Last Name{" "}
                    <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <input
                    className={styles["second-step-input"]}
                    type="text"
                    id="last-name"
                    name="lastName"
                    placeholder="Last Name"
                    value={values.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.lastName && errors.lastName && (
                    <ErrorMessage>{errors.lastName}</ErrorMessage>
                  )}
                </div>

                <div>
                  <label htmlFor="email">
                    Email <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <input
                    className={styles["second-step-input"]}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="yours@email.com"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.email && errors.email && (
                    <ErrorMessage>{errors.email}</ErrorMessage>
                  )}
                </div>

                <div>
                  <label htmlFor="phone">
                    Phone <span className={styles["required-asterisk"]}>*</span>{" "}
                  </label>
                  <input
                    className={styles["second-step-input"]}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="002"
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {touched.phone && errors.phone && (
                    <ErrorMessage>{errors.phone}</ErrorMessage>
                  )}
                </div>

                <div id={styles["first-step-values"]} onClick={handleBackStep}>
                  <div
                    className={`${styles["first-step-value"]} ${
                      values.time ? "" : styles["warning"]
                    }`}
                  >
                    <Clock size={20} />
                    <span>{values.time || "Select Time"} </span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      values.numberOfDiners ? "" : styles["warning"]
                    }`}
                  >
                    <User size={20} />
                    <span>{values.numberOfDiners || "No. of Diners"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      values.occasion ? "" : styles["warning"]
                    }`}
                  >
                    <BeerStein size={20} />
                    <span>{values.occasion || "Occasion"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      values.date ? "" : styles["warning"]
                    }`}
                  >
                    <CalendarDots size={20} />
                    <span>{values.date || "Select Date"}</span>
                  </div>
                  <div
                    className={`${styles["first-step-value"]} ${
                      values.seating ? "" : styles["warning"]
                    }`}
                  >
                    <span>{values.seating}</span>
                  </div>
                </div>
                <div>
                  <label htmlFor="comment">Comment</label>
                  <textarea
                    className={styles["second-step-placeholder"]}
                    placeholder="Comment"
                    id="comment"
                    name="comment"
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div className={styles["radio"]}>
                  <label style={{ display: "flex", alignItems: "center" }}>
                    <Radio
                      name="policyAgreement"
                      value="agree"
                      checked={values.policyAgreement === "agree"}
                      onChange={handleChange}
                    />
                    Do you agree privacy policy
                  </label>
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
              disabled={!(isValid && dirty)}
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
