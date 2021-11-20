import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";

import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import { useState } from "react";



function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  init("user_fpiFmqQZ8iXcpPQf3X756");

  const [message, setMessage] = useState({
    name: "",
    email: "",
    subject: "",
    text: "",
  });

  function handlerChange(e) {
    e.preventDefault();
    setMessage({
      ...message,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.name && message.email && message.text) {
      emailjs.send(
        "service_jp626wa",
        "template_e037pcs",
        message,
        "user_fpiFmqQZ8iXcpPQf3X756"
      );
      setMessage({
        name: "",
        email: "",
        subject: "",
        text: "",
      });
      alert("Correo enviado con Exito");
    } else {
      alert("No llenaste los campos requeridos *");
    }
  };


  return (
    <MainLayout>
      <Title title={"Contáctame"} span={"Contáctame"} />
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Puedes enviarme un Email</h4>
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
              <div className="form-field">
                <label htmlFor="name">Nombre*</label>
                <input
                  value={message.name}
                  type="text"
                  id="name"
                  name="name"
                  onChange={(e) => handlerChange(e)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email*</label>
                <input
                  value={message.email}
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => handlerChange(e)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="subject">Asunto</label>
                <input
                  value={message.subject}
                  type="text"
                  id="subject"
                  name="subject"
                  onChange={(e) => handlerChange(e)}
                />
              </div>
              <div className="form-field">
                <label htmlFor="text-area">Mensaje*</label>
                <textarea
                  name="text"
                  value={message.text}
                  id="textarea"
                  cols="30"
                  rows="10"
                  onChange={(e) => handlerChange(e)}
                 
                ></textarea>
              </div>
              <button className="form-field f-button" type='submit'>
               Enviar Email
              </button>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
                title={"Teléfono"}
                icon={phone}
                cont1={"+593963160500"}
                cont2={"Ecu- 062607631"}
            />
            <ContactItem
            title={"Email"}
            icon={email}
            cont1={"yandundavid@gmail.com"}
            cont2={"yandundavid@yahoo.es"}
            />
            <ContactItem
               title={"Ubicación"}
               icon={location}
               cont1={"LLano Grande- 13 de Abril"}
               cont2={"Quito-Ecuador"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      @media screen and (max-width: 502px) {
        width: 70%;
      }
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px) {
        width: 100%;
      }
      .form-field {
        margin-top: 2rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          left: 20px;
          top: -19px;
          display: inline-block;
          background-color: var(--background-dark-color);
          padding: 0 0.5rem;
          color: inherit;
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0 15px;
          width: 100%;
          color: inherit;
        }
        textarea {
          background-color: transparent;
          border: 1px solid var(--border-color);
          outline: none;
          color: inherit;
          width: 100%;
          padding: 0.8rem 1rem;
        }
   
      }
      .f-button{
        background-color: var(--primary-color);
    padding: .8rem 2.5rem;
    color: white;
    cursor: pointer;
    display: inline-block;
    font-size: inherit;
    text-transform: uppercase;
    position: relative;
    transition: all .4s ease-in-out;
    &::after{
        content: "";
        position: absolute;
        width: 0;
        height: .2rem;
        transition: all .4s ease-in-out;
        left: 0;
        bottom: 0;
        opacity: .7;
    }
    &:hover::after{
        width: 100%;
        background-color: var(--white-color);
    }
       }
    }
  }
`;

export default ContactPage;
