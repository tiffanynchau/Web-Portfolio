import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

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
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
