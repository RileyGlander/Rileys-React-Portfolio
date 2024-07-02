import React from "react"
// import IMG from '../assets/';


export default function Home() {
  return (
    <main className="home">
      <section id="home">
          <h1 className="intro">
            Hey there, my name is Riley
          </h1>
        <img className="photo" src="http://localhost:3000/src/assets/IMG_2897.png" alt="My high school senior picture" />
      </section>
        
    <div className="container pt-4">
      <section className="technicalSkills">
        <div className="content">
          <h2>Technical Skills</h2>
          <p>
            Front End: HTML, CSS, JavaScript<br/>
            Back End: JavaScript, Web APIs, Third Party APIs, Server Side API, Node, OOP, Express, SQL, ORM, MVC, Computer Science, NoSQL, PWA, React, MERN, State<br/>
            Applications: GitHub, Git Bash, Visual Studio Code, MySQL WorkBench, Insomnia
          </p>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        
        <div className="project">
          <div className="project-text">
            <h3>Local Park Weather App |<a href="https://github.com/RileyGlander/local-park-weather-app"> LP Weather GitHub </a>|</h3>
            <p>
              Summary: App that provides current weather forecast for dog parks nearby.<br/>
              Role: Front end<br/>
              Tools: HTML, CSS, JavaScript, API's, and CSS Framework
            </p>
          </div>
          <img className="projectImage" src="http://localhost:3000/src/assets/Screenshot (132).png" alt="Local Park Weather App" />
        </div>

        <div className="project">
          <div className="project-text">
            <h3>Employee Tracker |<a href="https://github.com/RileyGlander/GroupProject2"> ET GitHub </a>| </h3>
            <p>
              Summary: App that allows employers to add and edit employee personal information.<br/>
              Role: Back end<br/>
              Tools: HTML, CSS, JavaScript, MySQL, Node, Insomnia
            </p>
          </div>
          <img className="projectImage" src="http://localhost:3000/src/assets/Screenshot (19).png" alt="Employee Tracker" />
        </div>

        <div className="project">
          <div className="project-text">
            <h3>BookDoor | <a href="https://github.com/RileyGlander/BookDoor">BD GitHub </a>| <a href="https://bookdoor.onrender.com/">BD Deployed</a></h3>
            <p>
              Summary: App that allows users to trade books with other book lovers.<br/>
              Role: Back end<br/>
              Tools: HTML, CSS, JavaScript, React, GraphQL, Apollo Client/Server
            </p>
          </div>
          <img className="projectImage" src="http://localhost:3000/src/assets/Screenshot (131).png" alt="BookDoor App" />
        </div>
      </section>
    </div>
      <section className="aboutMe-container">
         <div className="aboutMe">
         <h2> About Me</h2>
          <p>I'm a Full Stack Flex Developer who graduated the University of Minnesota's online bootcamp.</p>
          <p>You can usually find me on my computer learning more about the languages and skills needed to be a full stack flex web developer.</p>
          <p>Outside of programming, I enjoy activities such as gaming, which has allowed me to develop skills such as strategic thinking, problem solving and teamwork.</p>
          </div>
        </section>
        
        
      <section className="skills-container">
        <div className="skills">
          <h2> Skills</h2>
          <p>Entry level web developer creating websites and software. Certified in Full Stack Web Development from the University of Minnesota Coding Boot Camp. </p>
          <p>Skilled in developing server-side logic to ensure high performance and reliability.</p>
        </div>
      </section>
        <section className="experience-container">
          <div className="experience">
            <h2>Experience</h2>
               <p>Freelance Web Developer 	2023-Present</p>
                <ul>
                  <li> Worked with clients to make impactful websites </li>
                <p><br></br>Handyman 			2021-Present</p>
                  <li>Work with freelance clients in outside work, personal assisting and home maintenance</li>
                </ul>
          </div>
        </section>
            <section className="education-container">
            <div className="education">
               <h3>EDUCATION</h3>
                  <p> Certificate, Full Stack Web Development - University of Minnesota, MN</p>
            </div>
        </section>
      </main>
                      
    

  );


}
