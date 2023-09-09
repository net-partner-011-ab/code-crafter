"use client";

import { useState } from "react";
import sendEmail from "../config/contact";
import { validateName } from "../validation/nameValidation";
import { validateEmail } from "../validation/emailValidation";

export default function ContactForm() {
  const [firstNameFocus, setFirstNameFocus] = useState("");
  const [lastNameFocus, setLastNameFocus] = useState("");
  const [emailFocus, setEmailFocus] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isFormValidMessage, setIsFormValidMessage] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "firstName" || name === "lastName") {
      if (validateName(value)) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      }
    } else if (name === "email") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else if (name === "message") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const isFormValid = () => {
    const isFirstNameValid = validateName(formData.firstName);
    const isLastNameValid = validateName(formData.lastName);
    const isEmailValid = validateEmail(formData.email);

    return isFirstNameValid && isLastNameValid && isEmailValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setFormMessage("The form is not valid. Fill in all mandatory fields.");
      setIsFormValidMessage(false);

      setTimeout(() => {
        setFormMessage("");
      }, 3000);
      return;
    }

    try {
      await sendEmail(formData);

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
      });

      setFirstNameFocus("");
      setLastNameFocus("");
      setEmailFocus("");

      setFormMessage("Message sent successfully. We will answer you soon.");
      setIsFormValidMessage(true);

      setTimeout(() => {
        setFormMessage("");
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section className="section has-background-black-ter	">
      <div className="container">
        <form
          method="post"
          role="form"
          className="contact-form"
          onSubmit={handleSubmit}
        >
          <div className={`field ${firstNameFocus}`}>
            <label className="label has-text-white">First Name</label>
            <div className="control">
              <input
                className="input pl-4"
                type="text"
                placeholder="First name"
                name="firstName"
                onChange={handleChange}
                onFocus={() => setFirstNameFocus("")}
                onBlur={() => setFirstNameFocus("")}
                value={formData.firstName}
                required
              />
            </div>
          </div>
          <div className={`field ${lastNameFocus}`}>
            <label className="label has-text-white">Last Name</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input pl-4"
                type="text"
                placeholder="Last name"
                name="lastName"
                onChange={handleChange}
                onFocus={() => setLastNameFocus("")}
                onBlur={() => setLastNameFocus("")}
                value={formData.lastName}
                required
              />
            </div>
          </div>
          <div className={`field ${emailFocus}`}>
            <label className="label has-text-white">Email</label>
            <div className="control has-icons-left has-icons-right">
              <input
                className="input pl-4"
                type="email"
                placeholder="Your email"
                name="email"
                onChange={handleChange}
                onFocus={() => setEmailFocus("")}
                onBlur={() => setEmailFocus("")}
                value={formData.email}
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label has-text-white">Message</label>
            <div className="control">
              <textarea
                className="textarea pl-4"
                placeholder="Your message..."
                name="message"
                type="textarea"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className="button is-success" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
        {formMessage && (
          <div
            className={`mt-4 notification ${isFormValidMessage ? "is-success" : "is-danger"
              }`}
          >
            {formMessage}
          </div>
        )}
      </div>
    </section>
  );
}
