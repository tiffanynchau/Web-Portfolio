import { Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={6} sm={6} md={4}>
      <div className="proj-imgbx">
        <img className="pro-img" src={imgUrl} alt="pro-img" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ padding: "10px" }}>
            <Button variant="primary" size="m" href={url} target="_blank">
              Github
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
