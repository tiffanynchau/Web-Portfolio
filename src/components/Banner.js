import { Container, Row, Col, Image } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import tech1 from "../assets/img/java-script.png";
import tech2 from "../assets/img/typescript.png";
import tech3 from "../assets/img/react.png";
import tech4 from "../assets/img/css-3.png";
import tech5 from "../assets/img/database.png";
import tech6 from "../assets/img/html-5.png";
import tech7 from "../assets/img/nodejs.png";
import tech8 from "../assets/img/bootstrap (1).png";
import tech9 from "../assets/img/UI.png";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline"> Hi, my name is </span>
            <h1>Tiffany Chau</h1>
            <h1 className="tagline1">I build things</h1>
            <p>
              I am a full stack software engineer with a passion for creating
              elegant and efficient web applications. I specialize in developing
              robust, scalable solutions that meet the unique needs of my
              clients.
            </p>
            <button onClick={() => console.log("connect")}>
              Let's connect <ArrowRightCircle size={25} />
            </button>
          </Col>
          <Col className="banner-img-container" xs={12} md={6} xl={5}>
            <Row className="banner-img-block" xs={6} md={4}>
              <Image className="banner-img" src={tech1} rounded />
              <Image className="banner-img" src={tech2} rounded />
              <Image className="banner-img" src={tech3} rounded />
            </Row>
            <Row className="banner-img-block" xs={6} md={4}>
              <Image className="banner-img" src={tech4} rounded />
              <Image className="banner-img" src={tech6} rounded />
              <Image className="banner-img" src={tech7} rounded />
            </Row>
            <Row className="banner-img-block" xs={6} md={4}>
              <Image className="banner-img" src={tech9} rounded />
              <Image className="banner-img" src={tech8} rounded />
              <Image className="banner-img" src={tech5} rounded />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
