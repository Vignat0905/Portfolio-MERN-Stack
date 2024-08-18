import { Typography } from "@mui/material";
import React from "react";
import "./About.css";

const About = ({ about }) => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>{about && about.quote}</Typography>
      </div>
      <div className="aboutContainer1">
        <div>
          <img src={about && about.avatar && about.avatar.url} alt="Abhi" className="jaydimagecss" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
            {about && about.name}
          </Typography>

          <Typography>{about && about.title}</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            {about && about.subtitle}
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            {about && about.description}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;