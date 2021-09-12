import Head from "next/head";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Plugins from "../components/Plugins";
import { meta } from "../config";

export default function Home() {
  return (
    <>
      <Head>
        <title>{meta.SiteName}</title>
        <meta
          name="description"
          content="Cube Survival is an invite-only surivial SMP spawned from a group of dedicated players."
        />
      </Head>
      <Hero />
      <About />
      <hr className="h-1 container mx-auto" />
      <Plugins />
      <hr className="h-1 container mx-auto" />
      <Gallery />
    </>
  );
}
