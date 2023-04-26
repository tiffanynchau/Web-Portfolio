import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.png";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const form = useRef();

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending..");

    emailjs
      .sendForm(
        "service_bstzn3i",
        "template_p5q9izs",
        form.current,
        "ckSVrbqLWRIaljzPk"
      )
      .then(
        (result) => {
          setButtonText("Email sent");
          console.log(result.text);
          window.location.reload(false);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row>
          <Col md={6}>
            <img style={{ width: "80%" }} src={contactImg} alt="Contact Me" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>

            <form ref={form} onSubmit={sendEmail}>
              <Row>
                <Col sm={6} className="px-1">
                  <input type="text" placeholder="Name" name="name" />
                </Col>

                <Col size={12} sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </Col>
                <Col size={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    name="message"
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
