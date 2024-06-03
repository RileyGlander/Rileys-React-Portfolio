// This is a static page mocking an "About Us" section for our fake user data
export default function Resume() {
  return (
    <div className="container pt-4">
      <p>
      

      </p>
      <section className="technicalSkills">
        <div className="container">
          <div className="row p-2">
            <div className="projects">
            <div className="col-lg-4">
              <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                <div className="features-icons-icon d-flex">
                </div>
                <h2>Technical Skills</h2>
                  <p>
                    Front End:  HTML, CSS, JavaScript
                    Back End: JavaScript, Web API’s, Third Party API’s, Server Side API, Node, OOP, Express, SQL, ORM, MVC, Computer Science, NoSQL, PWA, React, MERN, State
                    Applications: GitHub, Git Bash, Visual Studio Code, MySQL WorkBench, Insomnia
                  </p>
                  <section className="projects">
                <h2>PROJECTS</h2>
                <div className="project1">

                    <b>Local Park Weather App |<a href="https://github.com/RileyGlander/local-park-weather-app"> LP Weather GitHub </a>|</b>
                       <p> 
                           Summary: App that provides current weather forecast for dog parks nearby.
                           Role: Front end
                           Tools: HTML, CSS, JavaScript, API’s, and CSS Framework 
                       </p>
                  </div>
                       <img className="projectImage1" src="http://localhost:3000/src/assets/Screenshot (132).png" alt="My first project. It is a Local Park Weather App" />
                      
                  <div className="project2">
                    <b>Employee Tracker |<a href="https://github.com/RileyGlander/GroupProject2"> ET GitHub </a>| </b>
                      <p>
                        Summary: App that allows employers to add and edit employee personal information,
                        Role: Back end
                        Tools: HTML, CSS, JavaScript, MySQL, Node, Insomnia 
                      </p>
                    </div>
                      <img className="projectImage2" src="http://localhost:3000/src/assets/Screenshot (19).png" alt="My second project. It is a Employee Tracker App" />

                    <div className="project3">
                      <b>BookDoor| <a href="https://github.com/RileyGlander/BookDoor">BD GitHub </a>| <a href="https://bookdoor.onrender.com/">BD Deployed</a></b>
                        <p>
                          Summary: App that allows users to trade books with other book lovers..
                          Role: Back end 
                          Tools: HTML, CSS, JavaScript, React, GraphQL, Apollo Client/Server
                        </p>
                        </div>
                      
                        <img className="projectImage3" src="http://localhost:3000/src/assets/Screenshot (131).png" alt="My third project. It is a Book Door App" />
                        </section>
                      </div>
              </div>
            </div>
            
            
          </div>
        </div>
      </section>
    </div>
  );
  
}
