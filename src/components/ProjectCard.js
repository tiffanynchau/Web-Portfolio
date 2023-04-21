import { Col, Button } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div style={{ padding: "10px" }}>
            <Button variant="info" size="sm" href={url} target="_blank">
              Github
            </Button>
          </div>
        </div>
      </div>
    </Col>
  );
};
