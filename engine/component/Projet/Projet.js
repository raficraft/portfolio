import React, { useState, useEffect, useRef, createRef } from "react";
import { project_data } from "../../data/projet/projet_data";
import { Wrapper_project } from "./style";
import useGetImage from "../../hooks/files/useGetImage";
import { Computer, Github } from "../../../public/assets/svg/icons";
import Image from "next/image";

export default function Projet() {
  const [filter, setFilter] = useState("react");
  const [project, setProject] = useState(
    project_data.filter((x) => x.type === filter && x.active === true)
  );
  const [filesInfo, loading] = useGetImage(["badge/"]);

  function handleChange(e) {
    setFilter(e.target.value);
    setProject(project_data.filter((x) => x.type === e.target.value));
  }

  function listProject() {
    return project
      .filter((x) => x.active === true)
      .map((projet, key) => {
        return (
          <div className="sticker" key={key}>
            <div
              className="sticker_img"
              style={{
                backgroundImage: `url('/assets/img/${projet.img}socialCard.jpg')`,
              }}
            ></div>
            <article>
              <header>
                <h2 className="sticker_title">{projet.title}</h2>
              </header>

              <footer>
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

                <span className="list_badge">
                  {projet.tech.map((el, key) => {
                    return <p>{el}</p>;
                  })}
                </span>
              </footer>
            </article>
            <div className="sticker_desc">
              <p dangerouslySetInnerHTML={{ __html: projet.desc }}></p>
              {projet.codacy && (
                <p
                  className="codacy_icon"
                  dangerouslySetInnerHTML={{ __html: projet.codacy }}
                ></p>
              )}
            </div>
          </div>
        );
      });
  }

  return (
    <Wrapper_project className="main_content" id="projet">
      <header className="projet_header">
        <h2>Mes Projets</h2>
        <p>
          Découvrez dans cette section mes différents <b>projets perso</b> ainsi
          que ceux effectué durant ma formation en distanciel via
          OpenClassrooms.
          <br></br>
          Vous pouvez suivre ce{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>lien</b>
          </a>{" "}
          pour accéder à la totalité de mes projets public sur mon repo{" "}
          <a href="https://github.com/raficraft" target="_blank">
            <b>github</b>
          </a>
          .
        </p>
        <hr></hr>
        <aside>
          <div>
            <label for="pet-select">Filtrer les projets:</label>

            <select
              name="pets"
              id="pet-select"
              onChange={(e) => {
                handleChange(e);
              }}
            >
              <option value="react">React</option>
              <option value="native">Javascript</option>
              <option value="integration">integration</option>
              <option value="autodidacte">Autodidacte</option>
            </select>
          </div>

          <p>{`${project.length} ${
            project.length > 1 ? "projets" : "projet"
          } ${filter}`}</p>
        </aside>
      </header>

      <div className="listProject">{listProject()}</div>
    </Wrapper_project>
  );
}
