import React from "react";
import Image from "next/image";
import imgProfil from "../../../public/assets/img/profil/profil_01.jpg";

import { Container } from "./profil_css";
import { Download } from "../../../public/assets/svg/icons";

export default function Profil() {
  return (
    <Container className="main_content" id="profil">
      <div className="punchline">
        <header>
          <div>
            <h1 className="bigTitle">
              <span>Développeur </span>
              <span>Front-end</span>
            </h1>
            <h2>React.js | Next.js | Javascript | Intégration WEB</h2>
          </div>
          <blockquote className="text">
            " Evaluer et analyser les besoins en transformation digitale des
            entreprises pour concevoir des solutions maintenables, scalables et
            élégantes. "
          </blockquote>
        </header>
        <div className="callToAction">
          <a href="/assets/doc/CV_r.parodi_06_22.pdf" target="_blank">
            <Download></Download>
            <span>Télécharger mon CV</span>
          </a>
        </div>
      </div>
      <div className="imgProfil">
        <Image
          objectFit="cover"
          placeholder="blur"
          blurDataURL={imgProfil.blurDataURL}
          src={imgProfil.src}
          width={imgProfil.width}
          height={imgProfil.height}
          alt="Portrait noir et blanc de Parodi Raphaël, développeur Front-end javascript"
        ></Image>
      </div>
    </Container>
  );
}
