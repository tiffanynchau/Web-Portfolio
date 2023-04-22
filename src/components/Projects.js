import { Container, Row, Col, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/DockLogo.png";
import projImg2 from "../assets/img/HireHeroLogo.png";
import projImg3 from "../assets/img/yummLogo.png";
import projImg4 from "../assets/img/PawsLogo.png";
import projImg5 from "../assets/img/Act8Logo.png";
import projImg6 from "../assets/img/docker.png";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Docketeer",
      description:
        "Containers management platform for Docker tool. Migrated Docketeer Open Source codebase to TypeScript, restructured the testing suite with Jest, and created a cross-platform desktop app with Electron. I optimized rendering with React Router, secured Google OAuth APIs, and used Webpack for future scalability. I also implemented real-time data visualization with Chart.js.",
      imgUrl: projImg1,
      url: "https://github.com/open-source-labs/Docketeer",
    },
    {
      title: "HireHero",
      description:
        "HireHero simplifies job application management with an interactive UI built using React, Express, Bootstrap, CSS, and JavaScript. The application's user interface is aesthetically pleasing and interactive, with Bootstrap's grid system and customizations using CSS and JavaScript. With HireHero, users can easily manage their job applications and track their progress with each task list.",
      imgUrl: projImg2,
      url: "https://github.com/HireHero/HireHero",
    },
    {
      title: "Yumm!!",
      description:
        "Yumm!! is a social media platform designed to bring together food enthusiasts from around the world. With Yumm!!, users can discover and share delicious recipes, mouth-watering food photos, and connect with other foodies. The platform is built using custom React Hooks for efficient component state management and utilizes Express in the Node.js runtime for fast data transmission. The platform is supported by a robust SQL database, ensuring ACID compliance and allowing for concurrent connections from multiple tables.",
      imgUrl: projImg3,
      url: "https://github.com/CTRI12-tassled-wobbegong/Yumm",
    },
    {
      title: "Pawstask",
      description:
        "Pawstask is a task management application designed to help users organize and manage their daily tasks. The application is built with a focus on simplicity and ease of use, allowing users to quickly add, edit, and complete tasks. With Pawstask, users can prioritize their tasks, set due dates, and receive reminders to stay on track. The application is themed around the world of pets, featuring playful illustrations and animations to create a fun and engaging user experience.",
      imgUrl: projImg4,
      url: "https://github.com/tiffanynchau/PawsTask",
    },
    {
      title: "Activ8",
      description:
        "Ativ8 is a  web application is a tool that allows users to generate activities based on the number of people that would like to participate in the activity. Presently, the application offers account creation and login, activity generation, and team creation functionalities. Users are saved into a database and can create teams containing a certain number of members that are also saved to that user's profile. The application allows users to generate activities for these teams and these activities are saved to those specific teams.",
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
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
