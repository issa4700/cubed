import Head from "next/head";
import Team from "../components/Team";
import { meta, team } from "../config";

export default function About() {
  return (
    <>
      <Head>
        <title>About Us - {meta.SiteName}</title>
      </Head>
      <Team team={team} />
    </>
  );
}
