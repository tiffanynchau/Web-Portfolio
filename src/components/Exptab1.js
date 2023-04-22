import React from "react";

export const Exptab1 = () => {
  return (
    <section className="exp1">
      <h4>Software Engineer</h4>
      <p>2022 - Present</p>
      <ul>
        <li>
          Migrated entire the codebase to
          <span style={{ color: "#64ffda" }}> TypeScipt</span> to reduce silent
          errors produced by unintended type coercion and improve developer’s
          experience in maintaining an efficient, well-structured code
          architecture
        </li>
        <li>
          Utilized <span style={{ color: "#64ffda" }}> React Router</span> to
          enable coherent user experience with the conditional rendering of
          components and optimize rendering performance with minimal network
          requests in a SPA
        </li>
        <li>
          Built a light-weight, efficient desktop application with
          <span style={{ color: "#64ffda" }}> Node.js</span> runtime (in
          <span style={{ color: "#64ffda" }}> Electron</span>) for Docketeer to
          provide a seamless cross-platform experience and speed up
          time-to-market deployment
        </li>
        <li>
          Produced visually appealing designs and a responsive application by
          using <span style={{ color: "#64ffda" }}> Material-UI </span>
          to improve user's experience with live data updates from Docker's
          containers
        </li>
        <li>
          Implemented best practices for securing
          <span style={{ color: "#64ffda" }}> Google OAuth APIs </span> and
          libraries in building the authentication flow, retrieve user
          information, and manage access and refresh tokens
        </li>
      </ul>
    </section>
  );
};
