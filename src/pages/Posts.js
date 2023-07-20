import "../css/Posts.css";
import "../css/Auth.css";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();

  const jobs = [
    {
      id: 1,
      title: "React Native Developer",
      desc: "Do in culpa adipisicing nostrud eu tempor deserunt tempor occaecat labore quis proident esse. Qui ut quis officia veniam. Cillum ea exercitation qui sunt quis ipsum non cillum proident do incididunt sint id. Sint dolor sint ut incididunt magna fugiat cupidatat esse. Non eiusmod sint deserunt.",
      skills: ["React", "React Native", "JavaScript"],
      location: "Banglore",
    },
    {
      id: 2,
      title: "React Native Developer",
      desc: "Dua in culpa adipisicing nostrud eu tempor deserunt tempor occaecat labore quis proident esse. Qui ut quis officia veniam. Cillum ea exercitation qui sunt quis ipsum non cillum proident do incididunt sint id. Sint dolor sint ut incididunt magna fugiat cupidatat esse.",
      skills: ["React", "React Native", "JavaScript"],
      location: "Banglore",
    },
  ];

  return (
    <>
      <h1>Listed Jobs</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="btn"
      >
        Log Out
      </button>
      <div id="post-body">
        {jobs.map((e) => (
          <div className="posts">
            <h2>{e.title}</h2>
            <h3>skills : {e.skills.join(" , ").toString()}</h3>
            <h3>Location : {e.location}</h3>
            <button
              onClick={() => {
                navigate("/jd", {
                  state: {
                    title: e.title,
                    desc: e.desc,
                    skills: e.skills,
                    location: e.location,
                  },
                });
              }}
              className="btn"
            >
              View Description
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Posts;
