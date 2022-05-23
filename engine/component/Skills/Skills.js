import React from "react";
import {
  JSIcon_strong,
  NextIcon,
  ReactIcon,
  RestfulIcon,
  SassIcon,
  SqlIcon,
} from "../../../public/assets/svg/icon_tech";
import { Wrapper_hardSkills, Wrapper_softSkills } from "./skills_css";
import assertFirst_img from "../../../public/assets/UI/assertFirst.jpg";
import Image from "next/image";

export default function Skills() {
  return (
    <section className="main_content" id="Skills">
      <Wrapper_hardSkills>
        <header className="header_top">
          <h2 className="title_big">Hard Skills / Soft Skills</h2>
        </header>

        <article>
          <div className="card">
            <header>
              <h2>Mes domaines d'expertises</h2>
            </header>

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
              mes domaines d'expertises. L 'esprit d'un développeur se doit de
              rester en constante évolution et savoir être curieux et un peu
              touche-à-tout. Par exemple <b>Figma</b> pour creéer lse maquettes
              d'UX/UI , les tests unitaires et fonctionels avec <b>Jest</b>. La
              création de diagramme <b>UML</b> pour pouvoir exposer le
              fonctionnement des algorithmes. <b>Node.js et Express</b> pour la
              mise en place d'un <b>serveur back</b>. Et encore, ce ne sont que
              les premiers éléments qui me viennent à l'esprit tant le champ des
              possibles et vaste et immense.
            </p>
          </div>
        </article>
      </Wrapper_hardSkills>
      <hr></hr>
      <Wrapper_softSkills>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <header>
            <h2>Soft skills</h2>

            <p className="text">
              Un bon développeur ce n'est pas seulement un package de
              compétences techniques. C'est aussi les soft skills ou encore "
              <b>compétence personnelle et sociale</b>", orienté vers les
              interaction humaines. Pour la bonne <b>cohésion d'une équipe</b>{" "}
              et pour mener à son terme les projets, ces compétences sont aussi,
              voir plus importantes que les compétences techniques. Elles font
              appel à l'<b>intelligence émotionnelle</b> et jouent un rôle clé
              dans l'épanouissement d'un individu au sein de son environnement.
              C'est avec le service d'
              <a href="https://www.assessfirst.com/fr/" target="_blank">
                <b> assess first </b>
              </a>{" "}
              que j'ai pu trouver un outil complet pour évaluer mon profil.
              Ci-dessous, vous trouverez un résumé du test que j'ai passé et ci
              vous souhaitez accéder au rapport complet, il vous suffit de{" "}
              <a
                href="https://app.assessfirst.com/_/profile/d53utubs-raphael-parodi"
                target="_blank"
              >
                <b> suivre ce lien </b>
              </a>
              .
            </p>
          </header>

          <article className="two_col">
            <div className="box_item">
              <header>
                <h2>Style personel : promoteur</h2>
              </header>

              <p className="text">
                Raphael Parodi apparaît comme quelqu'un de <b>déterminé</b> et{" "}
                <b>volontaire</b>. <b>Proactif</b>, il est toujours à la
                recherche de propositions et d'actions pour faire avancer son
                travail. Il aborde son activité de manière souple et gère
                aisément le changement et les imprévus. La façon engageante avec
                laquelle il présente ses idées laisse peu de place au doute pour
                son interlocuteur :<b>on veut le suivre</b>. Il est doté d'un{" "}
                <b>leadership</b> et d'une volonté de progrès continu qui{" "}
                <b>font de lui un moteur incroyable dans une équipe</b>.
              </p>
              <div className="assessFirst_img">
                <Image
                  objectFit="cover"
                  placeholder="blur"
                  alt="Assessfirst promoteur profil , lead and creativity"
                  blurDataURL={assertFirst_img.blurDataURL}
                  src={assertFirst_img.src}
                  width={assertFirst_img.width}
                  height={assertFirst_img.height}
                ></Image>
              </div>
            </div>

            <div className="box_item">
              <video controls>
                <source src="/assets/video/assessfirst.mp4" type="video/mp4" />
              </video>
            </div>
          </article>

          <hr></hr>

          <article>
            <header>
              <h2>Mes points Fort</h2>
            </header>
            <div className="svg_AND_list">
              <div className="svg_AND_list--item box_item">
                <span className="svg_AND_list--icon">
                  <Handshake></Handshake>
                  <h3>Dans ma relations avec les autres</h3>
                </span>

                <ul className="svg_AND_list--text">
                  <li>
                    l décide en toute autonomie, avance seul dans son travail.
                  </li>
                  <li>
                    Il s'affirme facilement dans ses relations, donne le cap.
                  </li>
                  <li>
                    Il crée facilement le contact avec les autres, se montre
                    avenant.
                  </li>
                </ul>
              </div>
              <div className="svg_AND_list--item box_item">
                <span className="svg_AND_list--icon">
                  <IconIdea></IconIdea>
                  <h3>Dans ma manière de travailler</h3>
                </span>

                <ul className="svg_AND_list--text">
                  <li>
                    Il est réfléchi, aborde les problèmes sous le versant
                    conceptuel.
                  </li>
                  <li>
                    Il s'affirme facilement dans ses relations, donne le cap.
                  </li>
                  <li>
                    Il crée facilement le contact avec les autres, se montre
                    avenant.
                  </li>
                </ul>
              </div>
              <div className="svg_AND_list--item box_item">
                <span className="svg_AND_list--icon">
                  <Heart></Heart>
                  <h3>Dans sa gestion des émotions</h3>
                </span>

                <ul className="svg_AND_list--text">
                  <li>
                    Il dégage de l'enthousiasme, voit les choses positivement
                  </li>
                  <li>
                    Il exprime ses ressentis, communique facilement avec les
                    autres.
                  </li>
                  <li>
                    Il est réactif, possède une énergie forte et un sens de
                    l'urgence.
                  </li>
                </ul>
              </div>
            </div>
          </article>

          <article className="talent_tag">
            <p className="tag">#lead</p>
            <p className="tag">#avenant</p>
            <p className="tag">#critique</p>
            <p className="tag">#autonome</p>
            <p className="tag">#conceptuel</p>
            <p className="tag">#créatif</p>
            <p className="tag">#improvise</p>
            <p className="tag">#tenace</p>
            <p className="tag">#formaliste</p>
            <p className="tag">#enthousiaste</p>
            <p className="tag">#expressif</p>
          </article>
        </div>
      </Wrapper_softSkills>
    </section>
  );
}

