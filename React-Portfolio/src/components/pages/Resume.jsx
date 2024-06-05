
export default function Resume() {
  return (
    <div className="container pt-4">
      <section className="technicalSkills">
        <div className="content">
          <h2>Technical Skills</h2>
          <p>
            Front End: HTML, CSS, JavaScript<br/>
            Back End: JavaScript, Web API's, Third Party API's, Server Side API, Node, OOP, Express, SQL, ORM, MVC, Computer Science, NoSQL, PWA, React, MERN, State<br/>
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
  );
}
