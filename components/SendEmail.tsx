/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { ValidationError, useForm } from "@formspree/react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

const sendEmail = () => {
  const [state, handleSubmit, reset] = useForm("xgegknjw");

  const SubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    handleSubmit(e);
    e.preventDefault();
    const formElement = document.getElementById(
      "SubmitForm"
    ) as HTMLFormElement;
    if (formElement) {
      formElement.reset();
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Thank you for your message!");
    }
  }, [state.succeeded]);

  return (
    <form id="SubmitForm" className="space-y-5" onSubmit={SubmitForm}>
      <div className="flex gap-5 max-tablet:flex-col">
        <input name="firstName" type="text" placeholder="First Name" />
        <input name="lastName" type="text" placeholder="Last Name" />
      </div>
      <div className="flex gap-5 max-tablet:flex-col">
        <input name="email" type="email" placeholder="Email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <input name="subject" type="text" placeholder="Subject" />
      </div>
      <textarea
        name="message"
        placeholder="Message"
        className="min-h-[200px]"
      ></textarea>
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button
        type="submit"
        className="btn btn-primary hover:bg-teal-600 transition-colors duration-200"
        disabled={state.submitting}
      >
        Send
      </button>
    </form>
  );
};

export default sendEmail;
