import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRoute, Routes, Route } from "react-router-dom";

export const About = () => {
  return (
    <Container>
      <Row className="align-items-center">
        <Col xs={12} md={6} xl={7}>
          <h1>About Me</h1>
          <p>
            Hi there! My name is Tiffany Chau, and I am a software engineer
            based in Austin, Texas. I am passionate about building web
            applications that not only look great but also perform exceptionally
            well.
          </p>
          <p>
            Throughout my career, I have worked on various projects, ranging
            from social media platforms to job application management tools. I
            take pride in writing clean, maintainable, and efficient code, and I
            am constantly seeking ways to improve my skills and stay up-to-date
            with the latest technologies.
          </p>
          <p>
            When I am not coding, you can find me trying out new recipes in the
            kitchen, or playing with my adorable pups. I believe that having a
            good work-life balance is crucial for maintaining creativity and
            productivity.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>
        </Col>
      </Row>
    </Container>
  );
};
