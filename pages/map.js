import React from "react";
import Head from "next/head";
import Iframe from "react-iframe";
import { map } from "../config";

export default function Map() {
  return (
    <>
      <Head>
        <title>Interactive Map</title>
      </Head>
      <section className="">
        <Iframe
          url={map?.url}
          sandbox=""
          className="absolute top-0 left-0 w-full h-full"
        />
      </section>
    </>
  );
}
