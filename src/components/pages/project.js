import React from "react";

const Project = ({ title, imageUrl, GithubRepo, DeployedPage }) => {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img
        src={require(`../../assets/${imageUrl}`)}
        alt={title}
        style={{ maxWidth: "450px", height: "500px" }}
      />
      <a href={GithubRepo}>
        <h3>GitHub Repo</h3>
      </a>
      <a href={DeployedPage}>
        <h3>Deployed Page</h3>
      </a>
    </div>
  );
};

export default Project;

//   return (
//     <div className="container">
//       <div className="card" style={cardStyle}>
//         <h2>Server Notes</h2>
//         <img src={`http://placekitten.com/`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/ServerNotes
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/ServerNotes/
//           </p>
//         </div>
//       </div>
//       <div className="card" style={cardStyle}>
//         <h2>Weather Dashboard</h2>
//         <img src={`weather.png`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/Weather-Dashboard
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/Weather-Dashboard/
//           </p>
//         </div>
//       </div>
//       <div className="card" style={cardStyle}>
//         <h2>Javascript Quiz</h2>
//         <img src={`jsq.png`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/Javascript-Quiz
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/Javascript-Quiz/
//           </p>
//         </div>
//       </div>
//       <div className="card" style={cardStyle}>
//         <h2>Daily Planner</h2>
//         <img src={`planner.png`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/Planner
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/Planner/
//           </p>
//         </div>
//       </div>
//       <div className="card" style={cardStyle}>
//         <h2>Password Generator</h2>
//         <img src={`password.png`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/Password-Generator
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/Password-Generator/
//           </p>
//         </div>
//       </div>
//       <div className="card" style={cardStyle}>
//         <h2>First Portfolio</h2>
//         <img src={`firstport.png`} alt="Portfolio entry" />
//         <div className="links">
//           <p className="github-repo">
//             Github Repo: https://github.com/githubkyle/Challenge2
//           </p>
//           <p className="deployed-app">
//             Deployed here: https://githubkyle.github.io/Challenge2/
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
