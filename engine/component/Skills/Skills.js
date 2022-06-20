import React from "react";
import {
  JSIcon_strong,
  NextIcon,
  ReactIcon,
  RestfulIcon,
  SassIcon,
  SqlIcon,
  IconJest,
  IconsTestinglibrary,
} from "../../../public/assets/svg/icon_tech";
import { Wrapper_hardSkills, Wrapper_softSkills } from "./skills_css";
import assertFirst_img from "../../../public/assets/UI/assertFirst.jpg";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="main_content" id="Skills">
      <Wrapper_hardSkills>
        <header className="header_top">
          <h2 className="title_big">Hard Skills</h2>
        </header>

        <article>
          <div className="card">
            <ul className="listSvg">
              <li className="listSvg_item">
                {<JSIcon_strong></JSIcon_strong>}
                <p>Javascript</p>
              </li>
              <li className="listSvg_item">
                {<ReactIcon></ReactIcon>}
                <p>React.js</p>
              </li>
              <li className="listSvg_item">
                {<NextIcon />}
                <p>Next.js</p>
              </li>
              <li className="listSvg_item">
                {<SqlIcon></SqlIcon>}
                <p>SQL</p>
              </li>
              <li className="listSvg_item">
                {<SassIcon />}
                <p>Sass</p>
              </li>
              <li className="listSvg_item">
                {<RestfulIcon color={"#4A5859"} />}
                <p>RestFul API</p>
              </li>
              <li className="listSvg_item">
                {<IconJest color={"#4A5859"} />}
                <p>Jest</p>
              </li>
              <li className="listSvg_item">
                {<IconsTestinglibrary color={"#4A5859"} />}
                <p>Testing Library</p>
              </li>
              <li className="listSvg_item  listSvg_item--text">
                <p
                  className="icon_text"
                  style={{ color: "#4A5859" }}
                >{`{ Orienté objet }`}</p>
                <p>POO</p>
              </li>
            </ul>

            <p className="text">
              Ensuite, il y a tous les sujets connexes qui tournent autour de
              mes domaines d'expertises. L'esprit d'un développeur se doit de
              rester en constante évolution et de savoir être curieux et un peu
              touche-à-tout. Par exemple <b>Figma</b> pour créer les maquettes
              d'UX/UI , les tests unitaires et fonctionnels avec <b>Jest</b>. La
              création de diagramme <b>UML</b> pour pouvoir exposer le
              fonctionnement des algorithmes. <b>Node.js et Express</b> pour la
              mise en place d'un <b>serveur back</b>. Et encore, ce ne sont que
              les premiers éléments qui me viennent à l'esprit tant le champ des
              possibles est vaste et immense.
            </p>
          </div>
        </article>
      </Wrapper_hardSkills>
      <hr></hr>
    </section>
  );
}
