import { useState } from "react";

import "../css/PostJob.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

const PostJob = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [skills, setSkills] = useState([]);

  const navigate = useNavigate();

  const addPost = () => {
    axios({
      data: {
        title: title,
        description: description,
        skills: skills,
        location: location,
      },
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      url: "http://demo-env-1.eba-dkupj2uf.ap-south-1.elasticbeanstalk.com/posts/addPost",
    }).then((e) => {
      console.log(e);
      alert("Job Added");
      navigate("/posts");
    });
  };

  return (
    <>
      <h1>Job Post</h1>
      <div className="post-job-div">
        <input
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          className="input"
          placeholder="Title"
        />
        <textarea
          id="input-desc"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          className="input"
          placeholder="Description"
        />
        <input
          onChange={(e) => {
            setSkills(e.target.value.split(","));
          }}
          className="input"
          placeholder="Skills Required"
        />
        <input
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          className="input"
          placeholder="Location"
        />
      </div>
      <button onClick={addPost} className="btn">
        Post Job
      </button>
    </>
  );
};

export default PostJob;
