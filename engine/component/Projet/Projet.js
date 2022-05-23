import React, { useState } from "react";
import { project_data } from "../../data/projet/projet_data";
import { Wrapper_project } from "./projet_css";
import useGetImage from "../../hooks/files/useGetImage";
import { Computer, Github } from "../../../public/assets/svg/icons";
import { useScrollObserver } from "../../hooks/useScrollObserver";
import Image from "next/image";

export default function Projet() {
  const [filter, setFilter] = useState("react");
  const [project, setProject] = useState(
    project_data.filter((x) => x.type === filter && x.active === true)
  );
  const [filesInfo, loading] = useGetImage(["project/group/"]);

  function handleChange(e) {
    setFilter(e.target.value);
    setProject(
      project_data.filter((x) => x.type === e.target.value && x.active === true)
    );
  }

  function listProject() {
    return project
      .filter((x) => x.active === true)
      .map((projet, key) => {
        const img = filesInfo.find((x) => x.src.includes(projet.projet));

        return (
          <div
            className="sticker"
            key={key}
            style={{
              animationDelay: ` ${key * 0.15}s`,
            }}
          >
            <div className="sticker_img">
              <Image
                objectFit="cover"
                placeholder="blur"
                src={img.src}
                width={img.width}
                height={img.height}
                blurDataURL={img.blurDataURL}
                alt={`Illustration du projet ${projet.name}`}
              ></Image>
            </div>
            <article>
              <header className="sticker_header">
                <h2 className="sticker_title">{projet.title}</h2>
                <span className="sticker_icon">
                  <ComputerIcon></ComputerIcon>

                  {projet.responsive && (
                    <>
                      <SmartphoneIcon></SmartphoneIcon>
                      <TabletIcon></TabletIcon>
                    </>
                  )}
                </span>
              </header>

              <div className="list_badge">
                {projet.tech.map((el, key) => {
                  return (
                    <p key={key} style={{ color: color_tech[el] }}>
                      {el}
                    </p>
                  );
                })}
              </div>

              <div className="sticker_desc text">
                <p dangerouslySetInnerHTML={{ __html: projet.desc }}></p>
              </div>

              <div className="sticker_link">
                {projet.demo && (
                  <span className="link_icon">
                    <a href={projet.demo} target="_blank">
                      Démo du site
                    </a>
                    <Computer></Computer>
                  </span>
                )}
                {projet.github && (
                  <span className="link_icon">
                    <Github></Github>
                    <a href={projet.github} target="_blank">
                      Github
                    </a>
                  </span>
                )}
                {projet.video && (
                  <span className="link_icon">
                    <a href={projet.video} target="_blank">
                      Video youtube
                    </a>
                  </span>
                )}
              </div>

              <footer>
                {projet.codacy && (
                  <p
                    className="codacy_icon"
                    dangerouslySetInnerHTML={{ __html: projet.codacy }}
                  ></p>
                )}
              </footer>
            </article>
          </div>
        );
      });
  }

  return (
    <Wrapper_project className="main_content" id="projet">
      <header className="project_header">
        <h2 className="title_big">Mes Projets</h2>
        <p className="text">
          Découvrez dans cette section mes différents <b>projets persos</b>{" "}
          ainsi que ceux effectués durant ma formation en distanciel via
          OpenClassrooms.
          <br></br>
          Vous pouvez suivre ce{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>lien</b>
          </a>{" "}
          pour accéder à la totalité de mes projets publics sur mon{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>Github</b>
          </a>
          .
        </p>

        <ul className="bullet_point">
          <li>5 projets react</li>
          <li>5 projets en vanilla JS</li>
          <li>4 projets d'intégration </li>
          <li>
            Projet autodidacte par lequel j'ai tout appris valeur éstimée à 48
            millions de dollar. ^^{" "}
          </li>
        </ul>

        <p className="text">
          Pour un total de <b>11 side projects</b> et{" "}
          <b>4/11 des projets professionalisant</b> effectué durant ma formation{" "}
          <b>OCR</b>.<br></br>
          Parmit eux un projet client mené de bout en bout de la conception à la
          mise en production.
        </p>

        <hr></hr>
        <aside>
          <div>
            <label htmlFor="pet-select">Filtrer les projets:</label>

            <select
              name="pets"
              id="pet-select"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="react">React</option>
              <option value="javascript">Javascript</option>
              <option value="integration">integration</option>
              <option value="autodidacte">Autodidacte</option>
            </select>
          </div>

          <p>
            <b>{`${project.length}`}</b>{" "}
            {`${project.length > 1 ? "projets" : "projet"} ${filter}`}
          </p>
        </aside>
      </header>

      <div className="listProject">
        {!loading ? listProject() : <p>LOADING...</p>}
      </div>
    </Wrapper_project>
  );
}

const color_tech = {
  js: "orange",
  react: "#1b9fff",
  firebase: "purple",
  next: "#00a277",
  sass: "#fa70ab",
  html: "orange",
  css: "#6470ff",
  sql: "",
  php: "purple",
  jquery: "blue",
  npm: "#A93226",
  poo: "purple",
};

export function TabletIcon(props) {
  return (
    <svg width="0.79em" height="1em" viewBox="0 0 25 32" {...props}>
      <g fill="currentColor">
        <path d="M1.5 32h22c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-22C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5zM1 1.5a.5.5 0 0 1 .5-.5h22a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-22a.5.5 0 0 1-.5-.5v-29z"></path>
        <path d="M3.5 27h18a.5.5 0 0 0 .5-.5v-23a.5.5 0 0 0-.5-.5h-18a.5.5 0 0 0-.5.5v23a.5.5 0 0 0 .5.5zM4 4h17v22H4V4z"></path>
        <circle cx="13" cy="29" r="1"></circle>
      </g>
    </svg>
  );
}

export function SmartphoneIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 1024 1024" {...props}>
      <path
        fill="currentColor"
        d="M704.144 0H319.856c-53.024 0-96 42.976-96 96v832c0 53.024 42.976 96 96 96h384.288c53.024 0 96-42.976 96-96V96c0-53.024-42.976-96-96-96zm32 928c0 17.664-14.336 32-32 32H319.856c-17.664 0-32-14.336-32-32V96c0-17.664 14.336-32 32-32h384.288c17.664 0 32 14.336 32 32v832zM512.048 800.176c-35.28 0-63.84 28.592-63.84 63.824s28.576 63.841 63.84 63.841c35.28 0 63.84-28.608 63.84-63.84c0-35.233-28.56-63.825-63.84-63.825zm64-704.176h-128c-17.664 0-32 14.336-32 32s14.336 32 32 32h128c17.664 0 32-14.336 32-32s-14.336-32-32-32z"
      ></path>
    </svg>
  );
}

export function ComputerIcon(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 512 512" {...props}>
      <path
        fill="currentColor"
        d="M40 392h200v72h-80v32h192v-32h-80v-72h200a24.028 24.028 0 0 0 24-24V72a24.028 24.028 0 0 0-24-24H40a24.028 24.028 0 0 0-24 24v296a24.028 24.028 0 0 0 24 24Zm8-312h416v280H48Z"
      ></path>
    </svg>
  );
}
