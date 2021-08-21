import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import { meta } from "../config";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - {meta.SiteName}</title>
      </Head>
    </>
  );
}
