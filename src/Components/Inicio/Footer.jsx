import React from "react";
import { Link } from "react-router-dom";
import {
  FacebookOutlined,
  InstagramOutlined,
  WhatsAppOutlined,
  MailOutlined,
  YoutubeOutlined,
  PushpinOutlined,
} from "@ant-design/icons";
import { Typography } from "antd";
const Footer = () => {
  const { Title } = Typography;
  return (
    <div className="footer_container">
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          Huellitas al rescate
        </Title>
        <br />
        <ul>
          <li className="li-styles">
            <Link className="a-styles" to="/inicio">
              Inicio
            </Link>
          </li>
          <li className="li-styles">
            <Link className="a-styles" to="/adopciones">
              Adopciones
            </Link>
          </li>
          <li className="li-styles">
            <Link className="a-styles" to="/estudiantes">
              Estudiantes
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          Redes sociales
        </Title>
        <br />
        <div className="social-networks">
          <a
            className="a-styles"
            href="https://ant.design/components/icon/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookOutlined style={{ fontSize: "40px" }} />
          </a>
          <a
            className="a-styles"
            href="https://ant.design/components/icon/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramOutlined style={{ fontSize: "40px" }} />
          </a>
          <a
            className="a-styles"
            href="https://ant.design/components/icon/"
            target="_blank"
            rel="noreferrer"
          >
            <YoutubeOutlined style={{ fontSize: "40px" }} />
          </a>
        </div>
      </div>
      <div>
        <Title level={3} style={{ color: "white", textAlign: "center" }}>
          ¿Comó contactarnos?
        </Title>
        <br />
        <div className="contact-item">
          <WhatsAppOutlined style={{ fontSize: "30px" }} />
          +57 322 874 1223
        </div>
        <br />
        <div className="contact-item">
          <MailOutlined style={{ fontSize: "30px" }} />
          ejemplo@ejemplo.com
        </div>
        <br />
        <div className="contact-item">
          <PushpinOutlined style={{ fontSize: "30px" }} />
          calle 80 c sur #78-20
        </div>
        <br />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15906.596930896832!2d-74.0652613!3d4.656487499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1615434516632!5m2!1ses!2sco"
          title="maps"
          className="map-styles"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="rights-reserved">
        <p>Todos los derechos reservados 2021</p>
      </div>
    </div>
  );
};

export default Footer;