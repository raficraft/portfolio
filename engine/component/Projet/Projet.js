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
              <header>
                <h2 className="sticker_title">{projet.title}</h2>
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
          Découvrez dans cette section mes différents <b>projets perso</b> ainsi
          que ceux effectué durant ma formation en distanciel via
          OpenClassrooms.
          <br></br>
          Vous pouvez suivre ce{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>lien</b>
          </a>{" "}
          pour accéder à la totalité de mes projets public sur mon{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>Github</b>
          </a>
          .
        </p>

        <ul className="bullet_point">
          <li>5 projets react</li>
          <li>5 projets en vanilla JS</li>
          <li>3 projets d'intégration </li>
          <li>
            Projet autodidacte par lequel j'ai tout appris valeur éstimé à 48
            millions de dollar. ^^{" "}
          </li>
        </ul>

        <p className="text">
          Pour un total de <b>9 side project</b> et{" "}
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

      <div className="listProject">{!loading && listProject()}</div>
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
