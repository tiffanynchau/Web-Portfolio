import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

export const Experiences = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>EXPERIENCES</h2>

              <Row>
                <Col className="col-2">
                  <ButtonGroup vertical>
                    <Button>Button</Button>
                    <Button>Button</Button>

                    <Button>Button</Button>
                    <Button>Button</Button>
                  </ButtonGroup>
                </Col>
                <Col className="col-8">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit fugiat iusto fuga praesentium optio,
                    ea
                  </p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
