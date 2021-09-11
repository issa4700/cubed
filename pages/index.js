import Head from "next/head";
import About from "../components/About";
import Hero from "../components/Hero";
import { meta } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.SiteName}</title>
      </Head>
      <Hero />
      <About />
      <hr className="h-1  container mx-auto" />
    </>
  );
}
