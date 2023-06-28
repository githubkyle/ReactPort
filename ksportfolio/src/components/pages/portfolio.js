import React from "react";

export default function Portfolio() {
  const cardStyle = {
    width: "18rem"
  };

  // Helper function that generates a random width for our placeholder images
  // const randomWidth = () => {
  //   const number = Math.random() * (300 - 200) + 200;
  //   return number.toString().split('.')[0];
  // };

  return (
    <div className="container">
      <div className="card" style={cardStyle}>
        <h2>Server Notes</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">
            Github Repo: https://github.com/githubkyle/ServerNotes{" "}
          </p>
          <p className="deployed-app">
            Deployed here: https://githubkyle.github.io/ServerNotes/{" "}
          </p>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <h2>Weather Dashboard</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">
            Github Repo: https://github.com/githubkyle/Weather-Dashboard
          </p>
          <p className="deployed-app">
            Deployed here: https://githubkyle.github.io/Weather-Dashboard/{" "}
          </p>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <h2>Title</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">Github Repo:</p>
          <p className="deployed-app">Deployed here: </p>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <h2>Title</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">Github Repo:</p>
          <p className="deployed-app">Deployed here: </p>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <h2>Title</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">Github Repo:</p>
          <p className="deployed-app">Deployed here: </p>
        </div>
      </div>
      <div className="card" style={cardStyle}>
        <h2>Title</h2>
        <img src={`http://placekitten.com/`} alt="Portfolio entry" />
        <div className="links">
          <p className="github-repo">Github Repo:</p>
          <p className="deployed-app">Deployed here: </p>
        </div>
      </div>
    </div>
  );
}
