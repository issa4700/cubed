import React from "react";
import ContactForm from "../components/Contact/ContactForm";

export default function Contact() {
  return (
    <>
      <section className="text-gray-600 h-0">
        <img
          src="/images/mc.jpg"
          className="absolute object-cover h-full w-full"
        />
      </section>
      <ContactForm />
    </>
  );
}
