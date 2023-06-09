import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import selfphoto from "../assets/img/photo.JPG";

export const About = () => {
  return (
    <section className="aboutMe" id="about">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <h2>About Me</h2>
            <p>
              Hi there! My name is
              <span style={{ color: "#64ffda" }}> Tiffany Chau</span>, and I am
              a software engineer based in Austin, Texas. I am passionate about
              building web applications that not only look great but also
              perform exceptionally well.
            </p>
            <p>
              Throughout my career, I have worked on various projects, ranging
              from social media platforms to job application management tools. I
              take pride in writing clean, maintainable, and efficient code, and
              I am constantly seeking ways to improve my skills and stay
              up-to-date with the latest technologies.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
            <ul>
              <Row style={{ color: "#64ffda" }}>
                <Col>
                  <li> JavaScript (ES6+)</li>
                  <li> TypeScript</li>
                  <li> React</li>
                  <li> Node.js</li>
                  <li> Express</li>
                </Col>
                <Col>
                  <li> HTML5 / CSS3</li>
                  <li> SQL / NoSQL</li>
                  <li> Bootstrap</li>
                  <li> Material-UI </li>
                </Col>
              </Row>
            </ul>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img className="headshot" src={selfphoto} alt="selfphoto" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
