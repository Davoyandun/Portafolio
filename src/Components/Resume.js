import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <Title title={"Resumen"} span={"Resumen"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Experiencia de Trabajo"} />
        </div>
        <div className="resume-content">
        <ResumeItem
            year={"2019 - 2020"}
            title={"Psicólogo Clínico "}
            subTitle={"Centro de Atención CAPYA"}
            text={
              "Encargado de realizar evaluaciones psicopedagógicas a niños y adolescentes con diversos problemas de aprendizaje y seguimiento escolar velando para que se cumplan las adaptaciones curriculares necesarias.  "
            }
          />
          <ResumeItem
            year={"2019 - 2021"}
            title={"Psicólogo Clínico "}
            subTitle={"Fundación Cerebec"}
            text={
              "Evaluación, diagnóstico, tratamiento y seguimiento de pacientes con diversas patologías psicológicas. Elaboración de informes psicológicos para empresas e instituciones educativas. "
            }
          />
          <ResumeItem
            year={"2021 - 2021 "}
            title={"Full Stack Developer"}
            subTitle={"Bootcamp Soy Henry"}
            text={
              `Intensivo programa de formación  con +800 hrs de programación de software  con tecnologías como HTML5, CSS3, JavaScript, React, Node.js, Express.js. Realización de proyectos reales tanto de forma individual así como de trabajo colaborativo con otros desarrolladores. `
            }
          />
          <ResumeItem
            year={"2021- 2021"}
            title={"SPA PokeApi"}
            subTitle={"Proyecto Individual Soy Henry"}
            text={
              "Consume API en backend realizado con Node.Js y Express.Js, para el frontend es una SPA realizada en React, Redux, CSS3 puro. Algunas feactures son: filtrado por tipo de Pokémon, y tipo de creación, ordenamientos por ataque y nombre, cache de búsqueda por nombre, formulario controlado para la creación de nuevos elementos que se guardan en una Database PostgresSQL."
            }
          />
          <ResumeItem
            year={"2021- 2021"}
            title={"Ecommerce Salvatore "}
            subTitle={"Proyecto Grupal Soy Henry"}
            text={
              "Este es un proyecto colaborativo, de un grupo de 7 desarrolladores para una tienda de productos saludables, cuenta con características como: Gestión del stock de productos, diversos tipos de filtrado, carrito de compras, Log-in de usuario, dashboard de administrador, correos de confirmación de compras, entre otras"
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Educación"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2015 - 2020"}
            title={"Psicólogo Clínico "}
            subTitle={"Universidad Central Del Ecuador"}
            text={
              "Evaluación, Diagnóstico y Tratamiento de pacientes con enfermedades mentales y problemas emocionales. Promoción y prevención de enfermedades mentales.  Gestión de proyectos sociales e institucionales enfocados en la salud mental. "
            }
          />
          <ResumeItem
            year={"2021 - 2021"}
            title={"Desarrollador Full Stack"}
            subTitle={"Soy Henry Bootcamp"}
            text={
              "Mas de 800hrs aprendiendo y desarrollo, con tecnologias con Javascript, React.Js, Node.Js, Express.Js, PostgresSQL, entre otras. Desarrollando Aplicaciones Web con feactures como: ordenamiento, filtrado, busqueda, CRUD.además desarrollamos una tienda virtual completa para un comercio de alimentos saludables, todas bajo supervisión de profesores expertos en la materia y su respectiva aprobación.   "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }

  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
