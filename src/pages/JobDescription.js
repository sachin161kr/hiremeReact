import { useLocation } from "react-router-dom";

import "../css/JD.css";

const JobDescription = () => {
  const state = useLocation();

  const title = state.state.title;
  const desc = state.state.desc;
  const location = state.state.location;
  const skills = state.state.skills;

  return (
    <>
      <div id="JD">
        <h2>{title}</h2>
        <p>{desc}</p>
        <h3>skills : {skills.join(" , ").toString()}</h3>
        <h3>Location : {location}</h3>
      </div>
    </>
  );
};

export default JobDescription;
