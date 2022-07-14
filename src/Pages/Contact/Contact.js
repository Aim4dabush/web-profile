import React from "react";

//hooks
import { useValidation } from "../../Hooks/UseValidation";

//styles
import { ContactContainer } from "../../StyledComponents/Container";
import { ContactTitle } from "../../StyledComponents/Title";
import { Form } from "../../StyledComponents/Form";
import { PageImg } from "../../StyledComponents/Img";

function Contact() {
  const {
    value: company,
    isValid: companyValid,
    error: companyError,
    handleOnBlur: companyOnBlur,
    handleOnChange: companyOnChange,
    reset: companyReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: firstName,
    isValid: firstNameValid,
    error: firstNameError,
    handleOnChange: firstNameOnChange,
    handleOnBlur: firstNameOnBlur,
    reset: firstNameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: lastName,
    isValid: lastNameValid,
    error: lastNameError,
    handleOnChange: lastNameOnChange,
    handleOnBlur: lastNameOnBlur,
    reset: lastNameReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: email,
    isValid: emailValid,
    error: emailError,
    handleOnChange: emailOnChange,
    handleOnBlur: emailOnBlur,
    reset: emailReset,
  } = useValidation((value) => value.includes("@"));
  const {
    value: phoneNumber,
    isValid: phoneNumberValid,
    error: phoneNumberError,
    handleOnChange: phoneNumberOnChange,
    handleOnBlur: phoneNumberOnBlur,
    reset: phoneNumberReset,
  } = useValidation((value) => value.trim() !== "");
  const {
    value: notes,
    isValid: notesValid,
    error: notesError,
    handleOnChange: notesOnChange,
    handleOnBlur: notesOnBlur,
    reset: notesReset,
  } = useValidation((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    companyValid &&
    firstNameValid &&
    lastNameValid &&
    emailValid &&
    phoneNumberValid &&
    notesValid
  ) {
    formIsValid = true;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const formData = {
        company: company,
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        notes: notes,
      };
      console.log(formData);
      companyReset();
      firstNameReset();
      lastNameReset();
      emailReset();
      phoneNumberReset();
      notesReset();
    }
  };

  const companyClassName = companyError ? "error" : null;
  const firstNameClassName = firstNameError ? "error" : null;
  const lastNameClassName = lastNameError ? "error" : null;
  const emailClassName = emailError ? "error" : null;
  const phoneNumberClassName = phoneNumberError ? "error" : null;
  const notesClassName = notesError ? "error" : null;

  return (
    <ContactContainer>
      <PageImg src={process.env.PUBLIC_URL + "/images/makapuu2.png"} />
      <ContactTitle>Contact</ContactTitle>
      <Form onSubmit={handleOnSubmit}>
        <div className="form-control">
          <label htmlFor="company">Company:</label>
          <input
            className={companyClassName}
            id="company"
            name="company"
            type="text"
            value={company}
            onBlur={companyOnBlur}
            onChange={companyOnChange}
          />
          {companyError && <p>Please fill in company name!</p>}
        </div>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="firstName">First Name:</label>
            <input
              className={firstNameClassName}
              id="firstName"
              name="firstName"
              type="text"
              value={firstName}
              onBlur={firstNameOnBlur}
              onChange={firstNameOnChange}
            />
            {firstNameError && <p>Please fill in first name!</p>}
          </div>
          <div className="form-control">
            <label htmlFor="lastName">Last Name:</label>
            <input
              className={lastNameClassName}
              id="lastName"
              name="lastName"
              type="text"
              onBlur={lastNameOnBlur}
              onChange={lastNameOnChange}
            />
            {lastNameError && <p>Please fill in last name!</p>}
          </div>
        </div>
        <div className="form-group">
          <div className="form-control">
            <label htmlFor="email">Email:</label>
            <input
              className={emailClassName}
              id="email"
              name="email"
              type="text"
              value={email}
              onBlur={emailOnBlur}
              onChange={emailOnChange}
            />
            {emailError && <p>Email not valid!</p>}
          </div>
          <div className="form-control">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input
              className={phoneNumberClassName}
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={phoneNumber}
              onBlur={phoneNumberOnBlur}
              onChange={phoneNumberOnChange}
            />
            {phoneNumberError && <p>Please fill in phone number!</p>}
          </div>
        </div>
        <div className="form-control">
          <label htmlFor="notes">Notes:</label>
          <textarea
            className={notesClassName}
            cols={`10`}
            name="notes"
            rows={`10`}
            value={notes}
            onBlur={notesOnBlur}
            onChange={notesOnChange}
          />
          {notesError && <p>Please leave a note!</p>}
        </div>
        <button>Submit</button>
      </Form>
    </ContactContainer>
  );
}

export default Contact;