export function Handshake(props) {
  return (
    <svg width="1.25em" height="1em" viewBox="0 0 640 512" {...props}>
      <path
        fill="currentColor"
        d="M506.1 127.1c-17.97-20.17-61.46-61.65-122.7-71.1c-22.5-3.354-45.39 3.606-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-79.7 12.31-129.8 79.34-131.9 82.24c-7.844 10.69-5.531 25.72 5.125 33.57a23.858 23.858 0 0 0 14.19 4.657c7.406 0 14.69-3.375 19.38-9.782c.406-.563 40.19-53.91 100.5-63.23c7.457-.961 14.98.67 21.56 4.483L227.2 168.2c-12.4 12.3-20.1 27.9-20.1 46.3c0 17.5 6.812 33.94 19.16 46.29c13.24 12.41 29.64 18.31 47.14 18.31s33.94-6.813 46.31-19.19l11.35-11.35l124.2 100.9c2.312 1.875 2.656 5.251.5 7.97l-27.69 35.75c-1.844 2.25-5.25 2.594-7.156 1.063l-22.22-18.69l-26.19 27.75c-2.344 2.875-5.344 3.563-6.906 3.719c-1.656.156-4.562.125-6.812-1.719l-32.41-27.66L310.7 392.3l-2.812 2.938c-5.844 7.157-14.09 11.66-23.28 12.6c-9.469.813-18.25-1.75-24.5-6.782L170.3 319.8H96V128.3H0v255.6l64 .04c11.74 0 21.57-6.706 27.14-16.14h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.438c13.62-1.406 26.41-6.063 37.47-13.5l.906.813c12.03 9.876 27.28 14.41 42.69 12.78c13.19-1.375 25.28-7.032 33.91-15.35c21.09 8.188 46.09 2.344 61.25-16.47l27.69-35.75c18.47-22.82 14.97-56.48-7.844-75.01l-120.3-97.76l8.381-8.382c9.375-9.376 9.375-24.57 0-33.94c-9.375-9.376-24.56-9.376-33.94 0L285.8 226.8c-6.6 6.7-18.1 6.7-24.7 0c-3.312-3.282-5.125-7.657-5.125-12.31c0-4.688 1.812-9.064 5.281-12.53l85.91-87.64c7.812-7.845 18.53-11.75 28.94-10.03c59.75 9.22 100.2 62.73 100.6 63.29c3.088 4.155 7.264 6.946 11.84 8.376H544v175.1c0 17.67 14.33 32.05 31.1 32.05L640 384V128.1l-133.9-1zM48 352c-8.75 0-16-7.245-16-15.99c0-8.876 7.25-15.99 16-15.99s16 7.18 16 16.08c0 8.7-7.25 15.9-16 15.9zm544 0c-8.75 0-16-7.245-16-15.99c0-8.876 7.25-15.99 16-15.99s16 7.117 16 15.99c0 8.79-7.2 15.99-16 15.99z"
      ></path>
    </svg>
  );
}

export function IconIdea(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 32 32" {...props}>
      <path
        fill="currentColor"
        d="M6.813 2.406L5.405 3.812L7.5 5.906L8.906 4.5L6.812 2.406zm18.375 0L23.093 4.5L24.5 5.906l2.094-2.093l-1.407-1.407zM16 3.03c-.33.004-.664.023-1 .064c-.01 0-.02-.002-.03 0c-4.056.465-7.284 3.742-7.845 7.78c-.448 3.25.892 6.197 3.125 8.095a5.238 5.238 0 0 1 1.75 3.03v6h2.28c.348.597.983 1 1.72 1s1.372-.403 1.72-1H20v-4h.094v-1.188c0-1.466.762-2.944 2-4.093C23.75 17.06 25 14.705 25 12c0-4.94-4.066-9.016-9-8.97zm0 2c3.865-.054 7 3.11 7 6.97c0 2.094-.97 3.938-2.313 5.28l.032.032A7.792 7.792 0 0 0 18.279 22h-4.374c-.22-1.714-.955-3.373-2.344-4.563c-1.767-1.5-2.82-3.76-2.468-6.312c.437-3.15 2.993-5.683 6.125-6.03a6.91 6.91 0 0 1 .78-.064zM2 12v2h3v-2H2zm25 0v2h3v-2h-3zM7.5 20.094l-2.094 2.093l1.407 1.407L8.905 21.5L7.5 20.094zm17 0L23.094 21.5l2.093 2.094l1.407-1.407l-2.094-2.093zM14 24h4v2h-4v-2z"
      ></path>
    </svg>
  );
}

export function Heart(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35Z"
      ></path>
    </svg>
  );
}
