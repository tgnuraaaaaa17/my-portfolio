import React from "react";

function AboutMe() {
  return (
    <section className="section about-me">
      <h2>About Me</h2>
      <p>
Hi! My name is Nurbakyt, and I am learning backend development. 
I like solving problems, working with application logic,
 and learning something new every day.
      </p>
      <p>
       Now I am studying the basics of backend development — servers, databases, 
       APIs, and server-side logic. In my free time, I like watching movies, 
       playing video games, and playing football.
      </p>

      <div className="skills">
        <h3>My Skills</h3>
        <ul>
          <li>Go (Golang)</li>
          <li>SQL &amp; PostgreSQL</li>
          <li>REST API</li>
           <li>Docker</li>
          <li>Linux</li>
          <li>Git &amp; GitHub</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
