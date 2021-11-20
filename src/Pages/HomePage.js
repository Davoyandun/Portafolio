import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import GithubIcon from "@material-ui/icons/GitHub";
import YoutubeIcon from "@material-ui/icons/YouTube";
import Particle from "../Components/Particle";

function HomePage() {
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1>
          Hola, soy<span> David Yandún</span>
        </h1>
        <p>
          He tomado la decisión de reorientar mi futuro profesional al mundo de
          la tecnología, el cambio siempre es atemorizante y mentiría si digo
          que no tuve miedo, pero más miedo me da no seguir mis sueños.
        </p>
        <div className="icons">
          <a
            href="https://www.instagram.com/davo_yandun/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-facebook"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://github.com/Davoyandun"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.youtube.com/channel/UC3YD6jreOeRDl1J4EMenUhg"
            target="_blank"
            rel="noopener noreferrer"
            className="icon i-youtube"
          >
            <YoutubeIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;

  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;

    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }

      .i-youtube {
        &:hover {
          border: 2px solid red;
          color: red;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
    }
  }
`;

export default HomePage;
