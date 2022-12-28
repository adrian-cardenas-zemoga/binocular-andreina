import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-support">
        <h1 className="footer-support-title">Soporte</h1>
        <ul className="footer-support-list">
          <li>METODO DE PAGO</li>
          <li>DEVOLUCIONES Y QUEJAS</li>
          <li>EQUIPOS DE VENTAS</li>
          <li>POLITICAS DE PRIVACIDAD Y DERECHOS</li>
          <li>POLITICA DE COOKIES</li>
          <li>REGISTRO DE USUARIOS</li>
          <li>TERMINOS DE USO</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h3 className="footer-contact-subtitle">Contact</h3>
        <h1 className="footer-contact-title">
          ¿TIENE DUDAS ACERCA DE BINOCULAR?
        </h1>
        <p className="footer-contact-description">
          Háganos llegar sus dudas vía correo electrónico y nuestro equipo de
          ventas aclarara sus dudas.
        </p>
      </div>
      <div className="footer-menu">
        <img
          className="footer-menu-logo"
          src="logo-binocular-2.svg"
          alt="Logo Binocular"
        />
        <ul className="footer-menu-list">
          <li>ACERCA DE</li>
          <li>BLOG</li>
          <li>CONDICIONES GENERALES</li>
          <li>PLANES</li>
          <li>CONTACTO</li>
          <li>CONDICIONES GENERALES</li>
          <li>INFORMACION GENERAL</li>
        </ul>
        <p className="footer-menu-copyright">
          Copyright 2022. All Rights Reserved
        </p>
        <p className="footer-menu-company">ACORDE INTERNATIONAL</p>
      </div>
    </div>
  );
}

export default Footer;
