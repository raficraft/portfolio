import Head from "next/head";
import Header from "../engine/component/Header/Header";
import Profil from "../engine/component/Profil/Profil";
import Projet from "../engine/component/Projet/Projet";
import Skills from "../engine/component/Skills/Skills";
import { GlobalStyle } from "../engine/styled/global";

import { Wrapper_skills } from "../engine/component/Skills/skills_css";

export default function Home() {
  return (
    <section>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <div className="wrapper_inside">
        <Profil></Profil>
        <Projet></Projet>
        <Skills></Skills>
      </div>
    </section>
  );
}
