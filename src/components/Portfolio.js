import React from "react";
import Project from "./pages/project";

const projects = [
  {
    title: "Server Notes",
    imageUrl: "servernotes.png",
    GithubRepo: "https://github.com/githubkyle/ServerNotes",
    DeployedPage: "https://githubkyle.github.io/ServerNotes/"
  },
  {
    title: "Weather Dashboard",
    imageUrl: "weather.png",
    GithubRepo: "https://github.com/githubkyle/Weather-Dashboard",
    DeployedPage: "https://githubkyle.github.io/Weather-Dashboard/"
  },
  {
    title: "JavaScript Quiz",
    imageUrl: "jsq.png",
    GithubRepo: "https://github.com/githubkyle/Javascript-Quiz",
    DeployedPage: "https://githubkyle.github.io/Javascript-Quiz/"
  },

  {
    title: "Daily Planner",
    imageUrl: "planner.png",
    GithubRepo: "https://github.com/githubkyle/Planner",
    DeployedPage: "https://githubkyle.github.io/Planner/"
  },

  {
    title: "Password Generator",
    imageUrl: "password.png",
    GithubRepo: "https://github.com/githubkyle/Password-Generator",
    DeployedPage: "https://githubkyle.github.io/Password-Generator/"
  },

  {
    title: "First Portfolio",
    imageUrl: "firstport.png",
    GithubRepo: "https://github.com/githubkyle/Challenge2",
    DeployedPage: "https://githubkyle.github.io/Challenge2/"
  }
];

const Portfolio = () => {
  return (
    <div className="app">
      {projects.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          imageUrl={project.imageUrl}
          GithubRepo={project.GithubRepo}
          DeployedPage={project.DeployedPage}
        />
      ))}
    </div>
  );
};

export default Portfolio;
