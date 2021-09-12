import Head from "next/head";
import Team from "../components/Team";
import { meta, team } from "../config";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - {meta.SiteName}</title>
        <meta
          name="description"
          content="Meet the people who keep the server up and running."
        />
      </Head>
      <Team team={team} />
    </>
  );
}
