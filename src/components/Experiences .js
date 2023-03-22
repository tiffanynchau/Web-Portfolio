import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Exptab1 } from "./Exptab1";
import { Exptab2 } from "./Exptab2";

export const Experiences = () => {
  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>EXPERIENCES</h2>
              <hr></hr>

              <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                  <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                      <Nav.Item>
                        <Nav.Link eventKey="first">
                          Docketeer Open Source
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Google</Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Col>
                  <Col sm={9}>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Exptab1 />
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Exptab2 />
                      </Tab.Pane>
                    </Tab.Content>
                  </Col>
                </Row>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
