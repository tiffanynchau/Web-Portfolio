import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/DockLogo.png";
import projImg2 from "../assets/img/HireHeroLogo.png";
import projImg3 from "../assets/img/yummLogo.png";
import projImg4 from "../assets/img/PawsLogo.png";
import projImg5 from "../assets/img/Act8Logo.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Docketeer",
      description: "Containers management platform for Docker tool",
      imgUrl: projImg1,
      url: "https://github.com/open-source-labs/Docketeer",
    },
    {
      title: "HireHero",
      description: "Simple and effortless job application management",
      imgUrl: projImg2,
      url: "https://github.com/HireHero/HireHero",
    },
    {
      title: "Yumm!!",
      description: "Socical media platform for food enthusiasts",
      imgUrl: projImg3,
      url: "https://github.com/CTRI12-tassled-wobbegong/Yumm",
    },
    {
      title: "Pawstask",
      description: "Aesthetic, interactive task management application",
      imgUrl: projImg4,
      url: "https://github.com/tiffanynchau/PawsTask",
    },
    {
      title: "Activ8",
      description: "Activities generator for teams",
      imgUrl: projImg5,
      url: "https://github.com/Activ-8/Activ-8",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <hr></hr>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
