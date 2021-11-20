import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";
import gamedev from "../img/game-dev.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Habilidades"} span={"Habilidades"} />
        <div className="services">
          <ServiceCard
            image={design}
            title={"Desarrollo Frontend"}
            paragraph={
              "Creación de interfases gráficas con las cuales el usuario final puede interactuar, con el uso de tecnologías web como HTML, CSS, JavaScript y librerías relacionadas.  "
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={intelligence}
              title={"Desarrollo Backend"}
              paragraph={
                "Desarrollo de la lógica de programación que ocurre por detrás de lo que el usuario puede mirar o interactuar gráficamente, integración con bases y otros servicio del lado del servidor. "
              }
            />
          </div>
          <ServiceCard
            image={gamedev}
            title={"Capacidad de comunicación "}
            paragraph={
              "Gracias a mi educación como psicólogo he desarrollado muy bien mis habilidades blandas, permitiéndome gran asertividad, manejo de conflictos, trabajo en grupo, autogestión, entre otras. "
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
