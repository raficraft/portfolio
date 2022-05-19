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
          <h2>Hard Skills / Soft Skills</h2>
          <p>
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
          <div class="card">
            <header>
              <h2>Maitrises</h2>
            </header>

            <ul className="listSvg">
              <li className="listSvg_item">
                {<JSIcon_strong></JSIcon_strong>}
              </li>
              <li className="listSvg_item">{<ReactIcon></ReactIcon>}</li>
              <li className="listSvg_item">{<NextIcon />}</li>
              <li className="listSvg_item">{<SqlIcon></SqlIcon>}</li>
              <li className="listSvg_item">{<SassIcon />}</li>
              <li className="listSvg_item">{<RestfulIcon color={"dark"} />}</li>
              <li className="listSvg_item text_2r">{`{ Orienté objet }`}</li>
            </ul>
          </div>
        </article>
      </Wrapper_hardSkills>
      <hr></hr>
      <Wrapper_softSkills>
        <div>
          <header>
            <h2>Soft skills</h2>
          </header>

          <article>
            <div>
              <ul className="bullet_point">
                <li>Empathie</li>
                <li>Curiosité</li>
                <li>Résilience</li>
                <li>Esprit critique</li>
                <li>Intelligence emotionelle</li>
              </ul>

              <ul className="bullet_point">
                <li>Gestion du stress</li>
                <li>Gestion du temps</li>
                <li>Esprit d'entreprendre</li>
                <li>Motivation</li>
              </ul>

              <a href="#" target="_blank">
                Mon profil complet evalué par assertFirst
              </a>
            </div>
            <div>
              <iframe
                src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fassessfirst%2Fvideos%2F323300835110566%2F&show_text=false&width=476&t=0"
                width="476"
                height="476"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                allowFullScreen="true"
              ></iframe>
            </div>
          </article>
        </div>
        <article>
          <div>
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

          <div>
            <header>
              <h2>Style personel : promoteur</h2>
            </header>

            <p>
              Raphael Parodi apparaît comme quelqu'un de <b>déterminé</b> et
              <b>volontaire</b>. <b>Proactif</b>, il est toujours à la recherche
              de propositions et d'actions pour faire avancer son travail. Il
              aborde son activité de manière souple et gère aisément le
              changement et les imprévus. La façon engageante avec laquelle il
              présente ses idées laisse peu de place au doute pour son
              interlocuteur : on veut le suivre. Il est doté d'un leadership et
              d'une volonté de progrès continu qui font de lui un moteur
              incroyable dans une équipe.
            </p>
          </div>
        </article>

        <hr></hr>

        <article>
          <h2 className="text_uppecase">Ses points forts</h2>

          <div>
            <ReactIcon></ReactIcon>
            <ul>
              <p>Dans sa relation avec les autres</p>
              <li>
                <span>{">"}</span>
                Il décide en toute <b>autonomie</b>, avance seul dans son
                travail.
              </li>
              <li>
                <span>{">"}</span>
                Il s'affirme facilement dans ses relations, <b>donne le cap</b>.
              </li>
              <li>
                <span>{">"}</span>
                Il crée facilement le contact avec les autres,{" "}
                <b>se montre avenant</b>.
              </li>
            </ul>
          </div>
        </article>
      </Wrapper_softSkills>
    </section>
  );
}
