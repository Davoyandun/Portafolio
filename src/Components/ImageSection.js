import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";
import CV from "../img/CV.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          YO soy <span>David Yandún</span>
        </h4>
        <p className="paragraph">
          He tomado la decisión de reorientar mi futuro profesional al mundo de 
          la tecnología, el cambio siempre es atemorizante y mentiría si digo
          que no tuve miedo, pero más miedo me da no seguir mis sueños. <br/>
          Soy psicólogo clínico y disfruto trabajar con personas, sin embargo desde
          pequeño soy un apasionado con la tecnología y los problemas de lógica
          y por diversas razones no pude seguir mi sueño desde un inicio.<br/>
          Considero que el cambio es un signo de capacidad de superación y, por
          ello, creo que siempre sería capaz de aportar valor en la empresa en
          la que me encuentre.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Nombres</p>
            <p>Apellidos</p>
            <p>Edad</p>
            <p>Nacionalidad </p>
            <p>Idiomas </p>
            <p>Localización</p>
          </div>
          <div className="info">
            <p>: Kleber David</p>
            <p>: Yandún Erazo</p>
            <p>: 28</p>
            <p>: Ecuatoriana</p>
            <p>:Español,English</p>
            <p>: Quito, Ecuador</p>
          </div>
        </div>
        <PrimaryButton
          title={"Download Cv"}
          fire={CV}
          fireName={"CV David Yandún"}
        />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
