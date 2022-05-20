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
        <header>
          <h2 className="title_big">Hard Skills / Soft Skills</h2>
          <p className="text">
            Aliqua nostrud commodo anim quis ipsum officia aliqua magna
            cupidatat laborum eu pariatur aliquip. Aliquip nostrud consectetur
            consequat est id minim occaecat ipsum proident incididunt. Officia
            Lorem nostrud eiusmod amet veniam sint sunt do. Deserunt labore
            minim duis quis minim id labore. Enim voluptate magna laborum
            laboris veniam ea aute incididunt non aliquip minim culpa. Elit
            incididunt exercitation ex aliqua fugiat reprehenderit sint. Velit
            duis nostrud aliqua proident ex qui irure ea.
          </p>
        </header>

        <hr></hr>

        <article>
          <div className="card">
            <header>
              <h2>Domaine d'expertise</h2>
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
                {<RestfulIcon color={"dark"} />}
                <p>RestFul API</p>
              </li>
              <li className="listSvg_item  listSvg_item--text">
                <p className="icon_text">{`{ Orienté objet }`}</p>
                <p>POO</p>
              </li>
            </ul>

            <p class="text">
              Ensuite, il y tout les sujets connexes qui tournent autour de mes
              domaines d'expertises. L 'esprit d'un développeur ce doit de
              garder un esprit en constante évolution et savoir être curieux et
              un peu touche à tout. Par exemple <b>Figma</b> pour le maquettage
              d'UX/UI , les tests unitaires et fonctionelle avec <b>jest</b>. La
              création de diagramme <b>UML</b> pour pouvoir exposer le
              fonctionnement des algorithmes. <b>Node.js et Express</b> pour la
              mise en place d'un <b>serveur back</b>. Et encore, ce ne sont que
              les premiers élément qui me viennent à l'esprit tant le champs des
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
          </header>

          <article className="two_col">
            <div className="box_item">
              <header>
                <h2>Style personel : promoteur</h2>
              </header>

              <p className="text">
                Raphael Parodi apparaît comme quelqu'un de <b>déterminé</b> et
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
                  alt=""
                  blurDataURL={assertFirst_img.blurDataURL}
                  src={assertFirst_img.src}
                  width={assertFirst_img.width}
                  height={assertFirst_img.height}
                ></Image>
              </div>
            </div>
          </article>
        </div>

        <hr></hr>

        {/* <article>
          <h2 className="text_uppecase">Mes points forts</h2>

          <div className="icon_AND_list">
            <ReactIcon></ReactIcon>
            <ul className="bullet_point">
              <p>Dans ma relation avec les autres</p>
              <li>
                Je décide en toute <b>autonomie</b>, avance seul dans mon
                travail.
              </li>
              <li>
                Je m'affirme facilement dans mes relations, <b>donne le cap</b>.
              </li>
              <li>
                Je crée facilement le contact avec les autres,{" "}
                <b>me montre avenant</b>.
              </li>
            </ul>
          </div>
        </article> */}
      </Wrapper_softSkills>
    </section>
  );
}

{
  /* <div className="box_item">
<div className="box_item--iframe">
  <iframe
    src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fassessfirst%2Fvideos%2F323300835110566%2F&show_text=false&t=0"
    scrolling="no"
    frameborder="0"
    allowfullscreen="true"
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    allowFullScreen="true"
  ></iframe>
</div>
</div> */
}
