import React from "react";
import Image from "next/image";
import imgProfil from "../../../public/assets/img/profil/profil_02.jpg";

import { Container } from "./style";
import { Download } from "../../../public/assets/svg/icons";

export default function Profil() {
  return (
    <Container className="main_content" id="profil">
      <div className="punchline">
        <header>
          <h1 className="bigTitle">
            <span>Développeur </span>
            <span>Front-end</span>
          </h1>
          <h2>React.js | Next.js | Javascript | Intégration WEB</h2>
          <blockquote>
            " Inventer les solutions technique pour accompagner les entreprises
            dans leurs transformation digital. "
          </blockquote>
        </header>
        <div className="callToAction">
          <a href="">
            <Download></Download>
            <span>Télécharger mon CV</span>
          </a>
        </div>
      </div>
      <div className="imgProfil">
        <Image
          objectFit="cover"
          placeholder="blur"
          alt=""
          blurDataURL={imgProfil.blurDataURL}
          src={imgProfil.src}
          width={imgProfil.width}
          height={imgProfil.height}
        ></Image>
      </div>
    </Container>
  );
}
