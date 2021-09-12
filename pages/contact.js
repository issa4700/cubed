import React from "react";
import ContactForm from "../components/Contact/ContactForm";
import Head from "next/head";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta
          name="description"
          content="Contact us for any inquiries except those regarding bans or whitelist applications."
        />
      </Head>
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
