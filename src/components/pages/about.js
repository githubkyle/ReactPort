import React from "react";

export default function About() {
  return (
    <div>
      <h1>About Page</h1>
      <img
        src={require(`../../assets/self.jpg`)}
        alt="self"
        style={{ maxWidth: "450px", height: "500px" }}
      ></img>
      <p>
        Kyle Schwent was born and raised in STL. He's played chess most of his
        life, is interested in languages, cats and playing sports.
      </p>
    </div>
  );
}
