import React from "react";

const About = ({match}) => {
  return <div>{match.params.username}'s schedule</div>;
};

export default About;
